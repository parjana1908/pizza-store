require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => { console.error(err); process.exit(1); });

// Order Schema
const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },   // Firebase UID
  items: [
    {
      _id: String,
      name: String,
      price: Number,
      imageUrl: String,
      quantity: Number,
    },
  ],
  totalAmount: { type: Number, required: true },
  deliveryAddress: { type: String, default: "" },
  status: {
    type: String,
    enum: ["pending", "confirmed", "preparing", "out_for_delivery", "delivered", "cancelled"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);

// ── Routes ──────────────────────────────────────────────

// POST /api/orders  — place an order
app.post("/api/orders", async (req, res) => {
  try {
    const { userId, items, totalAmount, deliveryAddress } = req.body;
    if (!userId || !items || items.length === 0) {
      return res.status(400).json({ message: "userId and items are required." });
    }
    const order = await Order.create({ userId, items, totalAmount, deliveryAddress });
    res.status(201).json({ message: "Order placed!", order });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/orders/:userId  — get orders for a user
app.get("/api/orders/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.json({ orders });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE /api/orders/:id  — cancel an order
app.delete("/api/orders/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found." });
    if (order.status !== "pending") {
      return res.status(400).json({ message: "Only pending orders can be cancelled." });
    }
    order.status = "cancelled";
    await order.save();
    res.json({ message: "Order cancelled.", order });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
import Order from '../models/Order.js';

export const addOrderItems = async (req, res) => {
  const {
    orderItems, shippingAddress, paymentMethod,
    taxPrice, shippingPrice, totalPrice
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400).json({ message: 'No order items' });
    return;
  }

  const order = new Order({
    user: req.user._id,
    orderItems,
    shippingAddress,
    paymentMethod,
    taxPrice,
    shippingPrice,
    totalPrice
  });

  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
};

export const getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
};

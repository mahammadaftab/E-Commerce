import React from 'react';
import axios from 'axios';

const PaymentPage = () => {
  const payNow = async () => {
    const { data: order } = await axios.post('/api/payments/create-order', { amount: 500 });

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: order.amount,
      currency: 'INR',
      name: 'My E-Commerce',
      order_id: order.id,
      handler: function (response) {
        alert('Payment Successful!');
        console.log(response);
      },
      theme: { color: '#3399cc' },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <div>
      <h2>Pay with Razorpay</h2>
      <button onClick={payNow}>Pay ₹500</button>
    </div>
  );
};

export default PaymentPage;

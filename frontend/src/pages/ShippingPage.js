import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShippingPage = () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem('shippingAddress', JSON.stringify({ address, city, postalCode, country }));
    navigate('/payment');
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Shipping</h2>
      <input placeholder="Address" required onChange={(e) => setAddress(e.target.value)} />
      <input placeholder="City" required onChange={(e) => setCity(e.target.value)} />
      <input placeholder="Postal Code" required onChange={(e) => setPostalCode(e.target.value)} />
      <input placeholder="Country" required onChange={(e) => setCountry(e.target.value)} />
      <button type="submit">Continue</button>
    </form>
  );
};

export default ShippingPage;

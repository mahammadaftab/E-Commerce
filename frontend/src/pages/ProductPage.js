import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../redux/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductPage = () => {
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    navigate(`/cart?id=${id}&qty=${qty}`);
  };

  return loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
    <div className="product-page">
      <img src={product.image} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <strong>Price: ₹{product.price}</strong>
        <br />
        <select value={qty} onChange={(e) => setQty(e.target.value)}>
          {[...Array(product.countInStock).keys()].map(x => (
            <option key={x+1} value={x+1}>{x+1}</option>
          ))}
        </select>
        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;

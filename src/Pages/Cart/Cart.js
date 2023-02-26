import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Cart.css";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalOriginalPrice, setTotalOriginalPrice] = useState(0);

  useEffect(() => {
    fetchCart();
  }, []);
  
  function fetchCart() {
    axios.get(`http://localhost:8080/cart`)
    .then(res => {
      // console.log(res.data);
      setProducts(res.data);

      let price1 = 0;
      let originalPrice1 = 0;

      res.data.map(({price, quantity, originalPrice}) => {
        price1 += price * quantity;
        originalPrice1 += originalPrice * quantity;
      })
      setTotalPrice(price1);
      setTotalOriginalPrice(originalPrice1);
    })
    .catch(err => {
      console.log(err);
    })
  }

  console.log(products, totalPrice, totalOriginalPrice);


  const handleRemove = (e) => {
    console.log(e.target.id);

    axios.delete(`http://localhost:8080/cart/${e.target.id}`)
    .then(res => {
      console.log(res);

      fetchCart();
    })
    .catch(err => {
      console.log(err);
    })
  }

  const handleQuantityChange = (e) => {
    console.log(e.target.id, e.target.value);

    axios({
      method: "patch",
      url: `http://localhost:8080/cart/${e.target.id}`,
      data: {
        quantity: +e.target.value
      }
    })
    .then(res => {
      console.log(res);

      fetchCart();
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div>
      {products.length ?
        <div id="cart-container">
          <div id="cart-container-left">
            {products.map(({ id, image, brand, name, price, quantity, originalPrice, membersPrice }) =>
              <div key={id} className="cart-container-left-card-main">
                <div className="cart-container-left-card">
                  <div className="cart-container-left-card-left">
                    <p className="cart-card-name">{name}</p>
                    <p>
                      <span className="cart-card-price">₹{price}</span>
                      <span className="cart-card-original-price">₹{originalPrice}</span>
                    </p>
                    <p className="cart-card-saved-price">You saves ₹{originalPrice - price}!</p>
                    <select className="cart-card-size">
                      <option value="S">Size: S</option>
                      <option value="M">Size: M</option>
                      <option value="L">Size: L</option>
                      <option value="XL">Size: XL</option>
                      <option value="2XL">Size: 2XL</option>
                      <option value="3XL">Size: 3XL</option>
                    </select>
                    <select value={quantity} id={id} onChange={handleQuantityChange} className="cart-card-quantity">
                      <option value="1">Qty: 1</option>
                      <option value="2">Qty: 2</option>
                      <option value="3">Qty: 3</option>
                      <option value="4">Qty: 4</option>
                      <option value="5">Qty: 5</option>
                      <option value="6">Qty: 6</option>
                      <option value="7">Qty: 7</option>
                      <option value="8">Qty: 8</option>
                      <option value="9">Qty: 9</option>
                      <option value="10">Qty: 10</option>
                    </select>
                  </div>
                  <div className="cart-card-image-container">
                    <img src={image} alt="" />
                  </div>
                </div>
                <div className="cart-card-btns">
                  <div onClick={handleRemove} id={id} className="cart-card-btn1">Remove</div>
                  <div className="cart-card-btn2">Move to wishlist</div>
                </div>
              </div>)
            }
          </div>

          <div id="cart-container-right">
            <p id="cart-price-summary">Price Summary</p>
            <div>
              <span>Total MRP (Incl. of taxes)</span>
              <span>₹{totalOriginalPrice}</span>
            </div>
            <div>
              <span>Shipping Charges</span>
              <span>FREE</span>
            </div>
            <div>
              <span>Discount</span>
              <span>- ₹{totalOriginalPrice - totalPrice}</span>
            </div>
            <div>
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>
            <p className="cart-hr"></p>
            <Link to="/checkout"><button id="cart-checkout-btn">Checkout</button></Link>
          </div>
        </div>
        :
        <div id="empty-cart-container">
          <img src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png" alt="" />
          <p id="empty-cart-p">Nothing in the bag</p>
          <Link to="/"><button id="empty-cart-button">Continue Shopping</button></Link>
        </div>}
    </div>
  )
}

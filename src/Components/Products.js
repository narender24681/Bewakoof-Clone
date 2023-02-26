import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./Products.css";

export default function Products({ url }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then(res => {
        // console.log(res.data);
        setProducts(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);
  console.log(products);

  const handleCartBtn = (e) => {
    console.log(`${url}/${e.target.id}`)
    axios.get(`${url}/${e.target.id}`)
    .then(res => {
      // console.log(res.data);

      let data1 = {
        image: res.data.image,
        brand: res.data.brand,
        name: res.data.name,
        price: res.data.price,
        quantity: 1,
        originalPrice: res.data.originalPrice,
        membersPrice: res.data.membersPrice,
      }
      // console.log(data1);

      axios({
        method: "post",
        url: `http://localhost:8080/cart`,
        data: data1
      })
      .then(res1 => {
        console.log(res1)
      })
      .catch(err1 => {
        console.log(err1);
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div id="products-card-container">
      {products.map(({ id, image, brand, name, price, originalPrice, membersPrice }) =>
        <div key={id} className="product-card">
          <img src={image} alt={name} />
          <div className="product-card-section-1">
            <p className="product-card-brand">{brand}</p>
            <img src="https://images.bewakoof.com/web/Wishlist.svg" alt="" />
          </div>
          <p className="product-card-name">{name.substring(0, 30)} ...</p>
          <p>
            <span className="product-card-price">₹{price}</span>
            <span className="product-card-original-price">₹{originalPrice}</span>
          </p>
          <span className="product-card-members-price">₹{membersPrice} For TriBe Members</span>
          <button onClick={handleCartBtn} id={id} className="product-card-cart-btn">Add To Cart</button>
        </div>
      )}
    </div>
  )
}

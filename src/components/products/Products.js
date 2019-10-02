import React from "react";
import { connect } from "react-redux";
const Products = ({ products }) => {
  return (
    <ul className="collection">
      <h3 className="collection-header">Products</h3>
      {products.map(product => {
        return (
          <li className="collection-item" key={product.id}>
            Product: {product.name}
            <br />
            Price: ${product.price}
          </li>
        );
      })}
    </ul>
  );
};

const mapPropsToState = state => ({
  products: state.products
});
export default connect(mapPropsToState)(Products);

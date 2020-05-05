import React from "react";

const ShopCart = (props) => {
  return (
    <p>
      CART: ({props.selectedProducts === undefined ? 0 : props.selectedProducts}
      )
    </p>
  );
};

export default ShopCart;

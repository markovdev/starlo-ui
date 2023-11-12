import React from "react";
import List from "../List/List";
import Item from "../List/Item/Item";
import { Link } from "react-router-dom";
import { LiaShoppingCartSolid } from "react-icons/lia";

const Cart = () => {
  return (
    <List>
      <Item>
        <Link to="/orders">
          <LiaShoppingCartSolid className="navbar__cart" />
        </Link>
      </Item>
    </List>
  );
};

export default Cart;

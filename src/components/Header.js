import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/imgs/Restaurant-Logo.png";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';


const Header = () => {
  const [logStatus, setLogStatus] = useState("Login");

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector(store => store.cart.items);

  return (
    <div id="head">
      <Link to="/">
        <img src={Logo} alt="Logo-Img" />
      </Link>


      <div className="names">
        <Link to="/">
          <h3>Home</h3>{" "}
        </Link>
        <Link to="/about">
          <h3>About</h3>
        </Link>
        <Link to="/help">
          <h3>Help</h3>
        </Link>


        {/* {isOnline?<h1>🟢</h1>:<h1>🔴</h1>} */}

        <Link to="/cart">
          {/* <button className="cart-btn"> Cart - {cartItems.length} </button> */}

        <IconButton className="cart-btn" style={{ color: 'black' }} aria-label="add to shopping cart">
          <ShoppingCartIcon /> <p className="cart-p"> {cartItems.length}</p>
        </IconButton>
        </Link>

        <h3 className="mlr-5">
          <b>{user.name}</b>
        </h3>

        <Button variant="outlined" style={{ backgroundColor: '#c0951e', color: "black" }} className="log-btn"
          onClick={() => {
            logStatus === "Login"
              ? setLogStatus("Logout")
              : setLogStatus("Login");
          }}
        >
          {logStatus}
        </Button>

      </div>
    </div>
  );
};

export default Header;

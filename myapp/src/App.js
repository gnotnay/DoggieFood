import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AppBar from "./components/AppBar";
import LinksSlide from "./components/LinksSlide";
import ShopCart from "./components/ShopCart";
import ContactInfo from "./components/ContactInfo";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Popup from "reactjs-popup";

const useStyles = makeStyles((theme) => ({
  quantity: {
    // height: 20,
    // width: 20,
  },
}));

function App() {
  const classes = useStyles();
  const [selectedProduct1, setSelectedProduct1] = useState(0);
  const [selectedProduct2, setSelectedProduct2] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState(0);

  const addToCartHandler = () => {
    setSelectedProducts(
      Number.parseInt(selectedProduct1) + Number.parseInt(selectedProduct2)
    );
  };

  const handleProduct1Change = (e) => {
    setSelectedProduct1(e.target.value);
  };

  const handleProduct2Change = (e) => {
    setSelectedProduct2(e.target.value);
  };
  // console.log("p1", selectedProduct1);
  // console.log("p2", selectedProduct2);
  // console.log("total", selectedProducts);
  return (
    <div className="App" data-testid="App">
      <header className="App-header" data-testid="App-header">
        <AppBar />
      </header>
      <LinksSlide />
      <div id="products-info" data-testid="products-info">
        <div className="product" id="product1" data-testid="product1">
          <div data-testid="product1-img">
            <img
              src="http://icode4.life/img/202005/product1.png"
              height="40%"
              width="100%"
            />
          </div>
          <div className="product-description">
            <Typography variant="subtitle1" data-testid="product1-description">
              RAW DIET RECIPE I
            </Typography>
          </div>
          <form>
            <div className="input-container">
              <TextField
                className="quantity"
                size="small"
                label="Quantity"
                type="number"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{ inputProps: { min: 0, max: 10 } }}
                onChange={handleProduct1Change}
              />
              <Button
                variant="contained"
                onClick={addToCartHandler}
                data-testid="product1-button"
              >
                Add
              </Button>
            </div>
          </form>
        </div>

        <div className="product" id="product2" data-testid="product2">
          <div data-testid="product2-img">
            <img
              src="http://icode4.life/img/202005/product2.png"
              height="40%"
              width="100%"
            />
          </div>
          <div className="product-description">
            <Typography variant="subtitle1" data-testid="product2-description">
              RAW DIET RECIPE II
            </Typography>
          </div>
          <form>
            <div className="input-container">
              <TextField
                className="quantity"
                size="small"
                label="Quantity"
                type="number"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{ inputProps: { min: 0, max: 10 } }}
                onChange={handleProduct2Change}
              />
              <Button
                variant="contained"
                onClick={addToCartHandler}
                className="product-button"
                data-testid="product2-button"
              >
                Add
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div id="shop-cart" data-testid="shop-cart">
        <ShopCart selectedProducts={selectedProducts} />
      </div>
      <div id="cart-icon" data-testid="ShoppingCartRoundedIcon">
        <Popup
          trigger={<ShoppingCartOutlinedIcon style={{ fontSize: 50 }} />}
          position="left center"
        >
          <div>Please contact through WeChat~</div>
        </Popup>
      </div>
      <div data-testid="ContactInfo">
        <ContactInfo />
        <LinksSlide />
      </div>
    </div>
  );
}

export default App;

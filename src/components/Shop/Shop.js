import React from "react";
import ShopHeader from "./ShopHeader/ShopHeader";
import ImgSlider from "../ImgSlider/ImgSlider";
import "./Shop.css";
const Shop = () => {
  const data = [
    {
      id: "0",
      modelName: "Model S",
      img: "1(1).jpg",
    },
    {
      id: "1",
      modelName: "Model 3",
      img: "1(2).jpg",
    },
    {
      id: "2",
      modelName: "Model Y",
      img: "1(3).jpg",
    },
    {
      id: "3",
      modelName: "Model X",
      img: "1(4).jpg",
    },
  ];
  return (
    <div>
      <ShopHeader />
      <ImgSlider data={data} />
      <div>
        <div className="shopHeading">
          {" "}
          <p className="shopBestSell">Best Sellers</p>
          <p>Shop All</p>
        </div>
        <div className="AccImgs">
          <div className="fsrtmg">
            <img src={require("../../assets/images/models.jpg").default}></img>
          </div>
          <div className="fsrtmg">
            <div className="nrtmg">
              <img
                src={require("../../assets/images/model3a.jpg").default}
              ></img>
            </div>
            <div className="nrtmg">
              <img
                src={require("../../assets/images/modely.jfif").default}
              ></img>
            </div>
          </div>
          <div className="fsrtmg">
            <img src={require("../../assets/images/model_y.jpg").default}></img>
          </div>
          <div className="fsrtmg">
            <div className="nrtmg">
              <img
                style={{height:"1045px"}}
                src={require("../../assets/images/charger.jpg").default}
              ></img>
            </div>
            <div className="nrtmggg">
              <img
                src={require("../../assets/images/men.jpg").default}
              ></img>
              <img
              src={require("../../assets/images/womens.jpg").default}></img>
            </div>
          </div>
          <div className="fsrtmg">
            <img src={require("../../assets/images/tesla.jpg").default}></img>
          </div>
        </div>
      </div>
      <div className="footer">
          <p>Tesla @ 2021</p>
          <p>Privacy & Legal</p>
          <p>Careers</p>
          <p>Forums</p>
          <p>Locations</p>
          <p>tesla.com</p>
      </div>
    </div>
  );
};

export default Shop;

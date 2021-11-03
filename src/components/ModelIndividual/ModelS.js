import React from "react";
import Header from "../Header/Header";
import Coverimage from "../../assets/images/models/models.jfif";
import SecondImg from "../../assets/images/models/models2.jpg";
import "./ModelS.css";
import ImgSlider from "../ImgSlider/ImgSlider";
import Fade from "react-reveal/Fade";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import CarOrderImg from "../../assets/images/models/modelsorder.jpeg";

function ModelS() {
  const data = [
    {
      id: "0",
      img: "models/models3.jfif",
    },
    {
      id: "1",
      img: "models/models6.jfif",
    },
    {
      id: "2",
      img: "models/models4.png",
    },
    {
      id: "3",
      img: "models/models5.jfif",
    },
  ];
  return (
    <>
      <Header />
      <div style={{ background: "black" }}>
        <div className="coverimgDiv">
          <img src={Coverimage} className="coverimage"></img>
          <Fade bottom>
            <div className="coverText">
              <p className="cimCoHead">Model S</p>
              <p className="cimPlain">Plaid</p>
            </div>
          </Fade>
          <Fade bottom cascade>
            <div className="carDetails">
              <div className="ccc_ddiv">
                <p className="carDt_infos">369 mi</p>
                <p className="carDt_text">Range(EPA est.)</p>
              </div>
              <div className="ccc_ddiv">
                <p className="carDt_infos">1.99s</p>
                <p className="carDt_text">0-60 mph*</p>
              </div>
              <div className="ccc_ddiv">
                <p className="carDt_infos">200mph</p>
                <p className="carDt_text">Top Speed</p>
              </div>
              <div className="ccc_ddiv">
                <p className="carDt_infos">1,020 hp</p>
                <p className="carDt_text">Peak Power</p>
              </div>
              <div></div>
            </div>
          </Fade>
        </div>
        <div className="secDiv">
          <img src={SecondImg} className="coverimage"></img>
          <Fade bottom>
            <div className="secImgTextd">
              <p className="secImgText">All-New Interior</p>
            </div>
          </Fade>
          <div className="secOverlay"></div>
        </div>
        <div className="thirddiv">
          <Fade bottom>
            <ImgSlider data={data} />
          </Fade>
        </div>
        <div className="car">
          <div className="car__image">
            <img src={CarOrderImg} alt="" />
          </div>
          <Fade bottom>
            <div className="car__actions">
              <ButtonPrimary name="Order Now" />
              <ButtonPrimary name="Compare" />
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default ModelS;

/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import Fade from "react-reveal/Fade";
import Header from "../Header/Header";
import Coverimage from "../../assets/images/models/models.jfif";
import SafetyCoverImg from "../../assets/images/modely/modely2.png";
import modely4 from "../../assets/images/modely/modely4.jpg";
import modely5 from "../../assets/images/modely/modely5.jfif";
import modely7 from "../../assets/images/modely/modely10.jpg";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import CarOrderImg from "../../assets/images/modely/modely8.jpg"
import "./ModelY.css";
var slideIndex2 = 1;
var sliding = false;

export default function App() {
  const anchors = [
    "MODEL Y",
    "SAFETY",
    "UTILITY",
    "ALL-WHEEL DRIVE",
    "RANGE",
    "AUTOPILOT",
    "INTERIOR",
    "SPECS",
    "ORDER",
  ];
  const fullpageOptions = {
    //anchors: ["firstPage", "secondPage", "thirdPage"],
    //sectionsColor: ["#282c34", "#ff5f45", "#0798ec"],
    //scrollOverflow: true,
    anchors: { anchors },
    navigationTooltips: anchors,
    controlArrows: false,
    navigation: true,
    loop: false,
    loopHorizontal: false,
    scrollOverflow: true,
    scrollHorizontally: true,
    verticalCentered: false,
  };
  function onLeave(index, nextIndex, direction) {
    if (index.index == 2 && !sliding) {
      if (direction == "down" && slideIndex2 < 4) {
        slideIndex2++;
        sliding = true;
        window.fullpage_api.moveSlideRight();
        //$.fn.fullpage.moveSlideRight();
        return false;
      } else if (direction == "up" && slideIndex2 > 1) {
        slideIndex2 = slideIndex2 - 1;
        sliding = true;
        window.fullpage_api.moveSlideLeft();
        //$.fn.fullpage.moveSlideLeft();
        return false;
      }
    } else if (sliding) {
      return false;
    }
  }
  const afterLoad = () => {
    sliding = false;
  };
  const onSlideLeave = (index, direction) => {
    if (index == 3) {
      if (direction == "right") {
        sliding = true;
        slideIndex2++;
      }

      if (direction == "left") {
        sliding = true;
        slideIndex2--;
      }
    }
  };
  return (
    <ReactFullpage
      callbacks={["onLeave", "afterLoad"]}
      /*onLeave={function (index, fullpageApi) {
        console.log("fullpage",fullpage_api,"dome");
        fullpage_api.moveSlideLeft();
      }}*/
      //afterSlideLoad={afterLoad}
      //onSlideLeave={onSlideLeave}
      //onLeave={onLeave}
      {...fullpageOptions}
      render={({ state, fullpageApi, origin, index }) => {
        console.log(state, origin, index);
        if (state.callbacks === "onLeave") {
          onLeave(fullpageApi);
        }
        return (
          <>
            <Header />
            <div id="fullpage">
              <div className="section">
                <div className="coverimgDiv coverImgWhole">
                  <img src={Coverimage} className="coverimage"></img>
                  <Fade bottom>
                    <div className="coverText">
                      <p className="cimCoHead">Model Y</p>
                      <p className="cimPlain">Plaid</p>
                    </div>
                  </Fade>
                  <Fade bottom cascade>
                    <div className="carDetails">
                      <div className="ccc_ddiv">
                        <p className="carDt_infos">76 cu ft</p>
                        <p className="carDt_text">Cargo Space</p>
                      </div>
                      <div className="ccc_ddiv">
                        <p className="carDt_infos">330 mi</p>
                        <p className="carDt_text">Range (EPA est.)</p>
                      </div>
                      <div className="ccc_ddiv">
                        <p className="carDt_infos">AWD</p>
                        <p className="carDt_text">Dual Motor</p>
                      </div>
                      <div className="ccc_ddiv">
                        <div className="coverImg_btn">ORDER</div>
                      </div>
                      <div></div>
                    </div>
                  </Fade>
                </div>
              </div>
              <div className="section">
                <div className="sec_sec_div">
                  <div className="sec__left">
                    <div className="sec__leftw">
                      <div>
                        <p>Safety</p>
                        <h2>Designed for Safety</h2>
                        <p>
                          Like every Tesla, Model Y is designed to be the safest
                          vehicle in its class. The low center of gravity, rigid
                          body structure and large crumple zones provide
                          unparalleled protection.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sec__right">
                    <img src={SafetyCoverImg}></img>
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="thrd__sect">
                  <Fade bottom cascade>
                    <div className="img_div">
                      <img src={modely7}></img>
                    </div>
                  </Fade>
                  <Fade right cascade>
                    <div className="thrd__right">
                      <div>
                        <h2>MODEL Y Specs</h2>
                        <div className="btns__bt">
                          <div className="btns__o">Performance</div>
                          <div className="btns__o">Longe Range AWD</div>
                        </div>
                      </div>
                      <div className="thrd__right_rig">
                        <div className="edne_left">
                          <hr className="ednend_hr" />
                          <div className="hrfrfdjeud">
                            <p>Battery</p>
                            <p>Long Range</p>
                          </div>
                          <hr className="ednend_hr" />
                          <div className="hrfrfdjeud">
                            <p>Acceleration</p>
                            <p>3.5s 0-60mph*</p>
                            <p>
                              *with rollout
                              <br />
                              subtracted
                            </p>
                          </div>
                          <hr className="ednend_hr" />
                          <div className="hrfrfdjeud">
                            <p>Range</p>
                            <p>303 miles(EPA est.)</p>
                          </div>

                          <hr className="ednend_hr" />
                          <div className="hrfrfdjeud">
                            <p>Drive</p>
                            <p>Dual Motor All-Wheel </p>
                          </div>
                          <hr className="ednend_hr" />
                          <div className="hrfrfdjeud">
                            <p>Seating</p>
                            <p>Up to 5</p>
                          </div>
                          <hr className="ednend_hr" />
                          <div className="hrfrfdjeud">
                            <p>Wheels</p>
                            <p>21"</p>
                          </div>
                        </div>
                        <div className="edne_right">
                          <hr className="ednend_hr" />
                          <div className="hrfrfdjeud">
                            <p>Weight</p>
                            <p>4,416 lbs</p>
                          </div>
                          <hr className="ednend_hr" />
                          <div className="hrfrfdjeud">
                            <p>Max Cargo Volume</p>
                            <p>76 cu ft</p>
                          </div>
                          <hr className="ednend_hr" />
                          <div className="hrfrfdjeud">
                            <p>Top Speed</p>
                            <p>155 mph</p>
                          </div>
                          <hr className="ednend_hr" />
                          <div className="hrfrfdjeud">
                            <p>Displays</p>
                            <p>15" Center</p>
                            <p>Touchscreen</p>
                          </div>
                          <hr className="ednend_hr" />
                          <div className="hrfrfdjeud">
                            <p>SuperCharging</p>
                            <p>Pay Per Use</p>
                          </div>
                          <hr className="ednend_hr" />
                          <div className="hrfrfdjeud">
                            <p>Warranty</p>
                            <p>
                              Basic Vehicle - 4 years or 50,000 mi,
                              <br /> whichever comes first Battery &
                              <br /> Drive Unit - 8 years or 120,000 mi,
                              <br /> whichever comes first
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
              <div className="section">
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
            </div>
          </>
        );
      }}
    />
  );
}

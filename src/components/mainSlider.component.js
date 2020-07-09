import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/media/general/autologo.png";
import Cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class MainSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      fullName: "",
      redirect: null,
    };
  }

  render() {
    return (
      <div
        class="main-slider slider-pro"
        id="main-slider"
        data-slider-width="100%"
        data-slider-height="700px"
        data-slider-arrows="false"
        data-slider-buttons="false"
      >
        {/*Slider 1*/}
        <div class="sp-slides">
          <div class="main-slider__slide sp-slide">
            <img
              class="sp-image"
              src="assets/media/content/b-main-slider/bg-1.jpg"
              alt="slider"
            />
            <div
              class="sp-layer"
              data-width="100%"
              data-show-transition="left"
              data-hide-transition="left"
              data-show-duration="800"
              data-show-delay="400"
              data-hide-delay="400"
            >
              <div class="main-slider__wrap">
                <div class="main-slider__slogan">luxury unleashed</div>
                <div class="main-slider__title">
                  MAZDA
                  <span class="main-slider__title_lg text-right">
                    CX3<span class="main-slider__title">’19</span>
                  </span>
                </div>
                <div class="text-center">
                  <div class="main-slider__price">
                    <span class="main-slider__price_up">$</span>249
                    <span class="main-slider__price_down">/m</span>
                    <span class="main-slider__price_info">for 24 months</span>
                  </div>
                </div>
                <div class="text-right">
                  <a class="main-slider__link" href="blog-post.html">
                    learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*Slider 2*/}

          <div class="main-slider__slide-2 sp-slide">
            <img
              class="sp-image"
              src="assets/media/content/b-main-slider/bg-2.jpg"
              alt="slider"
            />
            <div
              class="sp-layer"
              data-width="100%"
              data-show-transition="left"
              data-hide-transition="left"
              data-show-duration="800"
              data-show-delay="400"
              data-hide-delay="400"
            >
              <div class="main-slider__wrap">
                <div class="main-slider__slogan">expert auto services</div>
                <div class="main-slider__title">
                  Premium <br />
                  Cars Dealers
                </div>
                <div class="text-right">
                  <a class="main-slider__link" href="blog-post.html">
                    learn more
                  </a>
                </div>
              </div>
            </div>
            <div
              class="sp-layer"
              data-width="100%"
              data-show-transition="left"
              data-hide-transition="left"
              data-show-duration="1500"
              data-show-delay="800"
              data-hide-delay="400"
            >
              <img
                class="main-slider__figure-1 img-fluid"
                src="assets/media/content/b-main-slider/bg-2_item-1.png"
                alt="foto"
              />
            </div>
            <div
              class="sp-layer"
              data-width="100%"
              data-show-transition="right"
              data-hide-transition="right"
              data-show-duration="2000"
              data-show-delay="1200"
              data-hide-delay="400"
            >
              <img
                class="main-slider__figure-2 img-fluid"
                src="assets/media/content/b-main-slider/bg-2_item-2.png"
                alt="foto"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

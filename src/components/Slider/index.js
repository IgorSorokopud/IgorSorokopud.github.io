import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';
import img from '../../images/images1.jpeg';
import capot from './img/capot.jpg';
import servicio from './img/servicio.jpg';
import details from './img/details.jpg';

var Slider = require('react-slick');

var SimpleSlider = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider__main">
        <Slider {...settings}>
          <div className="slider__item">
            <img className="slider__item-img" src={details}/>
            <div className="slider__banner-content">
              <h2>Скидка 5% при заказе автозапчастей</h2>
              <a href="#" className="btn btn--ghost btn--light">Подробнее</a>
            </div>
          </div>
          <div className="slider__item">
            <img className="slider__item-img" src={servicio}/>
            <div className="slider__banner-content">
              <h2>Скидка 5% при заказе автозапчастей</h2>
              <a href="#" className="btn btn--ghost btn--light">Подробнее</a>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
});

export default connect(
  state => ({
    slider: state
  }),
  dispatch => ({})
)(SimpleSlider);

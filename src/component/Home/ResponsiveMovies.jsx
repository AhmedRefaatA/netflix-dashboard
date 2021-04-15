import React, { Component } from "react";
import '../General/Assets/CSS/slickmincss.css'
import '../General/Assets/CSS/slickthememincss.css'
import Slider from "react-slick";

class ResponsiveMovies extends Component {
  render() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      let styles = {
        divStyle: {marginTop:"0"}
      }
    return (
      <div style={styles.divStyle}>
        <Slider {...settings}>
            {this.props.responsiveMoviesImages.map((image) =>{
                return (
                    <div key={image.id}>
                        <img src={image.link} alt={image.describtion}/>
                    </div>
                )
            })}
        </Slider>
      </div>
    );
  }
}

export default ResponsiveMovies;
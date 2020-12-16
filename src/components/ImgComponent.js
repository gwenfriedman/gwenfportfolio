import React from "react";
import { Carousel } from "react-responsive-carousel";

class ImgComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let images = this.props.images.map((value) => {
      return (
        <div>
          <img src={value} />
        </div>
      );
    });

    return (
      <div className={"imageGroup"}>
        <div className={"carousel-new"}>
          <Carousel renderThumbs={() => []}>{images}</Carousel>
        </div>

        <p className={"text-new"}> {this.props.text}</p>
      </div>
    );
  }
}
export default ImgComponent;

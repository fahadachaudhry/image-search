import React from "react";
import ImageCard from "./ImageCard";
import "./ImagesListStyles.css";
const ImageList = (props) => {
  const images = props.img.map((img) => {
    return <ImageCard image={img} key={img.id} />;
  });
  return <div className="image-list">{images}</div>;
};
export default ImageList;

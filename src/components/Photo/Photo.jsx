import React from "react";
import LazyLoadImage from "./LazyLoadImage";
const Photo = ({ src, lazySrc, className }) => {
  return (
    <LazyLoadImage
      src={src}
      lazySrc={lazySrc}
      alt="description of the photo"
      className={className}
    />
  );
};

export default Photo;

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MyImage = ({ src, className, alt }) => (
  <div>
    <LazyLoadImage
      alt={alt}
      src={src}
      className={className}
      //   height={image.height}
      //   width={image.width}
    />
  </div>
);

export default MyImage;

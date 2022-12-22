import React from "react";

interface ServiceIconProps extends Pick<React.ImgHTMLAttributes<HTMLImageElement>,"loading"> {
  src: string;
  alt: string;
}

const ServiceIcon = ({ src, alt, loading }: ServiceIconProps) => {
  return (
    <img
      style={{
        width: "100px",
      }}
      src={src}
      alt={alt}
      loading={loading}
    />
  );
};

export default ServiceIcon;

import React from "react";

interface ServiceIconProps {
  src: string;
  alt: string;
  loading?: "lazy" | "eager";
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

import { Image } from "@imagekit/react";

const IKImage = ({ src, className, width, height, alt }) => {
  return (
    <Image
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      lqip={{ active: true, quality: 20 }}
      width={width}
      height={height}
      transformation={[
        {
          width: width,
          height: height,
        },
      ]}
    />
  );
};

export default IKImage;

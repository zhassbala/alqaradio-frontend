export const getImageDomain = () => {
  let domain = process.env.IMAGE_DOMAIN;
  if (domain?.endsWith("/")) domain = domain.slice(0, domain.length - 1);
  const splittedBaseUrl = process.env.BASE_URL?.split("/");
  return (
    domain ??
    splittedBaseUrl
      ?.slice(
        0,
        splittedBaseUrl.length > 3
          ? splittedBaseUrl.length - 1
          : splittedBaseUrl.length
      )
      .join("/") ??
    ""
  );
};

export const getImagePath = (image: string) => {
  const regexp = /^(http:\/\/|https:\/\/)/gm;
  const imageDomain = getImageDomain();
  if (regexp.test(image)) return image;
  return imageDomain + (image.startsWith("/") ? image : "/" + image);
};

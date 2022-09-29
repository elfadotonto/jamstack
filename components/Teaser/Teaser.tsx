import { storyblokEditable } from "@storyblok/react";

export const Teaser = ({blok}) => {
  return <h2 className="text-2xl mb-10" {...storyblokEditable(blok)}>{blok.headline}</h2>;
};

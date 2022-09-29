import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export const Grid = ({ blok }) => {
  return (<div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3" {...storyblokEditable(blok)}>
  {blok.columns.map((nestedBlok) => (
    <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
  ))}
</div>);
};

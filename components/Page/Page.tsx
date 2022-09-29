import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export const Page = ({ blok }) => (
  <main className="text-center mt-4" {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent
        className=""
        blok={nestedBlok}
        key={nestedBlok._uid}
      />
    ))}
  </main>
);
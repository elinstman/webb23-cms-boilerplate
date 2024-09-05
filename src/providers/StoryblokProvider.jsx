// StoryblokProvider.jsx
"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";

import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/RichText";
import Hero from "@/components/nestable/Hero";
import Header from "@/components/nestable/Header";
import Grid from "@/components/nestable/Grid";
import ImageWithText from "@/components/nestable/ImageWithText";
import Footer from "@/components/nestable/Footer";
import About from "@/components/nestable/About";

const components = {
  "page": Page,
  "teaser":Teaser,
  "richtext": RichTextDefault,
  "hero": Hero, 
  "header": Header,
  "grid": Grid,
  "imageWithText": ImageWithText,
  "footer": Footer,
  "about": About
}

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components
});

export default function StoryblokProvider({ children }) {
  return (
    children
  );
}
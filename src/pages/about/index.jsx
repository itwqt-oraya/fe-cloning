import React from "react";
import AboutHero from "./AboutHero";
import { PostFeedHero, PostFeedBlog } from "./post-feed";
import Publishers from "./Publishers";
import Device from "./Device";
import { HeroMobile } from "@components/Hero/";

export default function index() {
  return (
    <>
      <main id="limitScroll">
        <HeroMobile />
        <AboutHero />
        <PostFeedHero />
      </main>

      <Publishers />
      <Device />
      <PostFeedBlog />
    </>
  );
}

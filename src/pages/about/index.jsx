import React from "react";
import AboutHero from "./AboutHero";
import { PostFeedHero, PostFeedBlog } from "./post-feed";
import Publishers from "./Publishers";
import Device from "./Device";

export default function index() {
  return (
    <>
      <AboutHero />
      <PostFeedHero />
      <Publishers />
      <Device />
      <PostFeedBlog />
    </>
  );
}

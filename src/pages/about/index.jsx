import React from "react";
import AboutHero from "./AboutHero";
import PostFeedHero from "./PostFeedHero";
import PostFeedBlog from "./PostFeedBlog";
import Footer from "./Footer";
import Publishers from "./Publishers";
export default function index() {
  return (
    <>
      <AboutHero />
      <PostFeedHero />
      <Publishers />
      <PostFeedBlog />
      <Footer />
    </>
  );
}

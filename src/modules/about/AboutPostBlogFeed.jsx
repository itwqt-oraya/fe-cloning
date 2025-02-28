import React from "react";
import { HeroContainer } from "@components/Hero";
import { PostBlog } from "@modules/about/";
export default function AboutPostBlogFeed() {
  return (
    <HeroContainer bgColor={"primaryDark"}>
      <PostBlog />
    </HeroContainer>
  );
}

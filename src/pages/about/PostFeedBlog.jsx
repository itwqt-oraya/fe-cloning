import React from "react";
import { HeroContainer } from "../../components/Hero";
import { PostBlog } from "../../components/PostFeed";
export default function PostFeedBlog() {
  return (
    <HeroContainer bgColor={"primaryDark"}>
      <PostBlog />
    </HeroContainer>
  );
}

import React from "react";

import {
  HeroContainer,
  HeroHeaderText,
  HeroImageMap,
  HeroCol,
  HeroRelativeHeader,
} from "../../components/Hero";
import { Button } from "../../components/Buttons";

export default function AboutHero() {
  return (
    <>
      <HeroContainer className={"py-5 justify-content-end"} bgColor="accent">
        <HeroCol className={"p-5 mt-5"}>
          <HeroHeaderText>
            The first and only <span>social</span> magazine.
          </HeroHeaderText>
          <Button variant="solid" color="blueLight">
            Read: Announcing Surf
          </Button>
        </HeroCol>
      </HeroContainer>

      <HeroContainer className={"justify-content-end"}>
        <HeroCol className={"p-5"}>
          <HeroImageMap />
          <HeroRelativeHeader>
            Where enthusiasts like you discover and share stories to connect in
            more meaningful ways.
          </HeroRelativeHeader>
        </HeroCol>
      </HeroContainer>
    </>
  );
}

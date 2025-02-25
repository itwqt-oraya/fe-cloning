import React from "react";

import {
  HeroContainer,
  HeroHeaderText,
  HeroSubHeaderText,
  HeroImageMap,
  HeroCol,
  HeroRelativeHeader,
} from "../../components/Hero";
import { ButtonSolid } from "../../components/Buttons";

export default function AboutHero() {
  return (
    <>
      <HeroContainer bgColor="accent">
        <HeroCol>
          <HeroHeaderText>
            The first and only <span>social</span> magazine.
          </HeroHeaderText>
          <ButtonSolid color="blueLight">Read: Announcing Surf</ButtonSolid>
        </HeroCol>
      </HeroContainer>

      <HeroContainer>
        <HeroCol>
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

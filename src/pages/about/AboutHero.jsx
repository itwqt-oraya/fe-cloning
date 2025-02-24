import React from "react";

import {
  HeroContainer,
  HeroHeaderText,
  HeroSubHeaderText,
} from "../../components/Hero";
import { ButtonSolid } from "../../components/Buttons";

export default function AboutHero() {
  return (
    <>
      <HeroContainer>
        <HeroHeaderText>The first and only social magazine.</HeroHeaderText>
        <ButtonSolid color="blueLight" text={"Read: Announcing Surf"} />
      </HeroContainer>

      <HeroContainer>
        <HeroSubHeaderText>
          Where enthusiasts like you discover and share stories to connect in
          more meaningful ways.
        </HeroSubHeaderText>
      </HeroContainer>
    </>
  );
}

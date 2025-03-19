import {
  AboutHero,
  AboutPublishers,
  AboutDevice,
  AboutPostBlogFeed,
  AboutPostBlogHero,
} from "@modules/about";
import { HeroMobile } from "@components/Hero/";

export default function index() {
  return (
    <>
      <main id="limitScroll">
        <HeroMobile />
        <AboutHero />
        <AboutPostBlogHero />
      </main>

      <AboutPublishers />
      <AboutDevice />
      <AboutPostBlogFeed />
    </>
  );
}

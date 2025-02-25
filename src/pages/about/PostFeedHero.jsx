import React, { useState } from "react";
import { HeroContainer, HeroCol } from "../../components/Hero";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { ButtonSolid, ButtonOutline } from "../../components/Buttons";

const postFeedText = [
  {
    key: 1,
    buttonText: "Discover",
    header: "Discover the stories that matter to you.",
    body: "Flip through the best stories on thousands of topics, all curated by Flipboard editors and experts. From global news to industry insights and local happenings, it’s your source for the stories that matter.",
  },
  {
    key: 2,
    buttonText: "Follow",
    header: "Follow topics, magazines and people that inspire you.",
    body: "Personalize your Flipboard around the things you care about. Follow the topics, Magazines or people sharing on Flipboard, Threads, Mastodon or Bluesky to get all the stories you care about in one place.",
  },
  {
    key: 3,
    buttonText: "Share",
    header: "Share your passions with others.",
    body: "Collect favorite stories by saving them into your own Flipboard Magazines. Make your Magazines public to share insights and ideas with an ever-growing community of enthusiasts on Flipboard.",
  },
  {
    key: 4,
    buttonText: "Connect",
    header: "Connect with enthusiasts like you.",
    body: "Build your community by sharing stories with others on Flipboard. Personalize your profile, collect the stories into Flipboard Magazines, post comments and share ideas with people who share your passions.",
  },
];

export default function PostFeedHero() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <HeroContainer>
      <HeroCol>
        <img src="https://about.flipboard.com/wp-content/uploads/2022/12/Discover-Background-490x830.png" />
      </HeroCol>

      <HeroCol>
        <Nav>
          {postFeedText.map((item) => (
            <ButtonOutline key={item.key}>
              <a onClick={() => setActiveTab(item.key)}>{item.buttonText}</a>
            </ButtonOutline>
          ))}

          <TabContent activeTab={activeTab}>
            {postFeedText.map((item) => (
              <TabPane tabId={item.key} key={item.key}>
                <h2 className="fw-bold">{item.header}</h2>
                <p>{item.body}</p>
              </TabPane>
            ))}
          </TabContent>
        </Nav>

        <ButtonSolid color={"purple"}>Dive Deeper</ButtonSolid>
      </HeroCol>
    </HeroContainer>
  );
}

import React from "react";
import { HeroContainer, HeroSubHeaderText } from "../../components/Hero";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

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
  return (
    <HeroContainer>
      <Nav tabs>
        {postFeedText.map((item) => (
          <NavItem key={item.key}>
            <NavLink href="#" className="text-dark">
              <h2 className="fw-bold">{item.buttonText}</h2>
            </NavLink>
          </NavItem>
        ))}

        <TabContent activeTab="1">
          {postFeedText.map((item) => (
            <TabPane tabId={item.key} key={item.key}>
              <h2 className="fw-bold">{item.header}</h2>
              <p>{item.body}</p>
            </TabPane>
          ))}
        </TabContent>
      </Nav>
    </HeroContainer>
  );
}

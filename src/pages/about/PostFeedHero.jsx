import React, { useState } from "react";
import { HeroContainer, HeroCol } from "../../components/Hero";
import { Nav, TabContent, TabPane } from "reactstrap";
import { Button } from "../../components/Buttons";
import { PostMobile } from "../../components/PostFeed";

export default function PostFeedHero() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <HeroContainer>
        <HeroCol className={"d-none d-md-block"}>
          <img src="https://about.flipboard.com/wp-content/uploads/2022/12/Discover-Background-490x830.png" />
        </HeroCol>

        <HeroCol className={"d-lg-none"}>
          <PostMobile />
        </HeroCol>

        <HeroCol className="p-5 my-auto">
          <Nav>
            {postFeedText.map((item) => (
              <Button variant="outline" key={item.key}>
                <a onClick={() => setActiveTab(item.key)}>{item.buttonText}</a>
              </Button>
            ))}

            <TabContent activeTab={activeTab}>
              {postFeedText.map((item) => (
                <TabPane tabId={item.key} key={item.key}>
                  <h1
                    className="fw-bolder display-3 text-uppercase text-special-blueDark"
                    dangerouslySetInnerHTML={{ __html: item.header }}
                  />
                  <p>{item.body}</p>
                </TabPane>
              ))}
            </TabContent>
          </Nav>

          <Button variant="solid" color={"blueDark"}>
            Dive Deeper
          </Button>
        </HeroCol>
      </HeroContainer>
    </>
  );
}

const postFeedText = [
  {
    key: 1,
    buttonText: "Discover",
    header: `Discover the stories that <span>matter</span> to you.`,
    body: "Flip through the best stories on thousands of topics, all curated by Flipboard editors and experts. From global news to industry insights and local happenings, it’s your source for the stories that matter.",
  },
  {
    key: 2,
    buttonText: "Follow",
    header: `Follow topics, magazines and people that <span>inspire</span> you.`,
    body: "Personalize your Flipboard around the things you care about. Follow the topics, Magazines or people sharing on Flipboard, Threads, Mastodon or Bluesky to get all the stories you care about in one place.",
  },
  {
    key: 3,
    buttonText: "Share",
    header: `Share your <span>passions</span> with others.`,
    body: "Collect favorite stories by saving them into your own Flipboard Magazines. Make your Magazines public to share insights and ideas with an ever-growing community of enthusiasts on Flipboard.",
  },
  {
    key: 4,
    buttonText: "Connect",
    header: `Connect with <spanc>enthusiasts</spanc> like you.`,
    body: "Build your community by sharing stories with others on Flipboard. Personalize your profile, collect the stories into Flipboard Magazines, post comments and share ideas with people who share your passions.",
  },
];

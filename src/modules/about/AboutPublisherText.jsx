import { Button } from "@components/Buttons";

export default function PublisherText() {
  return (
    <div className="p-5">
      <h5 className="text-uppercase fw-bold text-muted">
        {publisherText.subheading}
      </h5>
      <h3
        className="text-uppercase fw-bold text-special-purple"
        dangerouslySetInnerHTML={{ __html: publisherText.heading }}
      />
      <p className="text-muted">{publisherText.body}</p>
      <Button variant="solid" color={"purple"}>
        {publisherText.button}
      </Button>
    </div>
  );
}

const publisherText = {
  subheading: "For publishers and creators",
  heading: `The Best Platform To <span>Amplify</span> Your Content`,
  body: "Flipboard connects publishers and creators to audiences around the world eager to engage with quality journalism and share stories that inspire them. Create your presence on Flipboard and expand your reach to people on the app and in the fediverse.",
  button: "For Publishers",
};

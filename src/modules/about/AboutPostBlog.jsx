import styles from "./post.module.scss";
import classNames from "classnames";
import { ButtonCircle } from "@components/Buttons";
export default function PostBlog() {
  return (
    <>
      <h1
        className={classNames(
          "text-white text-uppercase",
          styles["post-header"]
        )}
      >
        From the Inside Flipboard Blog
      </h1>

      <div
        className={classNames(
          "d-flex flex-nowrap gap-4",
          styles["post-container"]
        )}
      >
        <div className="d-flex gap-4 flex-nowrap overflow-auto">
          {feedBlog.map((blog) => (
            <article
              key={blog.key}
              className={classNames(
                "d-flex flex-column bg-white rounded p-5",
                styles["post-body"]
              )}
            >
              <div>
                <p className="mb-2 fw-bold text-end text-muted">{blog.date}</p>
                <img
                  className={classNames(styles["post-image"], "mb-3")}
                  alt="Sample"
                  src={blog.imageUrl}
                />
                <h3>{blog.title}</h3>
              </div>

              <div className="h-100 d-flex flex-column justify-content-between">
                <p>{blog.body}</p>
                <ButtonCircle>▶</ButtonCircle>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

const feedBlog = [
  {
    key: 1,
    date: "2/5/2025",
    imageUrl:
      "https://about.flipboard.com/wp-content/uploads/2025/02/Fediverse-House-SXSW-email-image-v4-1-1024x640.jpg",
    title: "You’re Invited to the Fediverse House at SXSW '25",
    body: "Learn from the innovators in the open social web, including panels, networking, and more.",
  },
  {
    key: 2,
    date: "2/3/2025",
    imageUrl:
      "https://about.flipboard.com/wp-content/uploads/2025/02/TD-Canada-blog-1024x631.png",
    title: "Timing Matters: How Flipboard's Content Trends Drive Results",
    body: "Flipboard's brand team partners with marketers to craft strategic, audience-aligned content.",
  },
  {
    key: 3,
    date: "1/20/2025",
    imageUrl:
      "https://about.flipboard.com/wp-content/uploads/2025/01/AP25020665906764.jpg",
    title: "Our Commitment to Facts: Now More Than Ever",
    body: "As we enter a new political era, Flipboard still believes in the value of facts and journalism.",
  },
  {
    key: 4,
    date: "1/19/2025",
    imageUrl:
      "https://about.flipboard.com/wp-content/uploads/2025/01/Strike-out-misinformation-quality-journalism-1024x576.jpg",
    title:
      "Flipboard’s Commitment: Truth, Quality Journalism, and Healthy Communities",
    body: "Our team works hard to create a safe environment for the people who choose to spend time here.",
  },
];

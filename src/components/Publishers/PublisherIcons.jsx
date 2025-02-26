import React from "react";
import styles from "./publishers.module.scss";
import classNames from "classnames";

import {
  NatGeo,
  Time,
  ABlue,
  CircleYellow,
  ENews,
  FiftyTwo,
  Medium,
  News,
  Substack,
  Traveller,
  Youtube,
} from "./Icons";

export default function PublisherIcons() {
  return (
    <div className="p-5">
      <div
        className={classNames(
          "d-flex gap-3 mb-2",
          styles["publisher--svg-container"]
        )}
      >
        <div className={classNames("", styles["publisher--svg-body"])}>
          <NatGeo />
        </div>

        <div className={classNames("bg-danger", styles["publisher--svg-body"])}>
          <Time />
        </div>

        <div
          className={classNames(
            styles["icon--bg-purple"],
            styles["publisher--svg-body"]
          )}
        >
          <FiftyTwo />
        </div>

        <div
          className={classNames(
            styles["icon--bg-darkGray"],
            styles["publisher--svg-body"]
          )}
        >
          <CircleYellow />
        </div>
      </div>

      <div
        className={classNames(
          "d-flex gap-3 mb-2 ms-5",
          styles["publisher--svg-container"]
        )}
      >
        <div
          className={classNames(
            styles["icon--bg-lightBlue"],
            styles["publisher--svg-body"]
          )}
        >
          <ABlue />
        </div>

        <div
          className={classNames(
            styles["icon--bg-darkBlue"],
            styles["publisher--svg-body"]
          )}
        >
          <News />
        </div>

        <div
          className={classNames(
            styles["icon--bg-brown"],
            styles["publisher--svg-body"]
          )}
        >
          <Substack />
        </div>
      </div>

      <div
        className={classNames(
          "d-flex gap-3",
          styles["publisher--svg-container"]
        )}
      >
        <div
          className={classNames(
            styles["icon--bg-lightGray"],
            styles["publisher--svg-body"]
          )}
        >
          <Youtube />
        </div>

        <div
          className={classNames(
            styles["icon--bg-green"],
            styles["publisher--svg-body"]
          )}
        >
          <Traveller />
        </div>

        <div
          className={classNames(
            styles["icon--bg-navy"],
            styles["publisher--svg-body"]
          )}
        >
          <Medium />
        </div>

        <div
          className={classNames(
            styles["publisher--svg-body"],
            styles["icon--bg-gray"]
          )}
        >
          <ENews />
        </div>
      </div>
    </div>
  );
}

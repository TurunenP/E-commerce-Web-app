// Review.jsx

import React, { useState } from "react";
import Ratings from "../components/Ratings";

const reviewTitle = "Add a Review"

let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb 1",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb 2",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb 3",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb 4",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);

  return (
    <>
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DesReview"
        }`}
      >
        <li className="desc" onClick={() => setReviewShow(!reviewShow)}>
          Description
        </li>
        <li className="rev" onClick={() => setReviewShow(!reviewShow)}>
          Review 4
        </li>
      </ul>

      {/* Des and review content */}
      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "description-show"
        }`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((review, i) => (
              <li key={i}>
                <div className="post-thumb">
                  <img src={review.imgUrl} alt="" />
                </div>

                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                      <a href="#">{review.name}</a>
                      <p>{review.date}</p>
                    </div>
                  </div>
                  <div className="entry-content">
                    <p>{review.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Review field*/}
          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviewTitle}</h5>
              </div>
              {/* Form field*/}
              <form className="row" action="action">
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Fullname *"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Your email *"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span className="md-2">Your Rating </span>

                    {/* Add space here */}
                    <Ratings />
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <textarea
                    name="message"
                    id="message"
                    rows="8"
                    placeholder="Type here message"
                  ></textarea>
                  <div className="col-12">
                    <button type="submit" className="default-button">
                      <span>Submit Review</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Description part */}
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="post-item">
            <div className="post-thumb">
              <img src="/src\assets\images\shop\01.jpg" alt="" />
            </div>
            <div className="post-content">
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </li>
              </ul>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;

//https://www.youtube.com/watch?v=PGuKjkdGrEI
//1:14


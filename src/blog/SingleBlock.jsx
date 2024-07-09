import React, { useState } from 'react'
import blogList from '../utilis/blogdata';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Tags from "../shop/Tags";
import PopularPost from "../shop/PopularPost";

const socialList = [
  { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
  { iconName: "icofont-twitter", siteLink: "#", className: "twitter" },
  { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin" },
  { iconName: "icofont-instagram", siteLink: "#", className: "instagram" },
  { iconName: "icofont-pinterest", siteLink: "#", className: "pinterest" },
];

const SingleBlock = () => {
     const [blog, setBlog] = useState(blogList);
const {id} =useParams()
//console.log(id)

const result = blog.filter((b) => b.id === Number(id))
console.log(result[0]);

  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"} />
      <div className="blog-section blog-section padding-tb section-tb">
        <div className="container">
          <div className=" row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat. Duis aute irure dolor
                                  in reprehenderit in voluptate velit esse
                                  cillum dolore eu fugiat nulla pariatur.
                                </p>
                                <blockquote>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                  </p>
                                  <cite>
                                    <a href="#">...Melisa Hunter</a>
                                  </cite>
                                </blockquote>

                                <p>
                                  Lorem Ipsum is a dummy block of text used in
                                  publishing and graphic design to fill gaps in
                                  the page before the actual words are added to
                                  the finished product.
                                </p>

                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />

                                <p>
                                  Lorem ipsum luctus molestie id dictumst
                                  torquent mattis varius curabitur venenatis
                                  vulputate, viverra dictum phasellus aptent
                                  nostra massa mauris faucibus justo phasellus,
                                  urna aenean nam sociosqu rhoncus ligula
                                  aliquam pellentesque quisque morbi. Quis
                                  phasellus mattis primis nec dictum nisl
                                  laoreet ut, eros sapien a fusce eget platea
                                  ornare ad, imperdiet turpis vivamus imperdiet
                                  sem accumsan nullam. Sapien commodo cubilia
                                  vivamus euismod nullam platea aliquam, mi
                                  gravida suscipit vehicula nec feugiat luctus
                                  maecenas, varius faucibus lobortis at posuere
                                  ante.
                                </p>

                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://www.youtube.com/watch?v=LUexXsF14Z0"
                                    className="video-button popup"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>

                                <p>
                                  Lorem ipsum luctus molestie id dictumst
                                  torquent mattis varius curabitur venenatis
                                  vulputate, viverra dictum phasellus aptent
                                  nostra massa mauris faucibus justo phasellus,
                                  urna aenean nam sociosqu rhoncus ligula
                                  aliquam pellentesque quisque morbi. Quis
                                  phasellus mattis primis nec dictum nisl
                                  laoreet ut, eros sapien a fusce eget platea
                                  ornare ad, imperdiet turpis vivamus imperdiet
                                  sem accumsan nullam. Sapien commodo cubilia
                                  vivamus euismod nullam platea aliquam, mi
                                  gravida suscipit vehicula nec feugiat luctus
                                  maecenas, varius faucibus lobortis at posuere
                                  ante.
                                </p>
                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href="#" className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="navigations-part">
                      <div className="left">
                        <a href="#" className="prev">
                          <i className="icofont-double-left"></i>Previous Blog
                        </a>
                        <a href="#" className="title">
                          Lorem ipsum luctus molestie id dictumst torquent
                          mattis varius curabitur venenatis vulputate.
                        </a>
                      </div>
                      <div className="right">
                        <a href="#" className="prev">
                          <i className="icofont-double-right"></i>Next Blog
                        </a>
                        <a href="#" className="title">
                          Lorem ipsum luctus molestie id dictumst torquent
                          mattis varius curabitur venenatis vulputate.
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-lg-4 col-12">
            <aside>
              <Tags/>
              <PopularPost/>
            </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlock


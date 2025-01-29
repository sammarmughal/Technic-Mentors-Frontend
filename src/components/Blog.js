import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../ContextApi/MyContext";

export default function Blog() {
  const { filterPosts, posts, uniqueCategory, setCategory } = useContext(MyContext)

  return (
    <div className="ps-0" style={{ overflowX: "hidden" }}>
   
      <div className="home-container">
        <div
          className="allHeaderBg"
        >
          <div className="allHeader-overlay d-flex align-items-center justify-content-center">
            <div>
              <h1
                className="head text-center text-white animate__animated animate__zoomIn allHeaderP"
              >
                Blog Section
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 d-flex justify-content-between">
        <div className="col-md-3">
          <div
            className="background-img3"
          >
            <div className="color-overlay3 pb-3 pt-2 outlet">
              {posts &&
                [...uniqueCategory].map((category) => {
                  return (
                    <div className="text-dark px-2" key={category}>
                      <button
                        className="btn btn-outline-primary w-100 text-dark mt-2"
                        onClick={() => setCategory(category)}
                      >
                        <div className="text-start">
                          {category}
                        </div>
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="container">
            <p className="text-center p-2" style={{ backgroundColor: "#e3eaf7", display: "inline-block" }}> <strong> Note </strong>: Get insights about the tech world in English and Urdu languages at <a href="https://urdustem.com/" target="blank" rel="noopener"> Urdu Stem</a>.</p>
            <div className="row">
              {filterPosts.map((post) => (
                <div className="col-lg-4 col-md-6 col-12 mt-3 mb-3" key={post._id}>
                  <Link style={{ textDecoration: "none" }} to={`/blog/${post.slug}`}>
                    <div className="card h-100">
                      <div className="card-body">
                        <p className="card-title blog-title">
                          {post.title.length > 40 ? post.title.slice(0, 40) + "..." : post.title}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

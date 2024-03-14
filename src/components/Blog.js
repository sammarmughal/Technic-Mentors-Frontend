import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import MyContext from "../ContextApi/MyContext";

export default function Blog() {
  const { filterPosts, posts, uniqueCategory, setCategory } = useContext(MyContext)

  return (
    <div className="ps-0" style={{ overflowX: "hidden" }}>
      <Helmet>
        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://technicmentors.com/blog" ,
            "name": "Technic Mentors",
            "description": "Software development services encompass a series of essential steps involving the developing business solutions. These steps include identifying needs, analy.." ,
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://technicmentors.com/search?q={search_term_string}",
                "actionPlatform": [
                  "https://schema.org/DesktopWebPlatform",
                  "https://schema.org/IOSPlatform",
                  "https://schema.org/AndroidPlatform"
                ]
              },
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>

        <link rel="canonical" href="https://technicmentors.com/blog" />
      </Helmet>
      <div className="home-container">
        <div
          className="background-image1"
          style={{ backgroundImage: `url(${"assets/img/bg-header.webp"})` }}
        >
          <div className="color-overlay1 d-flex align-items-center justify-content-center">
            <div>
              <h1
                className="head text-center text-white animate__animated animate__zoomIn"
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
                <div className="col-md-4 col-12 mt-3 mb-3" key={post._id}>
                  <Link style={{ textDecoration: "none" }} to={`/blog/${post.slug}`}>
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title" style={{ fontWeight: "normal" }}>
                          {post.title.length > 40 ? post.title.slice(0, 40) + "..." : post.title}
                        </h5>
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

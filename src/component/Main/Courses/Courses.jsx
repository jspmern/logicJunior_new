import React, { Fragment } from "react";
import { courseDetails } from "../../../utils";
import CarouselWrapper from "./CarouselWrapper";
 

function Courses() {
  return (
    <section className="section course" id="courses" aria-label="course">
      <div className="container">
        <p className="section-subtitle">Categories</p>
        <h2 className="h2 section-title"> Online Classes For Remote Learning</h2>
       
        <ul className="grid-list">
                     {courseDetails.map((course,index)=>{
                return  <Fragment key={index}>
              <li>
            <div className="course-card">
              <figure
                className="card-banner img-holder"
                style={{ "--width": 370, "--height": 220 }}
              >
                <img
                  src="/assets/images/course-1.jpg"
                  width="370"
                  height="220"
                  loading="lazy"
                  alt="Build Responsive Real- World Websites with HTML and CSS"
                  className="img-cover"
                />
              </figure>
              <div className="abs-badge">
                <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                <span className="span">{course.duration?course.duration:"4 Hours"}</span>
              </div>
              <div className="card-content">
                <span className="badge">{course.badge?course.badge:"Beginner"}</span>
                <h3 className="h3">
                  <a href="#" className="card-title">
                     {course.title}
                  </a>
                </h3>
                <div className="wrapper" style={{marginBottom:"20px"}}>
                  <p>{course.description.split(0,10)}</p>
                </div>
                {/* 🐌🐌 for star */}
                 {/* <div className="wrapper">
                  <div className="rating-wrapper">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div> 
                  <p className="rating-text">(5.0/7 Rating)</p>
                </div> */}
                {/* 🐌🐌 for price */}
                {/* <data className="price" value="29">
                  $29.00
                </data> */}
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <ion-icon
                      name="person-outline"
                      aria-hidden="true"
                    ></ion-icon>
                    <span className="span">1:1 Session</span>
                  </li>
                  <li className="card-meta-item">
                    <ion-icon
                      name="people-outline"
                      aria-hidden="true"
                    ></ion-icon>
                    <span className="span">Group Classes</span>
                  </li>
                </ul>
              </div>
            </div>
          </li>
            </Fragment>
          })}  
        </ul>
       
        <a href="#" className="btn has-before">
          <span className="span">Browse more courses</span>
          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        </a>
      </div>
    </section>
  );
}

export default Courses;

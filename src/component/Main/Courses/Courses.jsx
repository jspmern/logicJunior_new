import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";  // import navigate hook
import { courseDetails } from "../../../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Courses() {
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  const goPrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };
  const goNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const openCourseDetails = (id) => {
    navigate(`/courses/${id}`);
  };

  return (
    <section className="section course" id="courses" aria-label="course">
      <div className="container">
        <p className="section-subtitle">Categories</p>
        <h2 className="h2 section-title">Online Classes For Remote Learning</h2>

        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
          <button onClick={goPrev} aria-label="Previous Slide" className="custom-nav-btn">
            &#8592;
          </button>
          <button onClick={goNext} aria-label="Next Slide" className="custom-nav-btn">
            &#8594;
          </button>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ padding: "0 40px" }}
        >
          {courseDetails.map((course) => (
            <SwiperSlide key={course.id}>
              <div
                className="course-card"
                onClick={() => openCourseDetails(course.id)}
                style={{ cursor: "pointer" }} // show pointer on hover to indicate clickability
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") openCourseDetails(course.id);
                }}
              >
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 370, "--height": 220 }}
                >
                  <img
                    src="/assets/images/course-1.jpg"
                    width="370"
                    height="220"
                    loading="lazy"
                    alt={course.title}
                    className="img-cover"
                  />
                </figure>
                <div className="abs-badge">
                  <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                  <span className="span">{course.duration || "4 Hours"}</span>
                </div>
                <div className="card-content">
                  <span className="badge">{course.badge || "Beginner"}</span>
                  <h3 className="h3">
                    <a href="#" className="card-title" onClick={(e) => e.preventDefault()}>
                      {course.title}
                    </a>
                  </h3>
                  <div className="wrapper" style={{ marginBottom: "20px" }}>
                    <p>{course.description?.slice(0, 100)}...</p>
                  </div>
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                      <span className="span">1:1 Session</span>
                    </li>
                    <li className="card-meta-item">
                      <ion-icon name="people-outline" aria-hidden="true"></ion-icon>
                      <span className="span">Group Classes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <a href="#" className="btn has-before" style={{ marginTop: "2rem" }}>
          <span className="span">Browse more courses</span>
          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        </a>
      </div>
    </section>
  );
}

export default Courses;

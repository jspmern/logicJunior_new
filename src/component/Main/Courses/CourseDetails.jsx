import React from "react";
import { useParams } from "react-router-dom";
import { courseDetails } from "../../../utils";
import "./CourseDetails.css";

function CourseDetails() {
    const { courseId } = useParams();


    const course = courseDetails.find((c) => String(c.id) === courseId);

    if (!course) return <p>Course not found</p>;

    return (
        <body style={{ marginTop: 75 }}>
            <header className="Courseheader ">
                <h1>{course.title}</h1>
                <p>{course.description}</p>
            </header>

            <main className="container">
                <section className="hero-section">
                    <div className="course-info">
                        <h1>Modern HTML & CSS From The Beginning (Including Sass)</h1>
                        <p className="course-description">
                            Build modern responsive websites & UIs with HTML5, CSS3 & Sass! Learn Flex & CSS Grid
                        </p>

                        <div className="course-meta">
                            <div className="rating">
                                <span className="stars">★★★★★</span>
                                <span className="rating-number">4.7</span>
                                <span>(26,092 ratings)</span>
                                <span className="student-count">83,696 students</span>
                            </div>
                        </div>

                        <div className="course-meta">
                            <span>Created by <a href="#" className="instructor">Sintu Kumar</a></span>
                            <span>🌐 Last updated 03/2022</span>
                            <span>🌍 English</span>
                            <span>🎯 English [Auto], Arabic [Auto], +13 more</span>
                        </div>

                        <div className="what-youll-learn">
                            <h2>What you'll learn</h2>
                            <div className="learning-objectives">
                                <div className="objective">
                                    <span className="checkmark">✓</span>
                                    <span>Build Multiple High Quality Websites & UI Projects</span>
                                </div>
                                <div className="objective">
                                    <span className="checkmark">✓</span>
                                    <span>HTML5 Semantic Layout & CSS Fundamentals</span>
                                </div>
                                <div className="objective">
                                    <span className="checkmark">✓</span>
                                    <span>Flexbox & CSS Grid Projects</span>
                                </div>
                                <div className="objective">
                                    <span className="checkmark">✓</span>
                                    <span>CSS Variables, Transitions, Dropdowns, Overlays & More</span>
                                </div>
                                <div className="objective">
                                    <span className="checkmark">✓</span>
                                    <span>Website Hosting & Deployment With FTP & Git</span>
                                </div>
                                <div className="objective">
                                    <span className="checkmark">✓</span>
                                    <span>All Skill Levels</span>
                                </div>
                            </div>
                        </div>

                        <div className="course-includes">
                            <h2>This course includes:</h2>
                            <div className="includes-grid">
                                <div className="include-item">
                                    <span className="include-icon">🎥</span>
                                    <span>21 hours on-demand video</span>
                                </div>
                                <div className="include-item">
                                    <span className="include-icon">📱</span>
                                    <span>Access on mobile and TV</span>
                                </div>
                                <div className="include-item">
                                    <span className="include-icon">📄</span>
                                    <span>2 articles</span>
                                </div>
                                <div className="include-item">
                                    <span className="include-icon">🏆</span>
                                    <span>Certificate of completion</span>
                                </div>
                                <div className="include-item">
                                    <span className="include-icon">💾</span>
                                    <span>26 downloadable resources</span>
                                </div>
                            </div>
                        </div>

                        <div className="companies-section">
                            <h3>Top companies offer this course to their employees</h3>
                            <p
                                style={{
                                    fontSize: "14px",
                                    marginBottom: "20px",
                                    color: "#d1d7db",
                                }}
                            >
                                This course was selected for our collection of top-rated courses trusted by businesses worldwide.{" "}
                                <a href="#" style={{ color: "#c0c4fc" }}>Learn more</a>
                            </p>
                            <div className="companies-grid">
                                <span style={{ fontWeight: "bold", fontSize: "18px" }}>NASDAQ</span>
                                <span style={{ fontWeight: "bold", fontSize: "18px" }}>VW</span>
                                <span style={{ fontWeight: "bold", fontSize: "18px" }}>box</span>
                                <span style={{ fontWeight: "bold", fontSize: "18px" }}>NetApp</span>
                                <span style={{ fontWeight: "bold", fontSize: "18px" }}>eventbrite</span>
                            </div>
                        </div>

                    </div>

                    <aside className="course-preview">
                        <div className="preview-video">
                            <div className="play-button">
                                <div className="play-icon"></div>
                            </div>
                            <div className="preview-text">Preview this course</div>
                        </div>

                        <div className="course-tabs">
                            <button className="tab active">Personal</button>
                            <button className="tab">Teams</button>
                        </div>

                        <div className="pricing-section">
                            <div
                                style={{
                                    backgroundColor: "#a435f0",
                                    color: "white",
                                    textAlign: "center",
                                    padding: "15px",
                                    margin: "-20px -20px 20px -20px",
                                    fontWeight: 600,
                                }}
                            >
                                Subscribe to Udemy's top courses
                            </div>

                            <p
                                style={{
                                    fontSize: "14px",
                                    marginBottom: "15px",
                                    color: "#6a6f73",
                                }}
                            >
                                Get this course, plus 11,000+ of our top-rated courses, with Personal Plan.{" "}
                                <a href="#" style={{ color: "#a435f0" }}>
                                    Learn more
                                </a>
                            </p>

                            <button
                                style={{
                                    backgroundColor: "#a435f0",
                                    color: "white",
                                    width: "100%",
                                    padding: "12px",
                                    border: "none",
                                    borderRadius: "4px",
                                    marginBottom: "15px",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                }}
                            >
                                Try Personal Plan for free
                            </button>

                            <p
                                style={{
                                    fontSize: "12px",
                                    textAlign: "center",
                                    color: "#6a6f73",
                                    marginBottom: "20px",
                                }}
                            >
                                Starting at $16.58 per month after trial
                                <br />
                                Cancel anytime
                            </p>

                            <div className="price">$119.99</div>

                            <button className="cta-button">Buy this course</button>

                            <div className="guarantee">30-Day Money-Back Guarantee</div>

                            <div
                                style={{
                                    textAlign: "center",
                                    fontSize: "14px",
                                    color: "#6a6f73",
                                    marginBottom: "15px",
                                }}
                            >
                                Full Lifetime Access
                            </div>

                            <div className="course-actions">
                                <a href="#">Share</a>
                                <a href="#">Gift this course</a>
                                <a href="#">Apply Coupon</a>
                            </div>
                        </div>
                    </aside>

                </section>
            </main>
        </body>
    );
}

export default CourseDetails;

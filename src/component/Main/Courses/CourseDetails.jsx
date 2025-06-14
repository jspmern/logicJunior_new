// import React from "react";
// import { useParams } from "react-router-dom";
// import { courseDetails } from "../../../utils";
// import "./CourseDetails.css";

// function CourseDetails() {
//     const { courseId } = useParams();


//     const course = courseDetails.find((c) => String(c.id) === courseId);

//     if (!course) return <p>Course not found</p>;

//     return (
//         <body style={{ marginTop: 75 }}>
//             <header className="Courseheader ">
//                 <h1>{course.title}</h1>
//                 <p>{course.description}</p>
//             </header>

//             <main className="container">
//                 <section className="hero-section">
//                     <div className="course-info">
//                         <h1>Modern HTML & CSS From The Beginning (Including Sass)</h1>
//                         <p className="course-description">
//                             Build modern responsive websites & UIs with HTML5, CSS3 & Sass! Learn Flex & CSS Grid
//                         </p>

//                         <div className="course-meta">
//                             <div className="rating">
//                                 <span className="stars">★★★★★</span>
//                                 <span className="rating-number">4.7</span>
//                                 <span>(26,092 ratings)</span>
//                                 <span className="student-count">83,696 students</span>
//                             </div>
//                         </div>

//                         <div className="course-meta">
//                             <span>Created by <a href="#" className="instructor">Sintu Kumar</a></span>
//                             <span>🌐 Last updated 03/2022</span>
//                             <span>🌍 English</span>
//                             <span>🎯 English [Auto], Arabic [Auto], +13 more</span>
//                         </div>

//                         <div className="what-youll-learn">
//                             <h2>What you'll learn</h2>
//                             <div className="learning-objectives">
//                                 <div className="objective">
//                                     <span className="checkmark">✓</span>
//                                     <span>Build Multiple High Quality Websites & UI Projects</span>
//                                 </div>
//                                 <div className="objective">
//                                     <span className="checkmark">✓</span>
//                                     <span>HTML5 Semantic Layout & CSS Fundamentals</span>
//                                 </div>
//                                 <div className="objective">
//                                     <span className="checkmark">✓</span>
//                                     <span>Flexbox & CSS Grid Projects</span>
//                                 </div>
//                                 <div className="objective">
//                                     <span className="checkmark">✓</span>
//                                     <span>CSS Variables, Transitions, Dropdowns, Overlays & More</span>
//                                 </div>
//                                 <div className="objective">
//                                     <span className="checkmark">✓</span>
//                                     <span>Website Hosting & Deployment With FTP & Git</span>
//                                 </div>
//                                 <div className="objective">
//                                     <span className="checkmark">✓</span>
//                                     <span>All Skill Levels</span>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="course-includes">
//                             <h2>This course includes:</h2>
//                             <div className="includes-grid">
//                                 <div className="include-item">
//                                     <span className="include-icon">🎥</span>
//                                     <span>21 hours on-demand video</span>
//                                 </div>
//                                 <div className="include-item">
//                                     <span className="include-icon">📱</span>
//                                     <span>Access on mobile and TV</span>
//                                 </div>
//                                 <div className="include-item">
//                                     <span className="include-icon">📄</span>
//                                     <span>2 articles</span>
//                                 </div>
//                                 <div className="include-item">
//                                     <span className="include-icon">🏆</span>
//                                     <span>Certificate of completion</span>
//                                 </div>
//                                 <div className="include-item">
//                                     <span className="include-icon">💾</span>
//                                     <span>26 downloadable resources</span>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="companies-section">
//                             <h3>Top companies offer this course to their employees</h3>
//                             <p
//                                 style={{
//                                     fontSize: "14px",
//                                     marginBottom: "20px",
//                                     color: "#d1d7db",
//                                 }}
//                             >
//                                 This course was selected for our collection of top-rated courses trusted by businesses worldwide.{" "}
//                                 <a href="#" style={{ color: "#c0c4fc" }}>Learn more</a>
//                             </p>
//                             <div className="companies-grid">
//                                 <span style={{ fontWeight: "bold", fontSize: "18px" }}>NASDAQ</span>
//                                 <span style={{ fontWeight: "bold", fontSize: "18px" }}>VW</span>
//                                 <span style={{ fontWeight: "bold", fontSize: "18px" }}>box</span>
//                                 <span style={{ fontWeight: "bold", fontSize: "18px" }}>NetApp</span>
//                                 <span style={{ fontWeight: "bold", fontSize: "18px" }}>eventbrite</span>
//                             </div>
//                         </div>

//                     </div>

//                     <aside className="course-preview">
//                         <div className="preview-video">
//                             <div className="play-button">
//                                 <div className="play-icon"></div>
//                             </div>
//                             <div className="preview-text">Preview this course</div>
//                         </div>

//                         <div className="course-tabs">
//                             <button className="tab active">Personal</button>
//                             <button className="tab">Teams</button>
//                         </div>

//                         <div className="pricing-section">
//                             <div
//                                 style={{
//                                     backgroundColor: "#a435f0",
//                                     color: "white",
//                                     textAlign: "center",
//                                     padding: "15px",
//                                     margin: "-20px -20px 20px -20px",
//                                     fontWeight: 600,
//                                 }}
//                             >
//                                 Subscribe to Udemy's top courses
//                             </div>

//                             <p
//                                 style={{
//                                     fontSize: "14px",
//                                     marginBottom: "15px",
//                                     color: "#6a6f73",
//                                 }}
//                             >
//                                 Get this course, plus 11,000+ of our top-rated courses, with Personal Plan.{" "}
//                                 <a href="#" style={{ color: "#a435f0" }}>
//                                     Learn more
//                                 </a>
//                             </p>

//                             <button
//                                 style={{
//                                     backgroundColor: "#a435f0",
//                                     color: "white",
//                                     width: "100%",
//                                     padding: "12px",
//                                     border: "none",
//                                     borderRadius: "4px",
//                                     marginBottom: "15px",
//                                     fontWeight: 600,
//                                     cursor: "pointer",
//                                 }}
//                             >
//                                 Try Personal Plan for free
//                             </button>

//                             <p
//                                 style={{
//                                     fontSize: "12px",
//                                     textAlign: "center",
//                                     color: "#6a6f73",
//                                     marginBottom: "20px",
//                                 }}
//                             >
//                                 Starting at $16.58 per month after trial
//                                 <br />
//                                 Cancel anytime
//                             </p>

//                             <div className="price">$119.99</div>

//                             <button className="cta-button">Buy this course</button>

//                             <div className="guarantee">30-Day Money-Back Guarantee</div>

//                             <div
//                                 style={{
//                                     textAlign: "center",
//                                     fontSize: "14px",
//                                     color: "#6a6f73",
//                                     marginBottom: "15px",
//                                 }}
//                             >
//                                 Full Lifetime Access
//                             </div>

//                             <div className="course-actions">
//                                 <a href="#">Share</a>
//                                 <a href="#">Gift this course</a>
//                                 <a href="#">Apply Coupon</a>
//                             </div>
//                         </div>
//                     </aside>

//                 </section>
//             </main>
//         </body>
//     );
// }

// export default CourseDetails;


 import React, { useState } from 'react';
 import "./CourseDetails.css"

const CourseDetails = () => {
  const [openModules, setOpenModules] = useState(new Set());

  const toggleModule = (moduleId) => {
    const newOpenModules = new Set(openModules);
    if (newOpenModules.has(moduleId)) {
      newOpenModules.delete(moduleId);
    } else {
      newOpenModules.add(moduleId);
    }
    setOpenModules(newOpenModules);
  };

  const courseData = {
    title: "Complete JavaScript Programming for Kids",
    subtitle: "Learn JavaScript from scratch with fun projects and interactive exercises",
    description: "Master the fundamentals of JavaScript programming through engaging projects designed specifically for young learners. This comprehensive course covers everything from basic syntax to advanced concepts, ensuring your child builds a strong foundation in programming that will serve them well in our increasingly digital world.",
    image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "8 weeks",
    level: "Beginner",
    price: "$99",
    originalPrice: "$149",
    rating: 4.8,
    students: 1250,
    instructor: "Sarah Johnson",
    instructorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    whatIncluded: [
      "8 weeks of structured learning",
      "50+ hands-on coding exercises", 
      "Live instructor support",
      "Certificate of completion",
      "Lifetime access to materials",
      "Mobile and desktop access",
      "Interactive coding playground",
      "Parent progress reports"
    ],
    modules: [
      {
        id: "1",
        title: "Introduction to Programming",
        duration: "1 week",
        description: "Get started with the basics of programming and set up your coding environment.",
        lessons: [
          "What is programming?",
          "Setting up your workspace", 
          "Your first line of code",
          "Understanding variables",
          "Practice exercises"
        ]
      },
      {
        id: "2", 
        title: "Variables and Data Types",
        duration: "1 week",
        description: "Learn about different types of data and how to store information in variables.",
        lessons: [
          "Numbers and strings",
          "Boolean values",
          "Arrays and objects", 
          "Variable naming conventions",
          "Mini project: Personal profile"
        ]
      },
      {
        id: "3",
        title: "Functions and Logic", 
        duration: "1.5 weeks",
        description: "Master functions and conditional statements to make your programs interactive.",
        lessons: [
          "Creating your first function",
          "Function parameters and return values",
          "If/else statements",
          "Comparison operators", 
          "Project: Simple calculator"
        ]
      },
      {
        id: "4",
        title: "Loops and Repetition",
        duration: "1 week", 
        description: "Learn how to repeat actions efficiently using loops.",
        lessons: [
          "For loops",
          "While loops",
          "Loop control statements",
          "Nested loops",
          "Project: Pattern generator"
        ]
      },
      {
        id: "5",
        title: "Working with the Web",
        duration: "1.5 weeks",
        description: "Connect your JavaScript knowledge to web pages and user interactions.", 
        lessons: [
          "HTML and JavaScript connection",
          "Handling user input",
          "Changing web page content",
          "Event handling",
          "Project: Interactive web page"
        ]
      },
      {
        id: "6",
        title: "Fun Projects",
        duration: "2 weeks",
        description: "Apply everything you've learned by building exciting projects.",
        lessons: [
          "Project 1: Guess the number game",
          "Project 2: Digital clock", 
          "Project 3: Simple drawing app",
          "Project 4: Quiz application",
          "Final project presentation"
        ]
      }
    ]
  };

  const handleEnroll = () => {
    alert('Enrollment functionality would be implemented here!');
  };

  return (
    <div className="lj-course-details" style={{marginTop:"95px"}}>
      {/* Header */}
      {/* Hero Section */}
      <div className="lj-hero">
        <div className="lj-container">
          <div className="lj-hero-grid">
            <div className="lj-hero-content">
              <div className="lj-hero-text">
                <span className="lj-level-badge">{courseData.level}</span>
                <h1 className="lj-hero-title">{courseData.title}</h1>
                <p className="lj-hero-subtitle">{courseData.subtitle}</p>
              </div>
              
              <div className="lj-hero-meta">
                <div className="lj-meta-item">
                  <span className="lj-meta-icon">🕒</span>
                  <span>{courseData.duration}</span>
                </div>
                <div className="lj-meta-item">
                  <span className="lj-meta-icon">👥</span>
                  <span>{courseData.students} students</span>
                </div>
                <div className="lj-meta-item">
                  <span className="lj-meta-icon">🏆</span>
                  <span>Certificate included</span>
                </div>
              </div>

              <div className="lj-pricing">
                <div className="lj-price-current">{courseData.price}</div>
                <div className="lj-price-original">{courseData.originalPrice}</div>
                <div className="lj-discount-badge">33% OFF</div>
              </div>

              <button onClick={handleEnroll} className="lj-enroll-btn">
                Enroll Now
              </button>
            </div>

            <div className="lj-hero-image">
              <div className="lj-image-container">
                <img
                  src={courseData.image}
                  alt={courseData.title}
                  className="lj-course-image"
                />
                <div className="lj-play-overlay">
                  <button className="lj-play-btn">
                    <span className="lj-play-icon">▶</span>
                  </button>
                </div>
              </div>
              <div className="lj-floating-shape lj-shape-1"></div>
              <div className="lj-floating-shape lj-shape-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lj-main-content">
        <div className="lj-container">
          <div className="lj-content-grid">
            {/* Left Column */}
            <div className="lj-left-column">
              {/* Course Description */}
              <section className="lj-section">
                <h2 className="lj-section-title">About This Course</h2>
                <p className="lj-description">{courseData.description}</p>
              </section>

              {/* What's Included */}
              <section className="lj-section">
                <h2 className="lj-section-title">What's Included in This Course</h2>
                <div className="lj-included-grid">
                  {courseData.whatIncluded.map((item, index) => (
                    <div key={index} className="lj-included-item">
                      <span className="lj-check-icon">✓</span>
                      <span className="lj-included-text">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Course Curriculum */}
              <section className="lj-section">
                <h2 className="lj-section-title">Course Curriculum</h2>
                <div className="lj-curriculum-summary">
                  <div className="lj-summary-item">
                    <span>{courseData.modules.length} modules</span>
                  </div>
                  <div className="lj-summary-item">
                    <span>{courseData.modules.reduce((acc, module) => acc + module.lessons.length, 0)} lessons</span>
                  </div>
                  <div className="lj-summary-item">
                    <span>{courseData.duration} total</span>
                  </div>
                </div>
                
                <div className="lj-accordion">
                  {courseData.modules.map((module) => (
                    <div key={module.id} className="lj-accordion-item">
                      <button
                        onClick={() => toggleModule(module.id)}
                        className="lj-accordion-header"
                        aria-expanded={openModules.has(module.id)}
                      >
                        <div className="lj-accordion-header-content">
                          <div className="lj-module-icon">📚</div>
                          <div className="lj-module-info">
                            <h3 className="lj-module-title">{module.title}</h3>
                            <div className="lj-module-meta">
                              <span className="lj-module-duration">🕒 {module.duration}</span>
                              <span className="lj-module-lessons">{module.lessons.length} lessons</span>
                            </div>
                          </div>
                        </div>
                        <div className="lj-accordion-arrow">
                          {openModules.has(module.id) ? '▲' : '▼'}
                        </div>
                      </button>
                      
                      <div className={`lj-accordion-content ${openModules.has(module.id) ? 'lj-accordion-open' : ''}`}>
                        <div className="lj-accordion-body">
                          <p className="lj-module-description">{module.description}</p>
                          <ul className="lj-lessons-list">
                            {module.lessons.map((lesson, index) => (
                              <li key={index} className="lj-lesson-item">
                                <div className="lj-lesson-bullet"></div>
                                <span className="lj-lesson-text">{lesson}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lj-right-column">
              {/* Enrollment Card */}
              <div className="lj-enrollment-card">
                <div className="lj-card-pricing">
                  <div className="lj-card-price-row">
                    <span className="lj-card-price">{courseData.price}</span>
                    <span className="lj-card-original-price">{courseData.originalPrice}</span>
                  </div>
                  <p className="lj-payment-note">One-time payment</p>
                </div>

                <button onClick={handleEnroll} className="lj-card-enroll-btn">
                  Enroll Now
                </button>

                <div className="lj-card-features">
                  <div className="lj-feature-item">
                    <span className="lj-feature-icon">🛟</span>
                    <span>24/7 instructor support</span>
                  </div>
                  <div className="lj-feature-item">
                    <span className="lj-feature-icon">📱</span>
                    <span>Mobile and desktop access</span>
                  </div>
                  <div className="lj-feature-item">
                    <span className="lj-feature-icon">⬇️</span>
                    <span>Downloadable resources</span>
                  </div>
                  <div className="lj-feature-item">
                    <span className="lj-feature-icon">🌐</span>
                    <span>Lifetime access</span>
                  </div>
                </div>
              </div>

              {/* Instructor Info */}
              <div className="lj-instructor-card">
                <h3 className="lj-instructor-title">Your Instructor</h3>
                <div className="lj-instructor-info">
                  <img
                    src={courseData.instructorImage}
                    alt={courseData.instructor}
                    className="lj-instructor-avatar"
                  />
                  <div className="lj-instructor-details">
                    <h4 className="lj-instructor-name">{courseData.instructor}</h4>
                    <p className="lj-instructor-role">Senior Programming Instructor</p>
                  </div>
                </div>
                <p className="lj-instructor-bio">
                  With over 8 years of experience teaching programming to children, Sarah has helped thousands of kids discover their passion for coding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
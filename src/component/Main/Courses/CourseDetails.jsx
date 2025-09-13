
 import React, { useEffect, useState } from 'react';
 import "./CourseDetails.css"
import { useParams } from 'react-router-dom';
import { courseDetails } from '../../../utils';
const CourseDetails = () => {
  const [openModules, setOpenModules] = useState(new Set());
  const { courseId } = useParams();
  const [findCourse, setFindCourse] = useState(null);
  useEffect(() => {
    setFindCourse(courseDetails.find(course => course.id === courseId));
  }, [courseId]);
  const toggleModule = (moduleId) => {
    const newOpenModules = new Set(openModules);
    if (newOpenModules.has(moduleId)) {
      newOpenModules.delete(moduleId);
    } else {
      newOpenModules.add(moduleId);
    }
    setOpenModules(newOpenModules);
  };


  // ...existing code...

  const handleEnroll = () => {
    alert('Enrollment functionality would be implemented here!');
  };
  if (!findCourse) return <div>Course not found</div>;
  const courseData = findCourse.courseData || {};
  return (
    <div className="lj-course-details">
      {/* Hero Section */}
      {/* <div className="lj-hero">
        <div className="lj-container">
          <div className="lj-hero-grid">
            <div className="lj-hero-content">
              <div className="lj-hero-text">
                <span className="lj-level-badge">{findCourse.badge || courseData.level}</span>
                <h1 className="lj-hero-title">{findCourse.title || courseData.title}</h1>
                <p className="lj-hero-subtitle">{courseData.subtitle}</p>
              </div>
              <div className="lj-hero-meta">
                <div className="lj-meta-item">
                  <span className="lj-meta-icon">🕒</span>
                  <span>{findCourse.duration || courseData.duration}</span>
                </div>
                <div className="lj-meta-item">
                  <span className="lj-meta-icon">👥</span>
                  <span>{courseData.students || '1250'} students</span>
                </div>
                <div className="lj-meta-item">
                  <span className="lj-meta-icon">🏆</span>
                  <span>Certificate included</span>
                </div>
              </div>
              <div className="lj-pricing">
                <div className="lj-price-current">{courseData.price || '$99'}</div>
                <div className="lj-price-original">{courseData.originalPrice || '$149'}</div>
                <div className="lj-discount-badge">33% OFF</div>
              </div>
              <button onClick={handleEnroll} className="lj-enroll-btn">
                Enroll Now
              </button>
            </div>
            <div className="lj-hero-image">
              <div className="lj-image-container">
                <img
                  src={findCourse.image || courseData.image || findCourse.thumbnail}
                  alt={findCourse.title || courseData.title}
                  className="lj-course-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Main Content */}
      <div className="lj-main-content">
        <div className="lj-container">
          <div className="lj-content-grid">
            {/* Left Column */}
            <div className="lj-left-column">
              {/* Course Description */}
              <section className="lj-section">
                <h2 className="lj-section-title">About This Course</h2>
                <p className="lj-description">{findCourse.description || courseData.description}</p>
              </section>
              {/* What's Included */}
              <section className="lj-section">
                <h2 className="lj-section-title">What's Included in This Course</h2>
                <div className="lj-included-grid">
                  {(courseData.whatIncluded || []).map((item, index) => (
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
                    <span>{(courseData.modules || []).length} modules</span>
                  </div>
                  <div className="lj-summary-item">
                    <span>{(courseData.modules || []).reduce((acc, module) => acc + module.lessons.length, 0)} lessons</span>
                  </div>
                  <div className="lj-summary-item">
                    <span>{findCourse.duration || courseData.duration} total</span>
                  </div>
                </div>
                <div className="lj-accordion">
                  {(courseData.modules || []).map((module) => (
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
                    <span className="lj-card-price">{courseData.price || '$99'}</span>
                    <span className="lj-card-original-price">{courseData.originalPrice || '$149'}</span>
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
                    src={courseData.instructorImage || findCourse.image}
                    alt={courseData.instructor || 'Instructor'}
                    className="lj-instructor-avatar"
                  />
                  <div className="lj-instructor-details">
                    <h4 className="lj-instructor-name">{courseData.instructor || 'Instructor Name'}</h4>
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
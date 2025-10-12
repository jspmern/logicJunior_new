import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const statsData = [
  { value: 5000, label: "Student Enrolled", color: "170, 75%, 41%", suffix: "+" },
  { value: 32400, label: "Class Completed", color: "351, 83%, 61%" },
  { value: 100, label: "Satisfaction Rate", color: "260, 100%, 67%", suffix: "%" },
  { value: 20, label: "Educators", color: "42, 94%, 55%", suffix: "+" },
];

function State() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.3,     // 30% of the section should be visible
  });

  return (
    <section className="section stats" aria-label="stats" ref={ref} >
       
        <ul className="grid-list" style={{padding:'72px'}}>
          {statsData.map((stat, index) => (
            <li key={index}>
              <div className="stats-card" style={{ "--color": stat.color }}>
                <h3 className="card-title">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      suffix={stat.suffix || ""}
                    />
                  ) : (
                    0
                  )}
                </h3>
                <p className="card-text">{stat.label}</p>
              </div>
            </li>
          ))}
        </ul>
       
    </section>
  );
}

export default State;

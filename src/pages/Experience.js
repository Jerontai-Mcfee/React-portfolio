import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import   "../styles/Experience.css";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
      date="2008 -2012"
      iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        
      >
         <h3 className="vertical-timeline-element-title">
          Mcnair High School, Decatur, Georgia
          </h3>
          <p> High School Diploma </p>
          </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Atlanta Technical university, Atlanta , Georgia
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Associates Degree
          </h4>

          <p> Information Technology</p>
        </VerticalTimelineElement> <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 -2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Georgia institute of Technology, Atlanta , Georgia
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Full-Stack-Web-Development Certificate
          </h4>

          <p> Certification</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           CellPhone Repair Technician - Phone MAX
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Atlanta, Georgia
          </h4>
          <p>	Completed multiple cell phone, Tablets, and electronic repairs </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021- present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            It Representative - comcast
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Atlanta, Georgia
          </h4>
          <p>
            Performs moves, adds, changes, and manages activities for desktop/laptop computers, telephones, and printers.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}


export default Experience;

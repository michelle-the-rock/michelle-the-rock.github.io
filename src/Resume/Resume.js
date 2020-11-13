import ResumeHeader from "./ResumeHeader";
import ResumeSection from "./ResumeSection";
import WorkExperienceSection from "./WorkExperienceSection"

// not sure how to structure
function Resume() {
    return (
      <div className="Resume">
        <ResumeHeader/>
        <body>
            <WorkExperienceSection/>
            <ResumeSection name="Education" />
            <ResumeSection name="Computer Knowledge" />
            <ResumeSection name="Projects" />
            <ResumeSection name="Interests" />
        </body>
      </div>
    );
  }
  
  export default Resume;
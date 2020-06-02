import { useContentful } from "../lib/contentful";
import { EducationType, JobType, SkillsType } from "../types";
import Job from "../components/Job";
import Education from "../components/Education";
import Skills from "../components/Skills";
import { getYear } from "../lib/utils";
import InternalLink from "../components/InternalLink";

export default () => {
  const jobs: JobType[] = useContentful("job");
  const education: EducationType[] = useContentful("education");
  const skills: SkillsType[] = useContentful("skills");

  const sortedJobs = jobs.sort(
    (a, b) => parseInt(getYear(b.start)) - parseInt(getYear(a.start))
  );

  return (
    <>
      <h1>
        <InternalLink href="/">Home</InternalLink> / CV
      </h1>
      <h2>Experience</h2>
      {sortedJobs.map((item, index) => (
        <Job job={item} key={index} />
      ))}
      <h2>Education</h2>
      {education.map((item, index) => (
        <Education education={item} key={index} />
      ))}
      <h2>Skills</h2>
      {skills.map((item, index) => (
        <Skills skills={item} key={index} />
      ))}
    </>
  );
};

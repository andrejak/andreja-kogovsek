import Link from "next/link";
import { useContentful } from "../lib/contentful";
import { EducationType, JobType, SkillsType } from "../types";
import Job from "../components/Job";
import Education from "../components/Education";
import Skills from "../components/Skills";

export default () => {
  const jobs = useContentful("job") as JobType[];
  const education = useContentful("education") as EducationType[];
  const skills = useContentful("skills") as SkillsType[];

  return (
    <>
      <h1>CV</h1>
      <h2>Experience</h2>
      {jobs.map((item, index) => (
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
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
};

import Link from "next/link";
import { useContentful } from "../lib/contentful";
import { EducationType, JobType, SkillsType } from "../types";
import Job from "../components/Job";
import Education from "../components/Education";
import Skills from "../components/Skills";
import { getYear } from "../lib/utils";

export default () => {
  const jobs = useContentful("job") as JobType[];
  const education = useContentful("education") as EducationType[];
  const skills = useContentful("skills") as SkillsType[];

  const sortedJobs = jobs.sort(
    (a, b) => parseInt(getYear(b.start)) - parseInt(getYear(a.start))
  );

  return (
    <>
      <h1>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        / CV
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

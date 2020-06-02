import Link from "next/link";
import { useContentful } from "../lib/contentful";
import { Education, Job, Skills } from "../types";

export default () => {
  const jobs = useContentful("job") as Job[];
  const education = useContentful("education") as Education[];
  const skills = useContentful("skills") as Skills[];

  return (
    <>
      <h1>CV</h1>
      <h2>Experience</h2>
      {jobs.map((item) => (
        <div>{item.title}</div>
      ))}
      <h2>Education</h2>
      {education.map((item) => (
        <div>{item.institution}</div>
      ))}
      <h2>Skills</h2>
      {skills.map((item) => (
        <div>{item.title}</div>
      ))}
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
};

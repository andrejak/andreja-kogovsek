import { useContentful } from "../lib/contentful";
import { EducationType, JobType, SkillsType } from "../types";
import Job from "../components/Job";
import Education from "../components/Education";
import Skills from "../components/Skills";
import { getYear } from "../lib/utils";
import InternalLink from "../components/InternalLink";
import { Heading, Box } from "theme-ui";

export default () => {
  const jobs: JobType[] = useContentful("job");
  const education: EducationType[] = useContentful("education");
  const skills: SkillsType[] = useContentful("skills");

  const sortedJobs = jobs.sort(
    (a, b) => parseInt(getYear(b.start)) - parseInt(getYear(a.start))
  );

  return (
    <Box p={4}>
      <Heading as="h1" py={2}>
        <InternalLink href="/">Home</InternalLink> / CV
      </Heading>

      <Heading variant="styles.h2">Experience</Heading>
      {sortedJobs.map((item, index) => (
        <Job job={item} key={index} />
      ))}
      <Heading variant="styles.h2">Education</Heading>
      {education.map((item, index) => (
        <Education education={item} key={index} />
      ))}
      <Heading variant="styles.h2">Skills</Heading>
      {skills.map((item, index) => (
        <Skills skills={item} key={index} />
      ))}
    </Box>
  );
};

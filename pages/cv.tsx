import { useContentfulEntries } from "../lib/contentful";
import { EducationType, JobType, SkillsType, LoadingValue } from "../types";
import Job from "../components/Job";
import Education from "../components/Education";
import Skills from "../components/Skills";
import { getYear } from "../lib/utils";
import InternalLink from "../components/InternalLink";
import { Heading, Box, Spinner } from "theme-ui";

const CV: React.FC = () => {
  const jobs: LoadingValue<JobType[]> = useContentfulEntries("job");
  const education: LoadingValue<EducationType[]> = useContentfulEntries(
    "education",
  );
  const skills: LoadingValue<SkillsType[]> = useContentfulEntries("skills");

  const sortedJobs =
    jobs.data && jobs.data.sort((a, b) => getYear(b.start) - getYear(a.start));

  return (
    <Box p={4} sx={{ maxWidth: "800px", width: "calc(min(800px, 100vw))" }}>
      <Heading as="h1" py={2}>
        <InternalLink href="/">Home</InternalLink> / CV
      </Heading>
      <Heading variant="styles.h2">Experience</Heading>
      {sortedJobs ? (
        sortedJobs.map((item, index) => <Job job={item} key={index} />)
      ) : (
        <Spinner />
      )}
      <Heading variant="styles.h2">Education</Heading>
      {education.loading ? (
        <Spinner />
      ) : (
        education.data.map((item, index) => (
          <Education education={item} key={index} />
        ))
      )}
      <Heading variant="styles.h2">Skills</Heading>
      {skills.loading ? (
        <Spinner />
      ) : (
        skills.data.map((item, index) => <Skills skills={item} key={index} />)
      )}
    </Box>
  );
};

export default CV;

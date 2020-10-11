import { useContentfulEntries } from "../lib/contentful";
import { EducationType, JobType, SkillsType, LoadingValue } from "../types";
import Job from "../components/Job";
import Education from "../components/Education";
import Skills from "../components/Skills";
import { getYear } from "../lib/utils";
import InternalLink from "../components/InternalLink";
import { Heading, Box, Spinner } from "theme-ui";
import { footerHeight, maxWidth } from "../styles";
import TrailingList from "../components/TrailingList";

const CV: React.FC = () => {
  const jobs: LoadingValue<JobType[]> = useContentfulEntries("job");
  const education: LoadingValue<EducationType[]> = useContentfulEntries(
    "education",
  );
  const skills: LoadingValue<SkillsType[]> = useContentfulEntries("skills");

  const sortedJobs =
    jobs.data && jobs.data.sort((a, b) => getYear(b.start) - getYear(a.start));

  return (
    <Box
      p={4}
      sx={{
        maxWidth: "800px",
        width: `calc(min(${maxWidth}, 100vw))`,
        minHeight: `calc(100vh - ${footerHeight})`,
      }}
    >
      <Heading as="h1" py={2}>
        <InternalLink href="/">Home</InternalLink>/ CV
      </Heading>
      <Heading variant="styles.h2">Experience</Heading>
      <TrailingList items={sortedJobs || []} Component={Job} />
      {sortedJobs && education.data && (
        <Heading variant="styles.h2">Education</Heading>
      )}
      <TrailingList items={education.data || []} Component={Education} />
      {sortedJobs && skills.data && (
        <Heading variant="styles.h2">Skills</Heading>
      )}
      <TrailingList items={skills.data || []} Component={Skills} />
    </Box>
  );
};

export default CV;

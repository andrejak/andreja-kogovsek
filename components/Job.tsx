import { JobType } from "../types";
import RichText from "./RichText";
import { getYear } from "../lib/utils";
import { Flex, Heading, Box } from "theme-ui";

export default ({ job }: { job: JobType }) => (
  <Box py={1}>
    <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
      <Heading as="h3">
        {job.company.toUpperCase()} - {job.title}
        {job.internship && " (Internship)"}
      </Heading>
      <span>
        {getYear(job.start)} - {getYear(job.end) || "Present"}
      </span>
    </Flex>
    <RichText text={job.description} />
  </Box>
);

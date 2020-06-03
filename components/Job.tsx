import { JobType } from "../types";
import RichText from "./RichText";
import { getYear } from "../lib/utils";
import { Flex, Heading, Box, Text } from "theme-ui";

const Job = ({ job }: { job: JobType }): JSX.Element => (
  <Box py={1}>
    <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
      <Heading as="h3">
        <Flex sx={{ alignItems: "baseline" }}>
          {job.company.toUpperCase()} - {job.title}
          {job.internship && (
            <Text variant="detail" pl={1}>
              (Internship)
            </Text>
          )}
        </Flex>
      </Heading>
      <span>
        {getYear(job.start)} - {getYear(job.end) || "Present"}
      </span>
    </Flex>
    <RichText text={job.description} />
  </Box>
);

export default Job;

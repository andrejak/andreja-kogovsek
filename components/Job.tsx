import { JobType } from "../types";
import RichText from "./RichText";
import { getYear } from "../lib/utils";
import { Flex } from "theme-ui";

export default ({ job }: { job: JobType }) => (
  <div>
    <Flex sx={{ justifyContent: "space-between" }}>
      <span>
        <b>{job.company}</b> - {job.title}
        {job.internship && " (Internship)"}
      </span>
      <span>
        {getYear(job.start)} - {getYear(job.end)}
      </span>
    </Flex>
    <RichText text={job.description} />
  </div>
);

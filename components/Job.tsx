import { JobType } from "../types";
import RichText from "./RichText";
import { getYear } from "../lib/utils";
import { Flex } from "theme-ui";

export default ({ job }: { job: JobType }) => (
  <div>
    <Flex sx={{ justifyContent: "space-between" }}>
      <h3>
        <b>{job.company}</b> - {job.title}
        {job.internship && " (Internship)"}
      </h3>
      <span>
        {getYear(job.start)} - {getYear(job.end) || "Present"}
      </span>
    </Flex>
    <RichText text={job.description} />
  </div>
);

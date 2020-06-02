import { JobType } from "../types";
import RichText from "./RichText";
import { getYear } from "../lib/utils";

export default ({ job }: { job: JobType }) => (
  <div>
    <b>{job.company}</b> - {job.title}
    {job.internship && " (Internship)"}
    <span>
      {getYear(job.start)} - {getYear(job.end)}
    </span>
    <RichText text={job.description} />
  </div>
);

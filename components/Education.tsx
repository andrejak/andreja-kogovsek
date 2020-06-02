import { EducationType } from "../types";
import { getYear } from "../lib/utils";

export default ({ education }: { education: EducationType }) => (
  <div>
    {education.institution} - {education.course} {education.grade}
    <span>
      {getYear(education.start)} - {getYear(education.end)}
    </span>
  </div>
);

import { EducationType } from "../types";
import { getYear } from "../lib/utils";
import { Flex } from "theme-ui";

export default ({ education }: { education: EducationType }) => (
  <div>
    <Flex sx={{ justifyContent: "space-between" }}>
      <h3>
        <b>{education.institution}</b> - {education.course} {education.grade}
      </h3>
      <span>
        {getYear(education.start)} - {getYear(education.end)}
      </span>
    </Flex>
  </div>
);

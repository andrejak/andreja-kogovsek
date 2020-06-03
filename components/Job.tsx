import { JobType } from "../types";
import RichText from "./RichText";
import { getYear } from "../lib/utils";
import { Flex, Heading, Box, Text } from "theme-ui";

const Job = ({ item }: { item: JobType }): JSX.Element => (
  <Box py={3}>
    <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
      <Heading as="h3">
        <Flex sx={{ alignItems: "baseline" }}>
          {item.company.toUpperCase()} - {item.title}
          {item.internship && (
            <Text variant="detail" pl={1}>
              (Internship)
            </Text>
          )}
        </Flex>
      </Heading>
      <span>
        {getYear(item.start)} - {getYear(item.end) || "Present"}
      </span>
    </Flex>
    <RichText text={item.description} />
  </Box>
);

export default Job;

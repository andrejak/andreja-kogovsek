import Link from "next/link";
import { Link as ThemeUILink } from "theme-ui";

const InternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}): JSX.Element => (
  <Link href={href}>
    <ThemeUILink tabIndex={0}>{children}</ThemeUILink>
  </Link>
);

export default InternalLink;

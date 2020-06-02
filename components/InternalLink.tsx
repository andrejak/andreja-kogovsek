import Link from "next/link";
import { Link as ThemeUILink } from "theme-ui";

export default ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href}>
    <ThemeUILink>{children}</ThemeUILink>
  </Link>
);

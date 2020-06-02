import Link from "next/link";
import { Link as ThemeUILink } from "theme-ui";

export default ({ href, children }: { href: string; children: any }) => (
  <Link href={href}>
    <ThemeUILink>{children}</ThemeUILink>
  </Link>
);

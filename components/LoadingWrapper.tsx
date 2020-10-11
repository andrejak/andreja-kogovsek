import { Spinner } from "theme-ui";

const LoadingWrapper = ({
  loading,
  children,
}: {
  loading: boolean;
  children: any;
}): JSX.Element => {
  console.log("loading", loading, children);
  return <>{loading ? <Spinner /> : { children }}</>;
};

export default LoadingWrapper;

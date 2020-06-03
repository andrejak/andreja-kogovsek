import { useTrail, animated } from "react-spring";

const TrailingList = ({
  items,
  Component,
}: {
  items: any[];
  Component: any;
}): any => {
  const trail = useTrail(items.length, {
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return trail.map((props, index) => (
    <animated.div key={index} style={props}>
      <Component item={items[index]} />
    </animated.div>
  ));
};

export default TrailingList;

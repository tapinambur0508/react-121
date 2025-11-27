interface CountDisplayProps {
  count: number;
}

function CountDisplay({ count }: CountDisplayProps) {
  return <div>Total count is {count}</div>;
}

export default CountDisplay;

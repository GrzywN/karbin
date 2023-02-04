export interface StackProps {
  children: React.ReactNode;
}

export function Stack(props: StackProps) {
  const { children } = props;

  return (
    <div
      className="
      w-full grid gap-3"
    >
      {children}
    </div>
  );
}

export default Stack;

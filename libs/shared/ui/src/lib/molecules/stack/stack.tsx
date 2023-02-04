export interface StackProps {
  children: React.ReactNode;
}

export function Stack(props: StackProps) {
  const { children } = props;

  return (
    <div
      className="
      w-full flex flex-col gap-4
      lg:gap-6"
    >
      {children}
    </div>
  );
}

export default Stack;

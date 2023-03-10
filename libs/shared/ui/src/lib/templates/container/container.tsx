export interface ContainerProps {
  children: React.ReactNode;
}

export function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <main className="grow max-w-7xl mx-auto w-full py-32 px-8 grid gap-12">
      {children}
    </main>
  );
}

export default Container;

export interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export function Section(props: SectionProps) {
  const { title, children } = props;

  return (
    <section className="rounded-md grid gap-8 max-w-7xl" title={title}>
      {children}
    </section>
  );
}

export default Section;

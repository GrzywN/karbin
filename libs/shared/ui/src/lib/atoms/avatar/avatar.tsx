export interface AvatarProps {
  children: React.ReactNode;
}

export function Avatar(props: AvatarProps) {
  const {
    children = <div className="w-16 h-16 bg-neutral-200 animate-pulse" />,
  } = props;

  return (
    <picture className="inline-block rounded-full border-2 border-neutral-600 overflow-hidden">
      {children}
    </picture>
  );
}

export default Avatar;

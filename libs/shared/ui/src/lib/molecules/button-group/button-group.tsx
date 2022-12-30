import Button from '../../atoms/button/button';

export interface ButtonGroupProps {
  children: React.ReactNode[];
}

export function ButtonGroup(props: ButtonGroupProps) {
  const {
    children = [
      <Button color="primary" />,
      <Button color="secondary" />,
      <Button color="dark" />,
    ],
  } = props;

  return (
    <ul
      className="
      mt-auto grid gap-2
      lg:flex lg:flex-wrap"
    >
      {children.map((button, index) => (
        <li key={index}>{button}</li>
      ))}
    </ul>
  );
}

ButtonGroup.Button = Button;

export default ButtonGroup;

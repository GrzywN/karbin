import Chip from '../../atoms/chip/chip';

export interface ChipListProps {
  children?: React.ReactNode[];
}

export function ChipList(props: ChipListProps) {
  const {
    children = [
      <Chip color="primary">Lorem</Chip>,
      <Chip color="secondary">Ipsum</Chip>,
      <Chip color="dark" background="dark">
        Dolor sit
      </Chip>,
      <Chip>Amet consectetur</Chip>,
    ],
  } = props;

  return (
    <ul className="flex flex-wrap gap-1 md:gap-2">
      {children.map((chip, index) => (
        <li key={index}>{chip}</li>
      ))}
    </ul>
  );
}

ChipList.Chip = Chip;

export default ChipList;

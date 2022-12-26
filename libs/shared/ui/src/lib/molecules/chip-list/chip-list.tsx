import Chip from '../../atoms/chip/chip';

export interface ChipListProps {
  chips?: string[];
}

export function ChipList(props: ChipListProps) {
  const { chips = ['Lorem', 'Ipsum', 'Dolor sit'] } = props;

  return (
    <ul className="flex flex-wrap gap-2">
      {chips.map((chip) => (
        <li key={chip}>
          <Chip>{chip}</Chip>
        </li>
      ))}
    </ul>
  );
}

export default ChipList;

import { IconArrowLeft, IconArrowRight, IconCalendar } from '@tabler/icons';

import Button from '../../atoms/button/button';
import ChipList from '../../molecules/chip-list/chip-list';
import Text from '../../atoms/text/text';

const LEFT = 'left' as const;
const RIGHT = 'right' as const;

export interface ArticleNavigationButtonProps {
  title: string;
  formattedDate: string;
  tags: string[];
  direction: typeof LEFT | typeof RIGHT;
  onClick: () => void;
}

export function ArticleNavigationButton(props: ArticleNavigationButtonProps) {
  const { title, formattedDate, tags, direction, onClick } = props;

  return direction === LEFT ? (
    <Button as="button" onClick={onClick} color="primary">
      <div className="grid gap-4 max-w-md break-normal text-left">
        <span className="flex items-start justify-between">
          <IconArrowLeft />
          <ChipList>
            {tags.map((tag, index) => (
              <ChipList.Chip background="dark" key={index}>
                {tag}
              </ChipList.Chip>
            ))}
          </ChipList>
        </span>
        <Text size="sm" weight="bold">
          {title}
        </Text>
        <span className="inline-flex gap-1">
          <IconCalendar />
          {formattedDate}
        </span>
      </div>
    </Button>
  ) : (
    <Button as="button" onClick={onClick} color="primary">
      <div className="grid gap-4 max-w-md break-normal text-left">
        <span className="flex items-start justify-between">
          <ChipList>
            {tags.map((tag, index) => (
              <ChipList.Chip background="dark" key={index}>
                {tag}
              </ChipList.Chip>
            ))}
          </ChipList>
          <IconArrowRight />
        </span>
        <Text size="sm" weight="bold">
          {title}
        </Text>
        <span className="inline-flex gap-1">
          <IconCalendar />
          {formattedDate}
        </span>
      </div>
    </Button>
  );
}

export default ArticleNavigationButton;

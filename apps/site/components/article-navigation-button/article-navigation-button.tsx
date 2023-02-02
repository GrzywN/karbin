import slugify from 'slugify';
import Link from 'next/link';
import { Button, ChipList, Text } from '@karbin/shared/ui';
import { IconArrowLeft, IconArrowRight, IconCalendar } from '@tabler/icons';

import type { ArticleFrontMatter } from '../../types/Article';

const LEFT = 'left' as const;
const RIGHT = 'right' as const;

export interface ArticleNavigationButtonProps {
  frontMatter: ArticleFrontMatter;
  direction: typeof LEFT | typeof RIGHT;
}

export function ArticleNavigationButton(props: ArticleNavigationButtonProps) {
  const { frontMatter, direction } = props;

  return (
    <Link
      href={`/article/${slugify(frontMatter.title, {
        trim: true,
        lower: true,
      })}`}
    >
      {direction === LEFT ? (
        <Button as="div" color="primary">
          <div className="grid gap-4 max-w-md break-normal text-left">
            <span className="flex items-start justify-between">
              <IconArrowLeft />
              <ChipList>
                {frontMatter.tags.map((tag, index) => (
                  <ChipList.Chip background="dark" key={index}>
                    {tag}
                  </ChipList.Chip>
                ))}
              </ChipList>
            </span>
            <Text size="sm" weight="bold">
              {frontMatter.title}
            </Text>
            <span className="inline-flex gap-1">
              <IconCalendar />
              {frontMatter && new Date(frontMatter.date).toLocaleDateString()}
            </span>
          </div>
        </Button>
      ) : (
        <Button as="div" color="primary">
          <div className="grid gap-4 max-w-md break-normal text-left">
            <span className="flex items-start justify-between">
              <ChipList>
                {frontMatter.tags.map((tag, index) => (
                  <ChipList.Chip background="dark" key={index}>
                    {tag}
                  </ChipList.Chip>
                ))}
              </ChipList>
              <IconArrowRight />
            </span>
            <Text size="sm" weight="bold">
              {frontMatter.title}
            </Text>
            <span className="inline-flex gap-1">
              <IconCalendar />
              {frontMatter && new Date(frontMatter.date).toLocaleDateString()}
            </span>
          </div>
        </Button>
      )}
    </Link>
  );
}

export default ArticleNavigationButton;

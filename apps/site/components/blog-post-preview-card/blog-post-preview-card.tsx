import { ChipList, Paper, Text } from '@karbin/shared/ui';
import { IconCalendar } from '@tabler/icons';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import slugify from 'slugify';

dayjs.extend(relativeTime);

export interface BlogPost {
  title: string;
  slug?: string;
  whenPublished: string;
  tags: string[] | React.ReactNode[];
}

export type BlogPostPreviewCardProps = BlogPost;

export function BlogPostPreviewCard(props: BlogPostPreviewCardProps) {
  const {
    title,
    slug = slugify(title, { trim: true, lower: true }),
    whenPublished,
    tags,
  } = props;

  return (
    <Link href={`/articles/${slug}`} shallow>
      <Paper className="grid gap-4 p-2 hover:bg-tertiary-100">
        <Text as="h3" color="dark">
          {title}
        </Text>
        <div className="w-full flex flex-wrap gap-2 items-center">
          <span className="flex gap-2 mr-auto">
            <IconCalendar /> {dayjs().to(whenPublished)}
          </span>
          <ChipList>
            {tags.map((tag: string, index: number) => (
              <ChipList.Chip key={index}>{tag}</ChipList.Chip>
            ))}
          </ChipList>
        </div>
      </Paper>
    </Link>
  );
}

export default BlogPostPreviewCard;

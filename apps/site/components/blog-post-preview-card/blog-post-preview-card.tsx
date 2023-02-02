import Link from 'next/link';
import slugify from 'slugify';
import { Paper, Text, ChipList } from '@karbin/shared/ui';
import { IconCalendar } from '@tabler/icons';

export interface BlogPost {
  title: string;
  whenPublished: string | React.ReactNode;
  tags: string[] | React.ReactNode[];
}

export type BlogPostPreviewCardProps = BlogPost;

export function BlogPostPreviewCard(props: BlogPostPreviewCardProps) {
  const { title, whenPublished, tags } = props;

  return (
    <Link href={`/article/${slugify(title, { trim: true, lower: true })}`}>
      <Paper classes="grid gap-4 p-2 hover:bg-tertiary-100">
        <Text as="h3" color="dark">
          {title}
        </Text>
        <div className="w-full flex flex-wrap gap-2 items-center">
          <span className="flex gap-2 mr-auto">
            <IconCalendar /> {whenPublished}
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

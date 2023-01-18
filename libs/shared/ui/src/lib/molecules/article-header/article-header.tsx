import ArticleDetails from '../../molecules/article-details/article-details';
import ChipList from '../../molecules/chip-list/chip-list';

export interface ArticleHeaderProps {
  authorAvatarNode: React.ReactNode;
  authorName: string;
  date: string;
  minutesRead: number;
  tags: string[];
}

export function ArticleHeader(props: ArticleHeaderProps) {
  const {
    authorAvatarNode,
    authorName = 'Jane Doe',
    date = '2000-01-01T00:00:00.000Z',
    minutesRead = 10,
    tags = ["Lorem", "Ipsum", "Dolor sit"],
  } = props;

  return (
    <header className="text-neutral-300 w-full flex flex-wrap justify-between items-center gap-2">
      <ArticleDetails
        authorAvatarNode={authorAvatarNode}
        authorName={authorName}
        date={date}
        minutesRead={minutesRead}
      />
      <ChipList>
        {tags.map((tag: string, index: number) => (
          <ChipList.Chip key={index} color="dark" >
            {tag}
          </ChipList.Chip>
        ))}
      </ChipList>
    </header>
  );
}

export default ArticleHeader;

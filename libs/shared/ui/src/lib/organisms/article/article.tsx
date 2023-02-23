import ArticleHeader from '../../molecules/article-header/article-header';
import Paper from '../../molecules/paper/paper';

export interface ArticleProps {
  title: string;
  authorAvatarNode: React.ReactNode;
  authorName: string;
  date: string;
  minutesRead: number;
  tags: string[];
  contentNode: React.ReactNode;
}

export function Article(props: ArticleProps) {
  const {
    title = 'Lorem ipsum',
    authorAvatarNode,
    authorName = 'Jane Doe',
    date = '2000-01-01T00:00:00.000Z',
    minutesRead = 10,
    tags = ['Lorem', 'Ipsum', 'Dolor sit'],
    contentNode = (
      <>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          laboriosam, maiores suscipit, animi, dignissimos nulla rerum vel
          voluptatem delectus fuga distinctio quo laudantium veritatis soluta
        </p>
        <p>
          Sequi, sed ducimus! Animi consequatur temporibus itaque. Hic maiores
          quibusdam fuga ipsam porro, fugiat quo alias voluptate! Ex, veritatis
          asperiores? Quisquam suscipit laudantium voluptatum eum officia dolor
        </p>
      </>
    ),
  } = props;

  return (
    <Paper className="p-4 sm:px-6 lg:px-8 lg:py-16" color="dark">
      <article className="mx-auto grid gap-8" title="Blog post">
        <ArticleHeader
          authorAvatarNode={authorAvatarNode}
          authorName={authorName}
          date={date}
          minutesRead={minutesRead}
          tags={tags}
        />
        <hr className="border-2 border-neutral-600" />
        <section
          className="font-sans mx-auto prose prose-sm prose-headings:text-primary-400 prose-invert sm:prose-base md:prose-lg lg:prose-xl"
          title={title}
        >
          {contentNode}
        </section>
      </article>
    </Paper>
  );
}

export default Article;

import Avatar from '../../atoms/avatar/avatar';
import Text from '../../atoms/text/text';

export interface ArticleDetailsProps {
  authorAvatarNode: React.ReactNode;
  authorName: string;
  date: string;
  minutesRead: number;
}

export function ArticleDetails(props: ArticleDetailsProps) {
  const {
    authorAvatarNode,
    authorName = 'Jane Doe',
    date = '2000-01-01T00:00:00.000Z',
    minutesRead = 10,
  } = props;

  return (
    <figure className="flex flex-wrap gap-4 items-center">
      <Avatar>{authorAvatarNode}</Avatar>
      <div className="grid gap-1">
        <Text
          as="address"
          size="sm"
          color="light"
          {...{
            rel: 'author',
          }}
        >
          {authorName}
        </Text>
        <span className="flex flex-wrap gap-2">
          <Text
            as="time"
            size="xs"
            color="gray"
            dateTime={date}
            {...{
              pubdate: 'pubdate',
            }}
          >
            {new Date(date).toLocaleDateString()}
          </Text>
          <Text as="span" size="xs" color="light">
            {minutesRead} minutes read
          </Text>
        </span>
      </div>
    </figure>
  );
}

export default ArticleDetails;

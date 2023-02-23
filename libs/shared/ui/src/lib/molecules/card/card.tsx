import Paper from '../../molecules/paper/paper';

export interface CardProps {
  children?: React.ReactNode;
}

export function Card(props: CardProps) {
  const {
    children = (
      <>
        <img src="https://picsum.photos/1280/720" alt="" />
        <Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ut
          voluptas sunt eum voluptatum earum neque dolor? Veritatis, voluptas
          iusto!
        </Body>
      </>
    ),
  } = props;

  return <Paper className="flex flex-col max-w-sm">{children}</Paper>;
}

export interface BodyProps {
  children: React.ReactNode;
}

function Body(props: BodyProps) {
  const { children } = props;

  return (
    <div className="h-full p-4 flex flex-col items-start gap-2">{children}</div>
  );
}

Card.Body = Body;

export default Card;

import { useParams } from 'react-router-dom';

const Article = () => {
  const { id } = useParams<{ id: string }>();

  return <div>Article - {id}</div>;
};

export default Article;

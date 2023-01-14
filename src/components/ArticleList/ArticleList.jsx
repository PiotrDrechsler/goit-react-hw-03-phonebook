export const ArticleList = ({ articles, topic }) => {
  return (
    <>
      <h2>Articles about {topic}</h2>
      <ul>
        {articles.map(article => {
          return (
            <li key={article.objectID}>
              <a href={article.url}>{article.title}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

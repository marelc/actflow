import { Link } from 'react-router-dom';
import type { Article } from '../types';

interface ArticleDetailProps { article: Article }

function ArticleDetail({ article }: ArticleDetailProps) {
  return (
    <article className="article-detail">
      <Link className="article-detail__back" to="/artykuly">Powrót do artykułów</Link>
      <header className="article-detail__header">
        <p>ACT Flow · {article.readingMinutes} min czytania</p>
        <h1>{article.title}</h1>
        <div className="article-detail__divider" />
      </header>
      <div className="article-detail__body">
        {article.blocks.map((block, index) => {
          const key = `${block.type}-${index}`;
          if (block.type === 'table') {
            const [header, ...rows] = block.rows;
            return (
              <div className="article-detail__table-wrap" key={key}>
                <table>
                  {header && (
                    <thead><tr>{header.map((cell) => <th key={cell}>{cell}</th>)}</tr></thead>
                  )}
                  <tbody>
                    {rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
          if (block.type === 'heading') return <h2 key={key}>{block.text}</h2>;
          if (block.type === 'subheading') return <h3 key={key}>{block.text}</h3>;
          if (block.type === 'quote') return <blockquote key={key}>{block.text}</blockquote>;
          return <p key={key}>{block.text}</p>;
        })}
      </div>
      <footer className="article-detail__footer">
        <Link to="/artykuly">Czytaj pozostałe artykuły</Link>
      </footer>
    </article>
  );
}

export default ArticleDetail;

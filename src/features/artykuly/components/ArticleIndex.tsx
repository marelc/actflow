import { Link } from 'react-router-dom';
import type { Article } from '../types';

interface ArticleIndexProps { articles: Article[] }

function ArticleIndex({ articles }: ArticleIndexProps) {
  return (
    <section className="articles">
      <header className="articles__header">
        <h1>Artykuły</h1>
        <p>O ACT, pracy terapeutycznej i budowaniu elastyczności psychologicznej w gabinecie i poza nim.</p>
      </header>

      <div className="articles__list">
        {articles.map((article, index) => (
          <Link className="articles__item" key={article.slug} to={`/artykuly/${article.slug}`}>
            <span className="articles__number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>
            </div>
            <span className="articles__time">{article.readingMinutes} min</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ArticleIndex;

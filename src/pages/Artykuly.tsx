import { Link, useParams } from 'react-router-dom';

import ArticleDetail from '../features/artykuly/components/ArticleDetail';
import ArticleIndex from '../features/artykuly/components/ArticleIndex';
import { articles, findArticleBySlug } from '../features/artykuly/data/articles';

function Artykuly() {
  const { slug } = useParams();

  if (!slug) return <ArticleIndex articles={articles} />;

  const article = findArticleBySlug(slug);
  if (!article) {
    return (
      <section className="articles articles--missing">
        <h1>Nie znaleziono artykułu</h1>
        <p>Wybrany artykuł nie istnieje albo został przeniesiony.</p>
        <Link to="/artykuly">Powrót do artykułów</Link>
      </section>
    );
  }

  return <ArticleDetail article={article} />;
}

export default Artykuly;

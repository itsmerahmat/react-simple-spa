import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    async function getArticles() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      const response = await request.json();

      setArticles(response);

      setLoading(false);
    }
    getArticles();
  }, []);

  return (
    <section>
      <h1>Blog</h1>
      <p>Berikut ini adalah blog yang difetch dari API external</p>

      {loading ? (
        <i>Loading . . .</i>
      ) : (
        <div>
          {articles.map(function (article) {
            return (
              <article key={article.id}>
                <h2>
                  <Link to={`/blog/${article.id}`}>{article.title}</Link>
                </h2>
                <time>
                  {new Date(article.publishedAt).toLocaleDateString()}
                </time>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

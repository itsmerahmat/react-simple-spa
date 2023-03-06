import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const params = useParams();
  const [article, setArticles] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(
    function () {
      async function getArticles() {
        const request = await fetch(
          `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
        );

        if (!request.ok) {
          setLoading(false);
          return setNotFound(true);
        }

        const response = await request.json();

        setArticles(response);
        setLoading(false);
      }
      getArticles();
    },
    [params]
  );

  if (notFound) {
    return <h1>Artikel tidak ditemukan :(</h1>;
  }

  return (
    <section>
      {loading ? (
        <i>Loading . . .</i>
      ) : (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
          <div className="grid gap-5 lg:grid-cols-1 sm:max-w-sm sm:mx-auto lg:max-w-full">
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
              <a href="/" aria-label="Article">
                <img
                  src={article.imageUrl}
                  className="object-cover w-full h-auto rounded"
                  alt={article.title}
                />
              </a>
              <div className="py-5">
                <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </p>
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-2xl font-bold leading-5">
                    {article.title}
                  </p>
                </a>
                <p className="mb-4 text-gray-700">{article.summary}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

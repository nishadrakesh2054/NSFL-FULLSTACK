import { useState } from "react";
import React from "react";
import {
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaTimes,
  FaShare,
  FaBookmark,
} from "react-icons/fa";

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category?: string;
  readTime?: string;
}

const News = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(
    null
  );
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const articles: NewsArticle[] = [
    {
      id: 1,
      title: "Blue Eagles Extend Lead at the Top",
      excerpt:
        "Blue Eagles FC secured a crucial victory against Red Lions to extend their lead at the top of the table.",
      content:
        "In a thrilling match at Eagle Stadium, Blue Eagles FC defeated Red Lions 2-1 to extend their lead at the top of the table. Goals from David Johnson and Michael Brown secured the victory, while Robert Taylor scored for the visitors. The win puts Blue Eagles three points clear at the top with five games remaining.",
      image:
        "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      date: "2024-03-12",
      author: "John Smith",
      category: "Match Report",
      readTime: "3 min read",
    },
    {
      id: 2,
      title: "Green Tigers Sign New Striker",
      excerpt:
        "Green Tigers FC have announced the signing of a new striker from the international transfer market.",
      content:
        'Green Tigers FC have completed the signing of Brazilian striker Carlos Silva from Internacional. The 24-year-old forward has signed a three-year contract with the club and will join the squad immediately. Manager Mark Davis expressed his excitement about the new addition, stating that Silva will bring "pace, power, and goals" to the team.',
      image:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      date: "2024-03-10",
      author: "Sarah Williams",
      category: "Transfers",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "League Announces New TV Deal",
      excerpt:
        "The league has secured a new broadcasting deal worth millions with a major sports network.",
      content:
        "The league has announced a new five-year broadcasting deal with Sports Network International worth $500 million. The deal will see all matches broadcast live across multiple platforms, including traditional TV and streaming services. League chairman James Wilson stated that this deal will help grow the league's global audience and provide more revenue for clubs to invest in their facilities and youth development programs.",
      image:
        "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      date: "2024-03-08",
      author: "Michael Brown",
      category: "League News",
      readTime: "5 min read",
    },
  ];

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "numeric",
      month: "short",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const categories = ["all", "Match Report", "Transfers", "League News"];

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/image/about.jpeg')",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest News & Updates
          </h1>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Stay up to date with the latest news, match reports, and transfer
            updates from around the league.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-blue-800 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                    {articles[0].category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <FaCalendarAlt /> {formatDate(articles[0].date)}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4">{articles[0].title}</h2>
                <p className="text-gray-600 mb-6">{articles[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src="/image/img-1-2.jpg"
                      alt={articles[0].author}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm text-gray-600">
                      {articles[0].author}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedArticle(articles[0])}
                    className="text-blue-800 font-medium flex items-center gap-2 hover:text-blue-600"
                  >
                    Read More <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <FaCalendarAlt /> {formatDate(article.date)}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src="/image/img-1-3.jpg"
                      alt={article.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm text-gray-600">
                      {article.author}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="text-blue-800 font-medium flex items-center gap-2 hover:text-blue-600"
                  >
                    Read More <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Article Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                    {selectedArticle.category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <FaCalendarAlt /> {formatDate(selectedArticle.date)}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {selectedArticle.readTime}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  {selectedArticle.title}
                </h2>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <img
                      src="/image/img-1-2.jpg"
                      alt={selectedArticle.author}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium">{selectedArticle.author}</p>
                      <p className="text-sm text-gray-500">Sports Journalist</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 ml-auto">
                    <button className="text-gray-500 hover:text-blue-800">
                      <FaBookmark />
                    </button>
                    <button className="text-gray-500 hover:text-blue-800">
                      <FaShare />
                    </button>
                  </div>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {selectedArticle.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default News;

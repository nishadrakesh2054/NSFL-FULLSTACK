import React from "react";
import { useState } from "react";
import {
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaTimes,
  FaShare,
  FaBookmark,
  FaFutbol,
  FaExchangeAlt,
  FaUsers,
} from "react-icons/fa";
import { MdStadium, MdEmojiEvents } from "react-icons/md";

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: "match" | "transfer" | "league" | "team" | "interview";
  readTime: string;
  featured?: boolean;
  tags?: string[];
  relatedTeams?: string[];
}

const News = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(
    null
  );
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const articles: NewsArticle[] = [
    {
      id: 1,
      title: "Manang Marshyangdi Extends Lead at the Top with Derby Win",
      excerpt:
        "MMC defeated rivals Three Star Club 3-1 in a thrilling Kathmandu derby to go five points clear at the top.",
      content:
        "In a highly anticipated derby match at Dasharath Stadium, Manang Marshyangdi Club (MMC) secured a crucial 3-1 victory against Three Star Club. Bimal Gharti Magar opened the scoring in the 18th minute with a spectacular volley, followed by a Sujal Shrestha strike just before halftime. Three Star's Nawayug Shrestha pulled one back in the 65th minute, but MMC sealed the win with a late goal from Ananta Tamang. The win extends MMC's lead at the top of the NSFL table to five points with seven matches remaining in the season.",
      image: "/image/img-07.jpg",
      date: "2024-03-15",

      category: "match",
      readTime: "4 min read",
      featured: true,
      tags: ["Derby", "MMC", "Three Star"],
      relatedTeams: ["Manang Marshyangdi Club", "Three Star Club"],
    },
    {
      id: 2,
      title: "Machhindra FC Signs Nigerian Striker On Two-Year Deal",
      excerpt:
        "The league leaders have bolstered their attack with the signing of experienced striker Adebayo Ojo.",
      content:
        "Machhindra Football Club has completed the signing of Nigerian striker Adebayo Ojo from Enyimba FC. The 28-year-old forward has signed a two-year contract with the NSFL leaders. Ojo brings continental experience having played in the CAF Champions League and scored 15 goals last season. 'Adebayo is exactly the type of player we need for our title push and AFC Cup campaign,' said Machhindra coach Pratik Pandey. The transfer fee is reported to be around $50,000, making it one of the biggest transfers in NSFL history.",
      image: "/image/img-08.jpg",
      date: "2024-03-14",

      category: "transfer",
      readTime: "3 min read",
      tags: ["Transfer", "Machhindra FC", "Foreign Player"],
      relatedTeams: ["Machhindra FC"],
    },
    {
      id: 3,
      title: "NSFL Announces Expansion to 14 Teams Starting 2025 Season",
      excerpt:
        "Two new clubs will join the league as part of the federation's five-year development plan.",
      content:
        "The All Nepal Football Association (ANFA) has confirmed the NSFL will expand to 14 teams starting from the 2025 season. The expansion is part of ANFA's five-year plan to develop football across Nepal. 'This expansion will give more opportunities to players and help grow the game in new regions,' said ANFA President Pankaj Bikram Nembang. The two new teams will be selected through a bidding process open to all A-division clubs. Additionally, the league will introduce a winter break starting next season to align with international calendars.",
      image: "/image/img-07.jpg",
      date: "2024-03-12",
      category: "league",
      readTime: "5 min read",
      tags: ["League News", "Expansion"],
      relatedTeams: [],
    },
    {
      id: 4,
      title: "Exclusive Interview: Rohit Chand on His Return to Three Star",
      excerpt:
        "The national team captain talks about his decision to return to domestic football in Nepal.",
      content:
        "In an exclusive interview with NSFL Media, Nepal national team captain Rohit Chand opened up about his return to Three Star Club after seven years playing abroad. 'Coming back to Three Star feels like coming home,' said Chand. 'My goal is to help develop the next generation of Nepali players while competing for trophies.' The 30-year-old defender also discussed his aspirations to become a coach after retirement and his thoughts on the growing quality of the NSFL. Chand made his debut for Three Star in 2010 before moving to Indonesia's PSPS Pekanbaru in 2015.",
      image: "/image/img-08.jpg",
      date: "2024-03-10",

      category: "interview",
      readTime: "6 min read",
      tags: ["Interview", "National Team"],
      relatedTeams: ["Three Star Club"],
    },
    {
      id: 5,
      title: "Kathmandu Rayzrs Unveil New Stadium Plans",
      excerpt:
        "The club has announced ambitious plans for a 15,000-seater football-specific stadium.",
      content:
        "Kathmandu Rayzrs have unveiled renderings for their proposed new stadium in the outskirts of Kathmandu. The 15,000-capacity football-specific venue would be the first of its kind in Nepal. 'This stadium will set new standards for football infrastructure in our country,' said club owner Rajiv Shrestha. The project, estimated to cost $12 million, is scheduled for completion by mid-2026. The design includes modern training facilities, a youth academy, and commercial spaces. The club is currently in talks with potential naming rights partners for the venue.",
      image: "/image/img-07.jpg",
      date: "2024-03-08",
      category: "team",
      readTime: "4 min read",
      tags: ["Stadium", "Development"],
      relatedTeams: ["Kathmandu Rayzrs"],
    },
    {
      id: 6,
      title: "Jawalakhel YC's Prince Karki Tops Scoring Charts",
      excerpt:
        "The 21-year-old forward has scored 8 goals in his last 5 matches for Jawalakhel.",
      content:
        "Jawalakhel Youth Club's young striker George Prince Karki has taken the NSFL by storm, topping the scoring charts with 14 goals this season. His recent form includes back-to-back hat-tricks against Church Boys United and Himalayan Sherpa Club. 'Prince has incredible potential,' said Jawalakhel coach Yogesh Suwal. 'His movement and finishing are exceptional for his age.' The 21-year-old has already attracted interest from clubs in India and Bangladesh, but Jawalakhel insists he's not for sale. Karki credits his improvement to extra training sessions with former national team striker Nirajan Rayamajhi.",
      image: "/image/img-08.jpg",
      date: "2024-03-05",
      category: "team",
      readTime: "3 min read",
      tags: ["Player Spotlight", "Top Scorer"],
      relatedTeams: ["Jawalakhel Youth Club"],
    },
  ];

  const categories = [
    { value: "all", label: "All News", icon: <FaFutbol /> },
    { value: "match", label: "Match Reports", icon: <MdStadium /> },
    { value: "transfer", label: "Transfers", icon: <FaExchangeAlt /> },
    { value: "league", label: "League News", icon: <MdEmojiEvents /> },
    { value: "team", label: "Team News", icon: <FaUsers /> },
    { value: "interview", label: "Interviews", icon: <FaUser /> },
  ];

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "numeric",
      month: "short",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const filteredArticles = articles
    .filter(
      (article) =>
        activeCategory === "all" || article.category === activeCategory
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url('/image/about.jpeg')",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About NSFL
          </h1>
          <div className="text-white flex justify-center items-center space-x-2">
            <span>Home</span>
            <span>/</span>
            <span className="text-red-500">News</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                  activeCategory === category.value
                    ? "bg-red-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </div>

          {/* Featured Article */}
          {filteredArticles.find((a) => a.featured) && (
            <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 relative">
                  <img
                    src={filteredArticles.find((a) => a.featured)?.image}
                    alt={filteredArticles.find((a) => a.featured)?.title}
                    className="w-full h-full min-h-96 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <span className="bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      Featured Story
                    </span>
                  </div>
                </div>
                <div className="p-8 md:w-1/2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                      {filteredArticles.find((a) => a.featured)?.category ===
                      "match"
                        ? "Match Report"
                        : filteredArticles.find((a) => a.featured)?.category ===
                          "transfer"
                        ? "Transfer News"
                        : filteredArticles.find((a) => a.featured)?.category ===
                          "league"
                        ? "League News"
                        : filteredArticles.find((a) => a.featured)?.category ===
                          "team"
                        ? "Team News"
                        : "Exclusive Interview"}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <FaCalendarAlt />{" "}
                      {formatDate(
                        filteredArticles.find((a) => a.featured)?.date || ""
                      )}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {filteredArticles.find((a) => a.featured)?.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">
                    {filteredArticles.find((a) => a.featured)?.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {filteredArticles.find((a) => a.featured)?.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() =>
                        setSelectedArticle(
                          filteredArticles.find((a) => a.featured) || null
                        )
                      }
                      className="text-red-600 font-medium flex items-center gap-2 hover:text-red-800 group"
                    >
                      Read Full Story
                      <span className="group-hover:translate-x-1 transition-transform">
                        <FaArrowRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles
            .filter((article) => !article.featured)
            .map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                      {article.category === "match"
                        ? "Match"
                        : article.category === "transfer"
                        ? "Transfer"
                        : article.category === "league"
                        ? "League"
                        : article.category === "team"
                        ? "Team"
                        : "Interview"}
                    </span>
                    {article.tags?.slice(0, 1).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
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
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="text-red-600 font-medium flex items-center gap-2 hover:text-red-800 group"
                    >
                      Read
                      <span className="group-hover:translate-x-1 transition-transform">
                        <FaArrowRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Article Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100">
                    <FaBookmark className="text-gray-600" />
                  </button>
                  <button className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100">
                    <FaShare className="text-gray-600" />
                  </button>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                  >
                    <FaTimes className="text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4 flex-wrap">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                    {selectedArticle.category === "match"
                      ? "Match Report"
                      : selectedArticle.category === "transfer"
                      ? "Transfer News"
                      : selectedArticle.category === "league"
                      ? "League News"
                      : selectedArticle.category === "team"
                      ? "Team News"
                      : "Exclusive Interview"}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <FaCalendarAlt /> {formatDate(selectedArticle.date)}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {selectedArticle.readTime}
                  </span>
                  {selectedArticle.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  {selectedArticle.title}
                </h2>
              
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
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

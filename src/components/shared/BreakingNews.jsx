import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const newsArray = [
    {
      id: 1,
      title: "AI is transforming the tech industry",
    },
    {
      id: 2,
      title: "Global economy shows signs of recovery",
    },
    {
      id: 3,
      title: "New smartphone launched with advanced features",
    },
    {
      id: 4,
      title: "Sports championship final ends dramatically",
    },
  ];

  return (
    <div className="container mx-auto py-2">
      <div className="flex items-center gap-3 bg-[#F3F3F3] px-5 py-2 rounded-lg">
        <button className="btn bg-red-400 px-5 py-2 rounded-lg text-white ">
          Latest News
        </button>
        <Marquee pauseOnHover={true} speed={100} >
          {newsArray.map((news) => (
            <span key={news.id} className="text-sm font-medium">
              {news.title}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;

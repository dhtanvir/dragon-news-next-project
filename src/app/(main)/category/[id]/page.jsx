import LeftSideBarPage from "@/components/homePage/news/LeftSideBar";
import NewsCard from "@/components/homePage/news/NewsCard";
import RightSideBarPage from "@/components/homePage/news/RightSideBar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import React from "react";


export const metadata = {
  title: "Dragon News || Category Details",
  description: "Welcome to our category details page",
};






const CategoryDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id, "paramsRes");

  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="container mx-auto py-10 ">
      <p>category : {id}</p>

      <div className="grid grid-cols-12  justify-between gap-3">
        {/* Left Sidebar */}
        <div className="col-span-3 text-center ">
          <LeftSideBarPage categories={categories} active_Id={id} />
        </div>
        {/* Main Content */}
        <div className="col-span-7 ">
          <h2 className="text-lg font-bold mb-4">News By Category </h2>
          <div className="flex flex-col gap-5">
            {news.length > 0 ? (
              news.map((n) => (
                <NewsCard key={n._id} news={n} />
              ))
            ) : (
              <p className="text-2xl font-bold text-center py-10">No news available.</p>
            )}
          </div>
        </div>
        {/* Right Sidebar */}
        <div className="col-span-2 ">
          <RightSideBarPage />
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailsPage;

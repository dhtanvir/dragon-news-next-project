import Link from "next/link";
import React from "react";

const LeftSideBarPage = ({ categories, active_Id }) => {
  const { news_category } = categories;
  return (
    <div>
      <h6 className="text-lg font-bold"> All Categories</h6>

      <ul className="space-y-2 mt-3">
        {news_category?.map((category) => (
          <li
            key={category.category_id}
            className={`${active_Id === category.category_id && "bg-gray-700 text-white"} rounded-lg  font-bold text-center text-md  `}
          >
            <Link href={`/category/${category.category_id}`} 
            className="block hover:bg-gray-200 py-3  ">
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBarPage;

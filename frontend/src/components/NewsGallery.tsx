import React from "react";

const newsData = [
  { title: "News 1", description: "Description 1" },
  { title: "News 2", description: "Description 2" },
  { title: "News 3", description: "Description 3" },
  // Add more news items as needed
];

const NewsGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {newsData.map((news, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-2">{news.title}</h2>
          <p>{news.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsGallery;

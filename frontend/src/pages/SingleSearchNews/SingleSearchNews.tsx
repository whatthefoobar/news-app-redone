import React from "react";
import { useParams } from "react-router-dom";

const SingleSearchNews = () => {
  const { newsId: id } = useParams();
  console.log(id);

  return <div>SingleSearchNews</div>;
};

export default SingleSearchNews;

import { ICategoryArticle } from "./../types/api";
import { ICategoryArticles } from "../types/api";

export const findNewsObjectByTitle = (
  data: ICategoryArticles,
  title: string
) => {
  return data.topStories.find((item: ICategoryArticle) => item.title === title);
};

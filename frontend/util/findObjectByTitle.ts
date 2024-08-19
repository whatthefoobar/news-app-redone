import { ICategoryArticle, ISingleArticleSearch } from "./../types/api";
import { ICategoryArticles } from "../types/api";

export const findNewsObjectByTitle = (
  data: ICategoryArticles,
  title: string
) => {
  return data.topStories.find((item: ICategoryArticle) => item.title === title);
};

export const findSearchNewsObjectByTitle = (
  data: ISingleArticleSearch[],
  title: string
) => {
  return data.find(
    (item: ISingleArticleSearch) => item.headline.main === title
  );
};

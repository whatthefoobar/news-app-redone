import { ICategoryArticle, ISingleArticleSearch } from "./../types/api";
import { ICategoryArticles } from "../types/api";

export const replaceHyphensWithSpaces = (input: string): string => {
  return input.replace(/-/g, " ");
};

export const removeQuestionMark = (input: string): string => {
  return input.replace(/\?/g, "");
};

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

export const normalizeAndCleanHeadlines = (
  data: ISingleArticleSearch[]
): ISingleArticleSearch[] => {
  return data.map((item) => ({
    ...item,
    headline: {
      ...item.headline,
      main: item.headline.main
        .replace(/’/g, "'") // Normalize apostrophes
        .replace(/\?/g, ""), // Remove question marks
    },
  }));
};

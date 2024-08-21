import { ICategoryArticle, ISingleArticleSearch } from "./../types/api";

export const replaceHyphensWithSpaces = (input: string): string => {
  return input.replace(/-/g, " ");
};

export const removeQuestionMark = (input: string): string => {
  return input.replace(/\?/g, "");
};

export const findNewsObjectByTitle = (
  data: ICategoryArticle[],
  title: string
) => {
  return data.find((item: ICategoryArticle) => item.title === title);
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

export const normalizeAndCleanTitlesCategoryNews = (
  data: ICategoryArticle[]
): ICategoryArticle[] => {
  return data.map((item) => ({
    ...item,
    title: item.title
      .replace(/’/g, "'") // Normalize apostrophes
      .replace(/\?/g, ""), // Remove question marks
  }));
};

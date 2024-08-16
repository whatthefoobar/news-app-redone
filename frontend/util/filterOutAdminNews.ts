import { ICategoryArticle } from "./../types/api";

const filterOutAdminSection = (
  items: ICategoryArticle[]
): ICategoryArticle[] => {
  return items.filter((item) => item.section !== "admin");
};

export default filterOutAdminSection;

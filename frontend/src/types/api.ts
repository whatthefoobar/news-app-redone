// popular news route

export interface IPopularNews {
  uri: string;
  url: string;
  id: number;
  asset_id: number;
  source: string;
  published_date: string;
  updated: string;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  media: {
    type: string;
    subtype: string;
    caption: string;
    copyright: string;
    approved_for_syndication: number;
    "media-metadata": {
      url: string;
      format: string;
      height: number;
      width: number;
    }[];
  }[];
  eta_id: number;
}

export interface IFilteredPopularNews {
  id: number | string;
  byline: string;
  title: string;
  abstract: string;
  url: string;
  imageSrc: string;
  published_date: string;
}

// article search route
export interface IArticleSearchResponse {
  // Define your response type for article search
  status: string;
  copyright: string;
  response: {
    docs: {
      abstract: string;
      web_url: string;
      snippet: string;
      lead_paragraph: string;
      source: string;
      multimedia: {
        rank: number;
        subtype: string;
        caption: null | string;
        credit: null | string;
        type: string;
        url: string;
        height: number;
        width: number;
        legacy: {
          [key: string]: string | number;
        };
        subType: string;
        crop_name: string;
      }[];
      headline: {
        main: string;
        kicker: null | string;
        content_kicker: null | string;
        print_headline: null | string;
        name: null | string;
        seo: null | string;
        sub: null | string;
      };
      keywords: {
        name: string;
        value: string;
        rank: number;
        major: string;
      }[];
      pub_date: string;
      document_type: string;
      news_desk: string;
      section_name: string;
      subsection_name: string;
      byline: {
        original: string;
        person: {
          firstname: string;
          middlename: null | string;
          lastname: string;
          qualifier: null | string;
          title: null | string;
          role: string;
          organization: string;
          rank: number;
        }[];
        organization: null | string;
      };
      type_of_material: string;
      _id: string;
      word_count: number;
      uri: string;
      print_section?: string;
      print_page?: string;
    }[];
    meta: {
      hits: number;
      offset: number;
      time: number;
    };
  };
}

// export interface ICategoryArticlesResponse {
//   status: string;
//   copyright: string;
//   section: string;
//   last_updated: string;
//   num_results: number;
//   results: {
//     section: string;
//     subsection: string;
//     title: string;
//     abstract: string;
//     url: string | null;
//     uri: string;
//     byline: string;
//     item_type: string;
//     updated_date: string;
//     created_date: string;
//     published_date: string;
//     material_type_facet: string;
//     kicker: string;
//     des_facet: string[];
//     org_facet: string[];
//     per_facet: string[];
//     geo_facet: string[];
//     multimedia:
//       | {
//           url: string;
//           format: string;
//           height: number;
//           width: number;
//           type: string;
//           subtype: string;
//           caption: string;
//           copyright: string;
//         }[]
//       | null;
//     short_url: string;
//   }[];
// }

interface IMultimedia {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
}

export interface ICategoryArticles {
  topStories: ICategoryArticle[];
}

export interface ICategoryArticle {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  uri: string;
  byline: string;
  item_type: string;
  updated_date: string;
  created_date: string;
  published_date: string;
  material_type_facet: string;
  kicker: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  multimedia: IMultimedia[];
  short_url: string;
}

export interface IFilteredCategoryArticle {
  title: string;
  abstract: string;
  byline: string;
  imgUrl: string;
  published_date: string;
}

export interface IApiResponseObject {
  uri: string;
  url: string;
  id: number | string;
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
  media: Media[];
  eta_id: number;
}

//media api response
export interface IApiResponseObject2 {
  author: string;
  title: string;
  description: string;
  url: string;
  source: string;
  image: string;
  category: string;
  language: string;
  country: string;
  published_at: string;
}

export interface Media {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  "media-metadata": MediaMetadata[];
}

export interface MediaMetadata {
  url: string;
  format: string;
  height: number;
  width: number;
}

export interface IPopularNews {
  id: number | string;
  byline: string;
  title: string;
  abstract: string;
  url: string;
  imageSrc: string;
  imageDirection: "left" | "right";
}

export const DummyPopularNews = [
  {
    id: "",
    byline: "",
    title: "",
    abstract: "",
    url: "",
    imageSrc: "",
    imageDirection: "left",
  },
];

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

export interface Component {
  render: () => void;
  renderTemplate: () => void;
}

export interface BaseResponseItem {
  status: string;
  parsedJson: any | [];
}

export interface AudienceContext {
  userTargets: BaseResponseItem;
  mainDescription: null;
  currentAd: 1;
}

export interface AudienceItem {
  id: number;
  name: string;
  interests: string;
  keys: string;
  tags: string;
  min_age: string;
  max_age: string;
  image_link: string;
  budget: string;
}

export interface CompanyContext {
  userAds: BaseResponseItem;
  mainDescription: null | string;
  currentAd: number;
  uniqueLink: string;
}

export interface AudienceCreateContext {
  selectedItems: string[];
}

export interface AudienceSelectedContext {
  selectedItems: string[];
}

export interface CompanyDeleteRequestData {
  ad_id: number;
}

export interface CompanyItem {
  id: number;
  name: string;
  budget: number;
  audience: string;
  website_link: string;
  description: string;
  image_link: string;
  price: number;
}

export interface ProfileAdItem {
  id: number;
  name: string;
  description: string;
  price: number;
  website_link: string;
  earnings_value: number;
  views_value: number;
  clicks_value: number;
  audience: string;
  html: string;
  js: string;
}

export interface EditPageContext {
  ad: CompanyItem;
  Audience: AudienceItem[];
}

export interface User {
  f_name: string;
  l_name: string;
  s_name: string;
  avatar: string;
  login: string;
  password: string;
}

export interface Balance {
  total_balance: number;
  reserved_balance: number;
}

export interface ProfileContext {
  Ads: AudienceItem[];
  User: User;
  Balance: Balance;
  mainDescription: string | null;
}

export interface ProfileAdContext {
  userAds: BaseResponseItem;
  mainDescription: null;
  currentAd: 1;
  uniqueLink: String;
}

export interface ProfilePadContext {
  userPads: BaseResponseItem;
  mainDescription: null;
  currentAd: 1;
  uniqueLink: String;
}

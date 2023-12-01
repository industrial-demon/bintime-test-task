import axios from "axios";
import qs from "qs";
import { Article } from "../entity/article";

const API_KEY = "fabc9f50f03441f29b3065bb721590b1";
const URL = "https://newsapi.org/v2/top-headlines";

type Response<T> = {
  status: string;
  articles: T[];
  totalResults: number;
};

export const getArticles = async (params: {
  q: string;
  country: string;
  category: string;
  page: number;
  pageSize: number;
}) => {
  const filters = qs.stringify(params);

  const response = await axios.get<Response<Article>>(
    `${URL}?${filters}&apiKey=${API_KEY}`
  );
  return response?.data;
};

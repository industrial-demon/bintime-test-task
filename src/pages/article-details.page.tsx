import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { IconButton } from "@mui/material";

import { Layout } from "../features/layout";
import { useStore } from "../hooks/useStore";
import ArrowLeftIcon from "../assets/arrow-left.svg?react";
import { formatDate } from "../utils";

export const ArticleDitails = () => {
  const store = useStore();
  return (
    <Layout>
      <article className="w-full px-[150px]">
        <section className="flex items-center gap-3 py-4">
          <IconButton edge="start" sx={{
            padding: 0
          }}>
            <Link to="/">
              <ArrowLeftIcon />
            </Link>
          </IconButton>

          <h2 className="text-[22px] font-medium">
            {store.selectedArticle?.title}
          </h2>
        </section>

        <section className="flex justify-between text-base text-black-2 font-semibold py-5">
          <span>Source: {store.selectedArticle?.source.name}</span>

          <span>
            Publication date:
            {store.selectedArticle &&
              ` ${formatDate(store.selectedArticle?.publishedAt)}`}
          </span>
        </section>

        <section>
          <h3 className="font-bold mb-4">Description</h3>
          <p>{store.selectedArticle?.description}</p>
        </section>
      </article>
      <section className="my-8 w-full">
        <img
          src={store.selectedArticle?.urlToImage}
          className="w-full"
          alt="img"
        />
      </section>

      <article className="w-full px-[150px]">
        <section>
          <h3 className="font-bold mb-4">Content</h3>
          <p>{store.selectedArticle?.content}</p>
        </section>

        <section className="text-base text-black-2 font-semibold mt-4">
          Authors: {store.selectedArticle?.author}
        </section>
      </article>
    </Layout>
  );
};

export const ArticleDitailsPage = observer(ArticleDitails);

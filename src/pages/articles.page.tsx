import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useDebounce } from "use-debounce";
import { useQuery } from "@tanstack/react-query";

import { getArticles } from "../api";
import { useStore } from "../hooks/useStore";

import { EnhancedToolbar } from "../features/enhanced-toolbar";
import { Layout } from "../features/layout";
import { ArticlesTable } from "../features/articles-table";
import { Filters } from "../features/filters";
import { Pagination } from "../features/pagination";


const Articles = () => {
  const store = useStore();
  const navigate = useNavigate();
  const [value] = useDebounce(store.q, 1000);

  const query = useQuery({
    queryKey: [
      "articles",
      "list",
      value,
      store.country,
      store.category,
      store.pagination.page,
      store.pagination.pageSize,
    ],
    queryFn: () => {
      return getArticles({
        q: value,
        country: store.country,
        category: store.category,
        page: store.pagination.page + 1,
        pageSize: store.pagination.pageSize,
      });
    },
  });

  return (
    <Layout>
      <div className="px-[150px] w-full">
        <EnhancedToolbar />
        {store.showFilters && <Filters />}
        <ArticlesTable
          rows={query.data?.articles}
          onRowClick={(row) => {
            store.selectArticle(row);
            navigate(`/${row.id}`);
          }}
          pagination={
            query.data && <Pagination count={query.data.totalResults} />
          }
        />
      </div>
    </Layout>
  );
};

export const ArticlesPage = observer(Articles);

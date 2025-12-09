// import { useQuery } from "@tanstack/react-query";

// import { getCharacter } from "./services/character";
// import { useState } from "react";

// function App() {
//   const [counter, setCounter] = useState(0);

//   const { data, error, isLoading } = useQuery({
//     queryKey: ["character", counter],
//     queryFn: () => getCharacter(counter),
//     staleTime: 60 * 1000, // 1 minutes
//     enabled: counter > 0
//   });

//   return (
//     <>
//       <h1>React Query</h1>
//       <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>
//         -
//       </button>
//       <span>{counter}</span>
//       <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
//         +
//       </button>
//       {isLoading && <p>Loading</p>}
//       {error && <p>Something went wrong</p>}
//       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//     </>
//   );
// }

// export default App;

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";

import SearchForm from "./components/SearchForm/SearchForm";
import ArticleList from "./components/ArticleList/ArticleList";

import { fetchArticles } from "./services/article";
import { useState } from "react";

import css from "./App.module.css";

function App() {
  const [search, setSearch] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  const { data, error, isLoading } = useQuery({
    queryKey: ["articles", search, page],
    queryFn: () => fetchArticles(search as string, page),
    enabled: search !== null,
    placeholderData: keepPreviousData,
  });

  const handleSearch = (topic: string) => {
    setSearch(topic);
    setPage(0);
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(selected);
  };

  return (
    <>
      <h1>React Query</h1>

      <SearchForm onSearch={handleSearch} />
      {isLoading && <strong>Loading...</strong>}
      {error && <p>Oops. Something went wrong. Please try again.</p>}
      {data && (
        <>
          <ArticleList items={data.hits} />
          <ReactPaginate
            nextLabel=">"
            previousLabel="<"
            forcePage={page}
            pageCount={data.nbPages}
            containerClassName={css.pagination}
            activeClassName={css.active}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
}

export default App;

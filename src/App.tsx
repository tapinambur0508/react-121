// import OrderForm from "./OrderForm/OrderForm";
import { useState } from "react";

import axios from "axios";

import SearchForm from "./SearchForm/SearchForm";
import ArticleList from "./ArticleList/ArticleList";

import type { Article } from "./types/article";

function App() {
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const form = event.currentTarget;
  //   const formData = new FormData(form);

  //   const username = formData.get("username") as string;
  //   const password = formData.get("password") as string;

  //   console.log({username, password});

  //   form.reset();
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <input type="text" name="username" />
  //     </div>
  //     <div>
  //       <input type="password" name="password" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // );

  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSearch = async (topic: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setArticles([]);
      const { data } = await axios.get<{ hits: Article[] }>(
        `http://hn.algolia.com/api/v1/search`,
        {
          params: {
            query: topic,
          },
        },
      );
      console.log(data.hits);
      setArticles(data.hits);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* <OrderForm />
      <OrderForm />
      <OrderForm /> */}

      <SearchForm onSearch={handleSearch} />
      {isLoading && <strong>Loading...</strong>}
      {isError && <p>Oops. Something went wrong. Please try again.</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}

export default App;

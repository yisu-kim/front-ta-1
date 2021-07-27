/* eslint-disable react/prop-types */

import React, { useEffect, useState } from "react";

import InfiniteScrollList from "./components/InfiniteScrollList";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

function App({ hayanmind }) {
  const [page, setPage] = useState(1);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    hayanmind
      .comments(page)
      .then((comments) => setComments((prev) => [...prev, ...comments]));
  }, [hayanmind, page]);

  const handlePage = () => {
    setPage(page + 1);
  };

  return (
    <div style={styles.container}>
      <button onClick={handlePage}>호출 테스트 page: {page}</button>
      <InfiniteScrollList comments={comments} />
    </div>
  );
}

export default App;

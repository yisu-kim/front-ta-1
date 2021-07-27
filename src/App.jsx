/* eslint-disable react/prop-types */

import React, { useEffect, useRef, useState } from "react";
import InfiniteScrollList from "./components/infiniteScrollList";

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
  const [loading, setLoading] = useState(false);
  const pageEnd = useRef();

  useEffect(() => {
    hayanmind.comments(page).then((comments) => {
      setComments((prev) => [...prev, ...comments]);
      setLoading(true);
    });
  }, [hayanmind, page]);

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setPage((page) => page + 1);
          }
        },
        { threshold: 1 }
      );
      observer.observe(pageEnd.current);
    }
  }, [loading]);

  return (
    <div style={styles.container}>
      <InfiniteScrollList comments={comments} />
      <div ref={pageEnd}></div>
    </div>
  );
}

export default App;

import React, { useEffect, useRef, useState } from "react";
import InfiniteScrollList from "./components/infiniteScrollList";
import styled from "styled-components";
import PropTypes from "prop-types";
import HayanMind from "./service/hayanmind";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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
    <Container>
      <InfiniteScrollList comments={comments} />
      <div ref={pageEnd}></div>
    </Container>
  );
}

export default App;

App.propTypes = {
  hayanmind: PropTypes.instanceOf(HayanMind),
};

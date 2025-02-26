import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
// import QuotesContext from "../store/quotes-context";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
const Quotes = (props) => {
  // const context = useContext(QuotesContext);
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }
  return (
    <section>
      <h1>QuoteList</h1>
      <QuoteList quotes={loadedQuotes} />
    </section>
  );
};
export default Quotes;

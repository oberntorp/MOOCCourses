import { useContext, useEffect } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import HighligtedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import QuotesContext from "../store/quotes-context";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const context = useContext(QuotesContext);
  const params = useParams();
  const quote = context.quotesList.find((q) => q.id === params.quoteId);
  const match = useRouteMatch();
  const { quoteId } = params;
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }
  if (!loadedQuote) {
    return <p>No quote found!</p>;
  }
  return (
    <section>
      <HighligtedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            View comments
          </Link>
        </div>
      </Route>
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;

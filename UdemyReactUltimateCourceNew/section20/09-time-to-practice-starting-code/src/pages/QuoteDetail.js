import { useContext } from "react";
import { Route, useParams } from "react-router";
import HighligtedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import QuotesContext from "../store/quotes-context";

const QuoteDetail = () => {
  const context = useContext(QuotesContext);
  const params = useParams();
  const quote = context.quotesList.find((q) => q.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }
  return (
    <section>
      <HighligtedQuote text={quote.text} author={quote.author} />
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;

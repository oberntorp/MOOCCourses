import { useContext } from "react";
import QuoteList from "../components/quotes/QuoteList";
import QuotesContext from "../store/quotes-context";
const Quotes = (props) => {
  const context = useContext(QuotesContext);
  console.log(context.quotesList);
  return (
    <section>
      <h1>QuoteList</h1>
      <QuoteList quotes={context.quotesList} />
    </section>
  );
};
export default Quotes;

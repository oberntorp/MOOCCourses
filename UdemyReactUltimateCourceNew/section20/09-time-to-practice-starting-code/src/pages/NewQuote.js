import { useContext } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import QuotesContext from "../store/quotes-context";
const NewQuote = (props) => {
  const context = useContext(QuotesContext);
  console.log(context);
  return <QuoteForm onAddQuote={context.onAddQuote} />;
};

export default NewQuote;

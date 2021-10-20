import { useContext, useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import QuotesContext from "../store/quotes-context";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import { useHistory } from "react-router-dom";

const NewQuote = (props) => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);
  const context = useContext(QuotesContext);

  useEffect(() => {
    if (status === "completed") {
      history.replace("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quote) => {
    context.onAddQuote(quote);
    sendRequest(quote);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;

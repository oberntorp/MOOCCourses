import React, { useState } from "react";

const initialContext = {
  quotesList: [],
  onAddQuote: () => {},
};
const QuotesContext = React.createContext(initialContext);

export const QuotesContextProvider = (props) => {
  const [quotes, setQuotes] = useState([
    {
      id: `q${Math.random()}`,
      author: "Oskar Berntorp",
      text: "My Quote",
    },
  ]);
  const addQuoteHandler = (quote) => {
    setQuotes((prevState) => {
      return prevState.push(quote);
    });
  };
  return (
    <QuotesContext.Provider
      value={{ quotesList: quotes, onAddQuote: addQuoteHandler }}
    >
      {props.children}
    </QuotesContext.Provider>
  );
};

export default QuotesContext;

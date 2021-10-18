import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QuotesContextProvider } from "./store/quotes-context";

ReactDOM.render(
  <BrowserRouter>
    <QuotesContextProvider>
      <App />
    </QuotesContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

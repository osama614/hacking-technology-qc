import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Spinner from "./shared/components/Spinner";
import "bootstrap-v4-rtl/dist/css/bootstrap.css";
import "./index.css";

const LazyApp = lazy(() => import("./App"));

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <LazyApp />
      </BrowserRouter>
    </Suspense>
  </Provider>,
  document.getElementById("root")
);

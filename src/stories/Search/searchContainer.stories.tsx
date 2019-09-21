import React from "react";

import { storiesOf } from "@storybook/react";
import {store} from "../../redux/store";
import {Provider} from "react-redux";

import SearchContainer from "../../containers/search";


storiesOf("Search", module)
  .add("Sample", () => (
      <Provider store={store}>
      <SearchContainer/>
      </Provider>
  ));


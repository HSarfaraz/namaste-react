import { Provider } from "react-redux";
import Body from "../Body";
import { render, waitFor, fireEvent } from "@testing-library/react";
import store from "../../utils/CustomRedux/store";
import { StaticRouter } from "react-router-dom/server";
import {RESTAURANT_DATA} from "../../mocks/data";
import {toBeInTheDocument} from "@testing-library/jest-dom"

// We are creating dummy fetch, basically fetch return a promise
global.fetch() = jest.fn(()=>{
  return Promise.resolve({
    json: ()=> { return Promise.resolve(RESTAURANT_DATA)}
  })
});

test("Shimmer should load on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getByTestId("shimmer")
  expect(shimmer.children.length).toBe(10);//checking if shimmer is in the document
  console.log(shimmer);
});

test("Restaurant should load on Homepage", async() => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(()=>expect(Body.getByTestId("search-btn")))
  const resList = body.getByTestId("res-list")
  expect(resList.children.length).toBe(15);//checking if resList is in the document
  console.log(resList);
});


test("Search should load on Homepage", async() => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(()=>expect(Body.getByTestId("search-btn")))
  const input = body.getByTestId("search-input");

  fireEvent.change(input, {target:{value:"food"}})

  const searchBtn = body.getByTestId("search-btn")
  fireEvent.click(searchBtn);

  const resList = body.getByTestId("res-list")
  expect(resList.children.length).toBe(4);//checking if resList is in the document
  console.log(resList);
});

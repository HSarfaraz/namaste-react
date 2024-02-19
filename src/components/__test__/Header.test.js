/* import { render } from "@testing-library/react";
import Header from "../Header";
import Logo from "../../assets/img/logo.png";

import { Provider } from "react-redux";
import store from "../../utils/CustomRedux/store";
import { StaticRouter } from "react-router-dom/server";


test("Logo should load on rendering", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );


  console.log(header);
  const logo = header.getAllByTestId("logo");
  console.log(logo);
  //expect logo.src should dummyLogo.png for testing
  expect(logo[0].src).toBe("http://localhost://dummy.png");
});

test("Online status should be green on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //check if logo is loaded or not
  const onlineStatus = header.getByTestId("online-status");
  expect(onlineStatus.innerHTML).toBe("✅");
});

test("Cart should have 0 items on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //check if logo is loaded or not
  const onlineStatus = header.getByTestId("cart");
  expect(onlineStatus.innerHTML).toBe("cart- 0 items");
});
 */

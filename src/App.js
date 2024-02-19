import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/AboutFunction";
import AboutClass from "./components/AboutClass";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/CustomContext/UserContext";
// import Instamart from "./components/Instamart"; //older way, without lazy loading
import { Provider } from "react-redux";
import store from "./utils/CustomRedux/store";
import Cart from "./components/Cart";

const Instamart = lazy(() => import("./components/Instamart"));
//upon on demand loading -> upon render -> suspense the loading

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Sarfaraz Hussain",
    email: "dummy@gmail.com",
  });
  return (
    // Passing store details in react component
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet /> {/* All the children will go into outlet */}
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutClass />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// RouterProvider router={appRouter}

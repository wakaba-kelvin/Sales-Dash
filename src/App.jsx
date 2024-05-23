import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BaseLayout } from "./components";
import { Dashboard, PageNotFound } from "./screens";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/theme";
import { GlobalStyles } from "./styles/global/GlobalStyles";
import Hero from "./components/Hero/Hero";
import SignupComponent from "./Pages/Schools/Schools";
import Invoices from "./components/Invoices/Invoices";
import DashboardScreen from "./screens/dashboard/DashboardScreen";


const routes = [
  

  {
    path: "/",
    element: <DashboardScreen/>,
    children: [
      {
        path: "/Schools",
        element: <SignupComponent/>,
      },
      {
        path: "/Invoices",
        element: <Invoices/>

      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  // {
  //   path: ""
  // }
];

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyles />
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}>
                {route.children &&
                  route.children.map((childRoute, childIndex) => (
                    <Route
                      key={childIndex}
                      path={childRoute.path}
                      element={childRoute.element}
                    />
                  ))}
              </Route>
            ))}
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import {
  About,
  Contact,
  Faq,
  Home,
  NotFound,
  Careers,
  CareerDetails,
  CareersError,
} from "./pages";
import { RootLayout, HelpLayout, CareersLayout } from "./layouts";
import { careersLoader } from "./pages/Careers";
import { careerDetailsLoader } from "./pages/CareerDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      {/* <Router>
        <header>
          <nav>
            <h1>KelebekRouter</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </main>
      </Router> */}

      <RouterProvider router={router} />
    </>
  );
}

export default App;

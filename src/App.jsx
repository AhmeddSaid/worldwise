import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";

// lazy load
const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

// bundle size before lazy load
// dist/assets/index-ab47afa3.css   30.11 kB | gzip:   5.05 kB
// dist/assets/index-de767b92.js   525.67 kB | gzip: 148.92 kB

// bundle size after lazy load
// dist/assets/Logo-515b84ce.css             0.03 kB | gzip:   0.05 kB
// dist/assets/Login-f39ef3ff.css            0.35 kB | gzip:   0.22 kB
// dist/assets/Product-cf1be470.css          0.47 kB | gzip:   0.27 kB
// dist/assets/PageNav-d3c5d403.css          0.51 kB | gzip:   0.28 kB
// dist/assets/Homepage-380f4eeb.css         0.51 kB | gzip:   0.30 kB
// dist/assets/AppLayout-ca75f5b3.css        1.91 kB | gzip:   0.70 kB
// dist/assets/index-7ab1f403.css           26.44 kB | gzip:   4.35 kB
// dist/assets/Product.module-02d70b80.js    0.06 kB | gzip:   0.07 kB
// dist/assets/PageNotFound-df627aca.js      0.15 kB | gzip:   0.15 kB
// dist/assets/Logo-3718589b.js              0.21 kB | gzip:   0.19 kB
// dist/assets/PageNav-641a539d.js           0.49 kB | gzip:   0.27 kB
// dist/assets/Pricing-b8bd6c58.js           0.65 kB | gzip:   0.41 kB
// dist/assets/Homepage-331ba140.js          0.67 kB | gzip:   0.41 kB
// dist/assets/Product-69627fcf.js           0.86 kB | gzip:   0.49 kB
// dist/assets/Login-950da67a.js             1.03 kB | gzip:   0.54 kB
// dist/assets/AppLayout-2b7c9a2f.js       157.17 kB | gzip:  46.23 kB
// dist/assets/index-2c2ac503.js           366.88 kB | gzip: 102.29 kB

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter basename="/worldwise/">
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                {/* Index Route : default child route */}
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                {/* Dynamic Routes With URL params */}
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;

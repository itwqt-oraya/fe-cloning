import "./styles/main.scss";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Routes, Route } from "react-router";
import { LoaderProvider } from "@context";
import About from "@pages/about";
import { PublicLayout } from "@components/Layout";

function App() {
  return (
    <LoaderProvider>
      <BrowserRouter>
        <RouteMap />
      </BrowserRouter>
    </LoaderProvider>
  );
}

function RouteMap() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<About />} />
      </Route>

      <Route path="*" element={<p>Not found.</p>} />
    </Routes>
  );
}

export default App;

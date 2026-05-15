import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import AppRouter from "./AppRouter.jsx";

const rootElement = document.getElementById("root");

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

// react-snap prerender sonrası hydration desteği
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}

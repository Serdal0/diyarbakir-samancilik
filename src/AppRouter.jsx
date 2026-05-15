import { Routes, Route } from "react-router-dom";
import App from "./App";
import CityPage from "./components/CityPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:slug" element={<CityPage />} />
    </Routes>
  );
}

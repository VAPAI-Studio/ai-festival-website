import { HashRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Submit } from "./pages/Submit";

import { ScrollRGB } from "./components/effects/ScrollRGB";

import { Rules } from "./pages/Rules";
import { FAQ } from "./pages/FAQ";

function App() {
  return (
    <HelmetProvider>
      <HashRouter>
        <ScrollRGB />
        <div className="flex min-h-screen flex-col overflow-x-hidden">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/submit" element={<Submit />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Analytics />
      </HashRouter>
    </HelmetProvider>
  );
}

export default App;

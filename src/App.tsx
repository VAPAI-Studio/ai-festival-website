import { HashRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Submit } from "./pages/Submit";

import { ScrollRGB } from "./components/effects/ScrollRGB";

import { Rules } from "./pages/Rules";

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
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </HelmetProvider>
  );
}

export default App;

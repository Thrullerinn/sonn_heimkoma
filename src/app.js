import React, {  Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhoAreWe from "./home/WhoAreWe.js";
import SonnHomePage from "./home/SonnHomePage.js";
import SonnHeimkomaBook from "./home/SonnHeimkomaBook.js";
import SonnBook from "./home/SonnBook.js";
import AuthorPage from "./home/AuthorPage.js"

const Sonn = lazy(() => import("./home/Sonn"));
const Contact = lazy(() => import("./pages/Contact"));
const NoMAtch = lazy(() => import("./pages/404"));

const App = () => {
  return (
    <Router>
        <Suspense fallback={<div />}>
            <Routes>
                <Route path="/" element={<SonnHomePage />} />
                <Route path="/home" element={<SonnHomePage />} />
                <Route path="/sonn" element={<Sonn />} />
                <Route path="/sonnheimkomabok" element={<SonnHeimkomaBook />} />
                <Route path="/sonnbok" element={<SonnBook />} />
                <Route path="/about-us" element={<WhoAreWe />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/order" element={<Contact />} />
                <Route path="/authorpage" element={<AuthorPage />} />
                <Route path="*" element={<NoMAtch />} />
            </Routes>
        </Suspense>
      </Router>
  )
}

export default App
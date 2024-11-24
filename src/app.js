import React, {  Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SonnHomePage from "./home/SonnHomePage.js";
import SonnHeimkomaBook from "./home/SonnHeimkomaBook.js";
import SonnBook from "./home/SonnBook.js";
import AuthorPage from "./home/AuthorPage.js"
import { HashRouter } from 'react-router-dom'

const Sonn = lazy(() => import("./home/Sonn"));
const Contact = lazy(() => import("./pages/Contact"));
const NoMAtch = lazy(() => import("./pages/404"));

const App = () => {
  return (
    <HashRouter>
        <Suspense fallback={<div />}>
            <Routes>
                <Route path="/" element={<SonnHomePage />} />
                <Route path="/home" element={<SonnHomePage />} />
                <Route path="/sonn" element={<Sonn />} />
                <Route path="/sonnheimkomabok" element={<SonnHeimkomaBook />} />
                <Route path="/sonnbok" element={<SonnBook />} />
                <Route path="/about-us" element={<AuthorPage />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/order" element={<Contact />} />
                <Route path="/authorpage" element={<AuthorPage />} />
                <Route path="*" element={<NoMAtch />} />
            </Routes>
        </Suspense>
      </HashRouter>
  )
}

export default App
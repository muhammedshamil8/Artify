// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router'
import { Home, IndividualResult, LeaderBoard } from './pages';
import Layout from '@/components/Layout';  // Import the Layout component
import '@/assets/styles/index.css';
import { motion, AnimatePresence } from "motion/react"
import { initAnalytics, trackPageView } from "./analytics";
import ReactGA from "react-ga4";

function App() {
  const measurementId = import.meta.env.VITE_MEASUREMENT_ID;
  ReactGA.initialize("G-96JBVH4P5N");

  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  // const location = window.location;


  // useEffect(() => {
  //   initAnalytics(); 
  // }, []);

  // useEffect(() => {
  //   console.log("Tracking page view for:", location);
  //   trackPageView(location.pathname + location.search); 
  // }, [location]);

  return (
    <Router>
      <Layout>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/LeaderBoard" element={<LeaderBoard />} />
            <Route path="/results" element={<IndividualResult />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
}

export default App;

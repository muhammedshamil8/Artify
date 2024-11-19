// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, IndividualResult, LeaderBoard } from './pages';
import Layout from '@/components/Layout';  // Import the Layout component
import '@/assets/styles/index.css';
import { motion, AnimatePresence } from "motion/react"

function App() {
  return (
    <Router>
      <Layout>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/LeaderBoard" element={<LeaderBoard />} />
            <Route path="/IndividualResult" element={<IndividualResult />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
}

export default App;

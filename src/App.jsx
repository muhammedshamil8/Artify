// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, IndividualResult, LeaderBoard } from './pages';
import Layout from '@/components/Layout';  // Import the Layout component
import '@/assets/styles/index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LeaderBoard" element={<LeaderBoard />} />
          <Route path="/IndividualResult" element={<IndividualResult />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

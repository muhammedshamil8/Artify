// src/analytics.js
import ReactGA from "react-ga4";

// Load Measurement ID from environment variables
const measurementId = import.meta.env.VITE_MEASUREMENT_ID;
// console.log("Measurement ID:", measurementId);
const initAnalytics = () => {
  if (!measurementId) {
    console.error("Measurement ID is not defined. Check your environment variables.");
    return;
  }
  ReactGA.initialize(measurementId); 
//   console.log("Google Analytics initialized with Measurement ID:", measurementId);
};

const trackPageView = (page) => {
  if (!measurementId) {
    console.warn("Cannot track page view; Measurement ID is not set.");
    return;
  }
  ReactGA.send({ hitType: "pageview", page });
  console.log("Tracked page view:", page);
};

export { initAnalytics, trackPageView };

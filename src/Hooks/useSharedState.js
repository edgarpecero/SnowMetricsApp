import { useState, useEffect } from 'react';

// Global shared state and listeners list
let sharedState = null; // Initial shared state
let listeners = []; // List of listeners to notify changes

export const useSharedState = () => {
  // Local state to trigger re-renders in the component
  const [state, setState] = useState(sharedState);

  // Function to update the shared state and notify all listeners
  const setSharedState = (newState) => {
    sharedState = newState; // Update the global shared state
    listeners.forEach((listener) => listener(sharedState)); // Notify all registered listeners
  };

  useEffect(() => {
    // Register a listener for this component
    const listener = (newState) => setState(newState);
    listeners.push(listener);

    // Cleanup: Remove the listener when the component unmounts
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  // Return the current shared state and the function to update it
  return [state, setSharedState];
};

import React, { useState } from 'react';

export const useFetching = (callback) => {
    
  const [isLoading, setIsPostLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async (...args) => {
    try {
      setIsPostLoading(true);
      await callback(...args);
    } catch(e) {
      setError(e.message)
    } finally {
      setIsPostLoading(false);
    }
  }

  return [fetching, isLoading, error]
}

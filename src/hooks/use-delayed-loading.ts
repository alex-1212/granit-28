
import { useState, useEffect } from 'react';

/**
 * A hook that delays the "loaded" state for a minimum amount of time
 * to prevent a flickering effect when content loads too quickly
 * 
 * @param isInitiallyLoading - The initial loading state
 * @param minimumLoadingTimeMs - The minimum time in milliseconds to show the loading state
 * @returns The possibly delayed loading state
 */
export function useDelayedLoading(
  isInitiallyLoading: boolean, 
  minimumLoadingTimeMs: number = 800
): boolean {
  const [isLoading, setIsLoading] = useState(isInitiallyLoading);
  
  useEffect(() => {
    let timeoutId: number | null = null;
    
    if (isInitiallyLoading) {
      // If loading starts, immediately show loading state
      setIsLoading(true);
    } else {
      // If loading ends, wait for minimum time before hiding loader
      timeoutId = window.setTimeout(() => {
        setIsLoading(false);
      }, minimumLoadingTimeMs);
    }
    
    return () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [isInitiallyLoading, minimumLoadingTimeMs]);
  
  return isLoading;
}

"use client"
import { useEffect, useState } from 'react';
import type { FaqItem } from '@/lib/types/faq';

export function useFaqData() {
  const [faqItems, setFaqItems] = useState<FaqItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const response = await fetch('/api/accordion/data');
        
        if (!response.ok) {
          throw new Error('Failed to fetch FAQ data');
        }
        
        const data = await response.json();
        setFaqItems(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching FAQ data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFaqData();
  }, []);

  return { faqItems, isLoading, error };
}
'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('fda5c42d-c119-4366-851a-964a9b768d9c');
  }, []);

  return null;
};

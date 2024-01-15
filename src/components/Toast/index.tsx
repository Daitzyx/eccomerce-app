import { useState, useEffect, ReactNode } from 'react';

import { ToastContainer } from './styles';

interface ToastProps {
  children: ReactNode;
}

export const Toast = ({ children }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return isVisible ? (
    <ToastContainer>
      <p>{children}</p>
    </ToastContainer>
  ) : null;
};

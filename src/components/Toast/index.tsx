import { useState, useEffect } from 'react';

import { ToastContainer } from './styles';

interface ToastProps {
  message: string;
}

export const Toast = ({ message }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return isVisible ? <ToastContainer>{message}</ToastContainer> : null;
};

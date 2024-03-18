import { useState } from 'react';

interface OpenProps {
  initialValue?: boolean;
}

export const useOpen = ({ initialValue = false }: OpenProps) => {
  const [isOpen, setIsOpen] = useState(initialValue);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return { isOpen, open, close };
};

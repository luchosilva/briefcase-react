import { useState } from 'react';

interface DisableProps {
  initialValue?: boolean;
}

export const useDisable = ({ initialValue = true }: DisableProps) => {
  const [isDisable, setIsDisable] = useState(initialValue);
  const disable = () => setIsDisable(true);
  const enable = () => setIsDisable(false);
  return { isDisable, disable, enable };
};

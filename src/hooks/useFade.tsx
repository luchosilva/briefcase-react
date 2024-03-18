import { useMemo } from 'react';

export const useFade = (initial: boolean) => {
  const show = useMemo(() => initial, []);
  let fromProps = {
    style: { animation: `${show ? 'fadeIn' : 'fadeOut'} 1s` },
    onAnimationEnd: () => !show,
  };

  let toProps = {
    style: { animation: `${show ? 'fadeOut' : 'fadeIn'} 1s` },
    onAnimationEnd: () => show,
  };

  return [fromProps, toProps];
};

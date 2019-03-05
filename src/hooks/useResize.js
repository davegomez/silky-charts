import { useEffect, useRef } from 'react';
import useDebounce from './useDebounce';
import { getSize } from '../utils';

export default ({
  aspectRatio,
  graphHeight,
  graphWidth,
  margin,
  responsive,
  setSize,
  svgRef,
}) => {
  const handleSize = () => {
    const offsetWidth = svgRef.current.parentElement.offsetWidth;
    setSize({
      ...getSize(graphWidth || offsetWidth, graphHeight, margin, aspectRatio),
      isSizeSet: true,
    });
  };

  const handleResize = () => {
    const offsetWidth = svgRef.current.parentElement.offsetWidth;
    setSize({
      ...getSize(offsetWidth, undefined, margin, aspectRatio),
      isSizeSet: true,
    });
  };

  const refSize = useRef(handleSize);
  const handleResizeDebounced = useDebounce(handleResize, 250, [handleResize]);

  useEffect(() => refSize.current(), [refSize]);

  useEffect(() => {
    responsive && window.addEventListener('resize', handleResizeDebounced);

    return () => {
      responsive && window.removeEventListener('resize', handleResizeDebounced);
    };
  }, [handleResizeDebounced, responsive]);
};

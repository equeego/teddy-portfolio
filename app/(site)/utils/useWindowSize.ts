import { useMemo, useEffect, useState } from "react";

interface ISize {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}
export default function useWindowSize(): ISize {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const isMobile = useMemo(() => width < 768, [width]);
  const isTablet = useMemo(() => width <= 1024, [width]);
  const isDesktop = useMemo(() => width > 1200, [width]);

  useEffect(() => {
    const changeWindowSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    changeWindowSize();

    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return { width, height, isMobile, isTablet, isDesktop };
}

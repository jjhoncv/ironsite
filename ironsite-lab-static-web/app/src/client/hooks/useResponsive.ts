import { useState, useEffect } from "react";

const useResponsive = (maxWidthMobile = 980) => {
  const [isResponsive, setIsResponsive] = useState(
    window.innerWidth <= maxWidthMobile
  );

  const checkWindowSize = () => {
    setIsResponsive(window.innerWidth <= maxWidthMobile);
  };

  useEffect(() => {
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  return isResponsive;
};

export default useResponsive;

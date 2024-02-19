import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  const handleOffline = () => {
    setIsOnline(true);
  };

  const handleOnline = () => {
    setIsOnline(false);
  };

  useEffect(() => {
    //logic to keep it online or offline based on my availability
    window.addEventListener("offline", handleOnline);
    window.addEventListener("online", handleOffline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return isOnline;
};

export default useOnline;

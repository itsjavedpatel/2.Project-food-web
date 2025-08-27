import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    console.log("Inside useffect of useOnlineStatus");
    window.addEventListener("offline", () => {
      console.log("Inside offline eventlistner of useOnlineStatus");
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      console.log("Inside online eventlistner of useOnlineStatus");
      setOnlineStatus(true);
    });
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;

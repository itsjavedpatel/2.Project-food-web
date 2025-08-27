import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

// This is our custom hook
const useRestrauntMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fecthData();
  }, []);
  const fecthData = async () => {
    const response = await fetch(MENU_API + resId);
    const data = await response.json();
    setResInfo(data);
  };

  return resInfo;
};

export default useRestrauntMenu;

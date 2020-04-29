import { useRef, useEffect } from "react";

const useFocus = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return inputRef ;
  
};

export default useFocus;

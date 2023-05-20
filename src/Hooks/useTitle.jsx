import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Auto Playland | ${title}`;
  }, [title]);
};

export default useTitle;

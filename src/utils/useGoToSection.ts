import { useEffect, useState } from "react";

export default function useGotoSection(id: string) {
  const [top, setTop] = useState(0);
  useEffect(() => {
    const elmnt = document.getElementById(id)?.offsetTop;
    setTop(typeof elmnt == "number" ? elmnt : 0);
  }, [id]);

  return [top];
}

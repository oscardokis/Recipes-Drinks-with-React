import { useState, useEffect } from "react";
export function useData ({url}) {
    const [data, setData] = useState({drinks:[]});
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        }
        fetchData();
    }, [url]);
    return { data }
  }
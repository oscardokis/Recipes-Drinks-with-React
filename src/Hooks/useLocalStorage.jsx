import { useEffect, useState } from "react";

export function useLocalStorage (key, initialValue) {
    const loadFromLocalStorage = () => {
        const storedData = localStorage.getItem(key);
        return storedData ? JSON.parse(storedData): initialValue;
    }
    const [value, setValue] = useState(loadFromLocalStorage);
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    
    return [value, setValue]

}
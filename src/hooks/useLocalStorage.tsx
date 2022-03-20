import { Dispatch, SetStateAction, useState } from "react";

export default function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T)
): readonly [T, Dispatch<SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const actualInitialValue =
      initialValue instanceof Function ? initialValue() : initialValue;
    if (typeof window === "undefined") {
      return actualInitialValue;
    }
    try {
      const itemAlreadyInLocalStorage = window.localStorage.getItem(key);
      if (itemAlreadyInLocalStorage) {
        return JSON.parse(itemAlreadyInLocalStorage);
      }
      window.localStorage.setItem(key, JSON.stringify(actualInitialValue));
      return actualInitialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((_val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

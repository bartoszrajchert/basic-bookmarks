const debounce = (callback: (...arg: any) => any, wait: number) => {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: any) => {
    const next = () => callback(...args);
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(next, wait);
  };
};

export default debounce;

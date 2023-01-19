export const getStorageItem = () => {
  const keywordList = localStorage.getItem("keyword");
  return keywordList === null ? [] : (JSON.parse(keywordList) as string[]);
};

export const setStorageItem = (keyword: string[]) => {
  localStorage.setItem("keyword", JSON.stringify(keyword));
};

export const addStorageItem = (keyword: string) => {
  const keywordList = localStorage.getItem("keyword");
  if (keywordList) {
    const parsing = JSON.parse(keywordList) as string[];
    if (parsing.length === 5) {
      const tempWord = parsing.slice(1, 5);
      setStorageItem([...tempWord, keyword]);
    } else if (!parsing.includes(keyword))
      setStorageItem([...parsing, keyword]);
  }
};

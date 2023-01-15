export const getStorageItem = () => {
  const keywordList = localStorage.getItem("keyword");
  return keywordList === null ? [] : (JSON.parse(keywordList) as string[]);
};

export const setStorageItem = (keyword: string[]) => {
  localStorage.setItem("keyword", JSON.stringify(keyword));
};

export const addStorageItem = (keyword: string) => {
  console.log("add Storage");
  const keywordList = localStorage.getItem("keyword");
  if (keywordList) {
    const parsing = JSON.parse(keywordList) as string[];
    if (!parsing.includes(keyword)) {
      console.log("노 중복 추가해야함", keyword);
      setStorageItem([...parsing, keyword]);
    }
  }
};

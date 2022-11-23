export const getStorageItem = () => {
  const keywordList = localStorage.getItem("keyword");
  console.log("getword", keywordList);
  return keywordList === null ? [] : JSON.parse(keywordList);
};

export const setStorageItem = (keyword: string[]) => {
  localStorage.setItem("keyword", JSON.stringify(keyword));
};

export const getStorageItem = () => {
  const keywordList = localStorage.getItem("keyword");
  console.log("getword", keywordList);
  return keywordList === null ? [] : (JSON.parse(keywordList) as string[]);
};

export const setStorageItem = (keyword: string[]) => {
  localStorage.setItem("keyword", JSON.stringify(keyword));
};

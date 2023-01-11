import { nanoid } from "nanoid";
import React, { Dispatch, SetStateAction } from "react";
import { getStorageItem, setStorageItem } from "../../utils/localStorage";
import * as S from "./style";

interface RecentKeywordProps {
  recentKeyword: string[];
  setSearchWord: Dispatch<SetStateAction<string>>;
  setRecentKeyword: Dispatch<SetStateAction<string[]>>;
}

const RecentKeyword = ({
  recentKeyword,
  setSearchWord,
  setRecentKeyword,
}: RecentKeywordProps) => {
  const handleKeywordClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setSearchWord(target.name);
  };

  const handleDeleteButton = (
    word: string,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const keywordList = getStorageItem().filter((item) => item !== word);
    console.log("after delete", keywordList);
    setRecentKeyword(keywordList);
    setStorageItem(keywordList);
  };

  return (
    <S.RecentKeyword>
      {recentKeyword &&
        recentKeyword.map((word) => (
          <S.KeyWordList key={nanoid()}>
            <S.KeyWordItems
              variant="outlined"
              onClick={handleKeywordClick}
              name={word}
            >
              {word}
            </S.KeyWordItems>
            <S.BadgeEdge
              onClick={(e) => {
                handleDeleteButton(word, e);
              }}
            >
              X
            </S.BadgeEdge>
          </S.KeyWordList>
        ))}
    </S.RecentKeyword>
  );
};

export default RecentKeyword;

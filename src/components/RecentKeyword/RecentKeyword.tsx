import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { getStorageItem, setStorageItem } from "../../utils/localStorage";
import * as S from "./style";

interface RecentKeywordProps {
  setSearchWord: Dispatch<SetStateAction<string>>;
}

const RecentKeyword = ({ setSearchWord }: RecentKeywordProps) => {
  const [recentKeywords, setRecentKeywords] = useState<string[]>([]);

  useEffect(() => {
    setRecentKeywords(getStorageItem());
  }, []);

  const handleKeywordClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setSearchWord(target.name);
  };

  const handleDeleteButton = (
    word: string,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const keywordList = getStorageItem().filter((item) => item !== word);
    setRecentKeywords(keywordList);
    setStorageItem(keywordList);
  };

  return (
    <S.RecentKeyword>
      {recentKeywords &&
        recentKeywords.map((word) => (
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

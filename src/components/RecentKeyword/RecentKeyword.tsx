import { Badge, Button } from "@mui/material";
import * as S from "./style";

interface RecentKeywordProps {
  recentKeyword: string[];
}

const RecentKeyword = ({ recentKeyword }: RecentKeywordProps) => {
  console.log("RecentKeyword Component");

  return (
    <S.RecentKeyword>
      {recentKeyword &&
        recentKeyword.map((word) => (
          <Badge
            badgeContent={"X"}
            color="primary"
            onClick={() => {
              console.log("Badge Click");
            }}
          >
            <Button
              key={Math.random()}
              variant="outlined"
              onClick={() => {
                console.log("Click item", word);
              }}
            >
              {word}
            </Button>
          </Badge>
        ))}
    </S.RecentKeyword>
  );
};

export default RecentKeyword;

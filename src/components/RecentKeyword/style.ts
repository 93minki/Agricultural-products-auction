import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const RecentKeyword = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const KeyWordList = styled.li`
  list-style: none;
  position: relative;
`;

export const KeyWordItems = styled(Button)``;

export const BadgeEdge = styled.div`
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: -0.5rem;
  right: -0.6rem;
  border-radius: 50%;
  border: 1px solid #1976d2;
  text-align: center;
  font-size: 0.5rem;
  background-color: #1976d2;
  padding-top: 1px;
  color: white;
  cursor: pointer;
`;

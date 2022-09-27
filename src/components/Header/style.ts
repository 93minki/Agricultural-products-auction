import styled from "@emotion/styled";
import { ToggleButtonGroup } from "@mui/material";

export const HeaderLayout = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const HeaderTitle = styled.div`
  align-self: center;
  font-size: 2rem;
`;

export const HeaderToggleButtonGroup = styled(ToggleButtonGroup)`
  align-self: center;
  margin-right: 1rem;
`;

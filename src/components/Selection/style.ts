import styled from "@emotion/styled";
import { FormControl } from "@mui/material";

export const SelectionLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SelectionItem = styled(FormControl)`
  margin: 1.5rem;
  flex-grow: 1;
`;

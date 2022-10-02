import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

export const ErrorStateLayout = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const ErrorIcon = styled(ReportProblemIcon)`
  font-size: 5rem;
  color: tomato;
`;

export const ErrorCode = styled(Typography)`
  font-weight: 800;
  font-size: 1.5rem;
`;
export const ErrorMessage = styled(Typography)`
  font-weight: 600;
  font-size: 1.25rem;
`;

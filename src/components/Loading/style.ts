import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import SyncIcon from "@mui/icons-material/Sync";

const rotateIcon = keyframes`
    100% {
        transform: rotate(-180deg);
    }
`;

export const LoadingLayout = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
export const styledSyncIcon = styled(SyncIcon)`
  animation: ${rotateIcon} 1s ease infinite;
  font-size: 5rem;
`;

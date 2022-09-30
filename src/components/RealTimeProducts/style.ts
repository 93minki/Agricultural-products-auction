import styled from "@emotion/styled";

export const ProductLayout = styled.li`
  list-style: none;
  padding: 1rem;
  border: 1px solid #e6e6e6;
  box-shadow: 0 0 0.5rem #f2f2f2;
  border-radius: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-weight: 600;
  }
`;

export const ProductTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const ProductContent = styled.div``;

export const ProductTotal = styled.div`
  #total {
    color: blue;
  }
`;

export const ProductPrice = styled.div``;

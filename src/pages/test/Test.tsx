import styled from "styled-components";
import { CircleInfo } from "./_components/circle/CircleInfo";
import { usePageNumber } from "./_hooks/usePageNumber";

const TestContainer = styled.div`
  width: 90%;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`;

const Test: React.FC = () => {
  const { page } = usePageNumber();
  return (
    <TestContainer>
      <CircleInfo pageNumber={page} />
    </TestContainer>
  );
};

export default Test;

import styled from "styled-components";
import { CircleInfo } from "./_components/circle/CircleInfo";
import { usePageNumber } from "./_hooks/usePageNumber";
import { useUserProfile } from "@hooks/useUserProfile";

const TestContainer = styled.div`
  width: 90%;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`;

const Test: React.FC = () => {
  const { page } = usePageNumber();
  const { response, error } = useUserProfile();
  console.log(response);
  return (
    <TestContainer>
      <CircleInfo pageNumber={page} />
      <p>{error}</p>
    </TestContainer>
  );
};

export default Test;

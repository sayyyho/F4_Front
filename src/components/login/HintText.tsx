import styled from "styled-components";

const HintTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HintTextHeadline2 = styled.h2`
  color: #343a40;
  text-align: center;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: -0.5px;
`;

const HintTextP1 = styled.p`
  color: #868e96;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
  letter-spacing: -0.1px;
`;

export default function HintText() {
  return (
    <HintTextWrapper>
      <HintTextHeadline2>당신의 정보를 입력해주세요.</HintTextHeadline2>
      <HintTextP1>팀을 참가할 때 간단한 정보를 입력받아요.</HintTextP1>
    </HintTextWrapper>
  );
}

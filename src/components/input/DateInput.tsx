// DateInput.tsx
import React from "react";
import * as S from "./style";

const DateInput: React.FC = () => {
  return (
    <S.InputContainer>
      <S.InputTitleWrapper>
        <S.InputTitle>생년월일</S.InputTitle>
        <S.EssentialIcon>*</S.EssentialIcon>
      </S.InputTitleWrapper>

      <S.DateInputWrap>
        <S.InputWrap width="102px">
          <S.TextInput type="number" maxLength={4} />
        </S.InputWrap>
        <S.InputWrap width="102px">
          <S.TextInput type="number" maxLength={2} />
        </S.InputWrap>
        <S.InputWrap width="102px">
          <S.TextInput type="number" maxLength={2} />
        </S.InputWrap>
      </S.DateInputWrap>
    </S.InputContainer>
  );
};

export default DateInput;

import * as S from "./style";

interface CircleInfoProps {
  pageNumber: number;
}

export const CircleInfo: React.FC<CircleInfoProps> = ({ pageNumber }) => {
  return (
    <S.CircleContainer>
      {[1, 2, 3, 4, 5].map((number) => (
        <S.Circle key={number} activePage={pageNumber === number}>
          {number}
        </S.Circle>
      ))}
    </S.CircleContainer>
  );
};

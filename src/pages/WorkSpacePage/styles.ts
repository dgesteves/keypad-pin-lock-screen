import styled from 'styled-components';

export const StyledWorkSpacePage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: calc(100vh - 108px);
  background-color: #fff;
  color: #000;
`;

export const StyledKeypadTitle = styled.h1`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;

export const StyledKeyCircleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin: 24px 0;
`;
export const StyledKeyCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #000;
`;

export const StyledErrorText = styled.p`
  color: #c00;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const StyledKeypadWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 266px;
  height: 336px;
  gap: 24px;
  margin-top: 32px;
`;

export const StyledKeypadCircle = styled(StyledKeyCircle)`
  width: 72px;
  height: 72px;
  padding: 16px;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  cursor: pointer;

  &:hover {
    background-color: #d9d9d9;
    border-color: #d9d9d9;
  }

  &:active {
    background-color: #000;
    color: #fff;
  }
`;

export const StyledWelcomeText = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
`;

export const StyledWelcomeParagraph = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

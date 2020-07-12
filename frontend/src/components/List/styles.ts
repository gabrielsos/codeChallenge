import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  background: var(--white);
`;

export const ListContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  min-width: 90%;
  max-width: 90%;
  border-radius: 10px;
  border: 10px solid var(--twitter);

  & {
  }
`;

export const Question = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 0 9px 13px;
  border-bottom: 2px solid var(--twitter);
  align-items: center;
  justify-content: space-between;

  > h1 {
    font-size: 16px;
    color: #333;
    text-align: left;
  }
`;

export const Answer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0 9px 13px;
  border-bottom: 2px solid var(--twitter);
  text-justify: auto;

  > form div label {
    font-size: 16px;
    color: #333;
    text-align: left;
  }

  > form div label.after {
    content: '';
    clear: both;
  }
`;

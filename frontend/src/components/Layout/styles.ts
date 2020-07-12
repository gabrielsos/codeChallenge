import styled from 'styled-components';
import { Edit } from '../../styles/Icons';

export const Container = styled.div`
  background: var(--primary);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  height: 100vh;
  width: 70%;
  margin: 20px auto;
  justify-content: initial;
  background: #fff;
  border-radius: 10px;
`;

export const Header = styled.div`
  position: sticky;
  top: 0px;
  background: var(--twitter);
  display: flex;
  align-items: center;
  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);
  justify-content: flex-start;
  > h1 {
    margin-left: 45px;
    text-align: center;
    color: var(--white);
  }
  > button {
    margin-left: 20px;
    padding: 8px;
    border-radius: 50%;
    outline: 0;
    cursor: pointer;
    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;

export const EditIcon = styled(Edit)`
  width: 30px;
  height: 30px;
  fill: var(--white);
`;

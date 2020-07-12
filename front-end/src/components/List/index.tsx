/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';

import Button from '../Button';

import { Container, Question, Answer, ListContainer } from './styles';

const List: React.FC = () => {
  return (
    <Container>
      <ListContainer>
        <Question>
          <h1>
            Texto é um conjunto de palavras e frases encadeadas que permitem
            interpretação e transmitem uma mensagem. É qualquer obra escrita em
            versão original e que constitui um livro ou um documento escrito. Um
            texto é uma unidade linguística de extensão superior à frase.
          </h1>
        </Question>
        <Answer>
          <form>
            <div className="radio">
              <label>
                <input type="radio" name="opcao" value="a" />
                Option 1
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" name="opcao" value="b" />
                Option 2
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" name="opcao" value="c" />
                Option 3
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" name="opcao" value="c" />
                Option 4
              </label>
            </div>
          </form>
          <Button>
            <span>Confirmar</span>
          </Button>
        </Answer>
      </ListContainer>
    </Container>
  );
};

export default List;

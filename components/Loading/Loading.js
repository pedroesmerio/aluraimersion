import Widget from '../../assets/styles/components/Widget/Widget.js';
import QuizBackground from '../../assets/styles/components/QuizBackground/QuizBackground.js';

  function Loading() {
  return (
    <QuizBackground>
      <Widget>
        <Widget.Header>
          Carregando...
        </Widget.Header> 

        <Widget.Content>
          [Desafio do Loading]
        </Widget.Content>
      </Widget>
    </QuizBackground>
  );
}

export default Loading;

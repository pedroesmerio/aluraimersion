import styled from 'styled-components';
import db from '../db.json';
import Widget from '../assets/components/Widget/Widget.js';
import QuizLogo from '../assets/components/QuizLogo/QuizLogo.js';
import QuizBackground from '../assets/components/QuizBackground/QuizBackground.js';
import Footer from '../assets/components/Footer/Footer.js';
import GitHubCorner from '../assets/components/GitHubCorner/GitHubCorner.js';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Header>
            <p>{db.title}</p>
          </Widget.Header>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quiz do Narutinho</h1>
            <p>{db.title}</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/pedroesmerio" />
    </QuizBackground>
  );
}

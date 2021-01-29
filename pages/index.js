import styled from 'styled-components';
import db from '../db.json';
import Widget from '../assets/styles/components/Widget/Widget.js';
import QuizLogo from '../assets/styles/components/QuizLogo/QuizLogo.js';
import QuizBackground from '../assets/styles/components/QuizBackground/QuizBackground.js';
import Footer from '../assets/styles/components/Footer/Footer.js';
import GitHubCorner from '../assets/styles/components/GitHubCorner/GitHubCorner.js';
import Form from '../components/Form/Form.js'


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
          <Widget.Content>
            <Form />
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>{db.title}</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/pedroesmerio" />
    </QuizBackground>
  );
}

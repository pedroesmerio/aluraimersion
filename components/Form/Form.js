import styled from 'styled-components';
import FormStyle from '../../assets/styles/components/Form/FormStyle.js';
import ButtonStyle from '../../assets/styles/components/Button/ButtonStyle.js';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';

const useStyles = makeStyles(FormStyle);

export default function Form() {

  const classes = useStyles();

  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <div className={classes.container}>
      <form className={classes.FormStyle}
        onSubmit={function (infosDoEvento) {
        infosDoEvento.preventDefault()
        router.push(`/quiz?name=${name}`);
      }}
      >
        <input
          className={classes.input}
          onChange={function (infosDoEvento) {
            setName(infosDoEvento.target.value);
          }}
          placeholder="     Diz aí seu nome Ninja"
        />
        <ButtonStyle type="submit"
          disabled={name.length === 0}>
          Jogar como {name}
        </ButtonStyle>
      </form>
    </div>
  );
}

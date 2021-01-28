import styled from 'styled-components';
import FormStyle from '../../assets/styles/components/Form/FormStyle.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(FormStyle);

export default function Form() {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <form onSubmit= {e => e.preventDefault()}>
        <input
        className={classes.input}  
        placeholder="Digite seu nome Ninja">
        </input>
        <button
          className={classes.btn}
          type="submit">
          JOGAR
        </button>
      </form>
    </div>
  );
}

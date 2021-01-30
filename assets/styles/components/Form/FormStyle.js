import styled from 'styled-components';
import db from '../../../../db.json';

const FormStyle = {
  container: {
    width:'100%',
    display: 'block',
    margin:'10px'
  },

  input: {
    width:'95%',
    marginBottom:'10px',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    color: "#495057",
    height: "unset",
    border: 0,
    borderRadius: 3,
    "&,&::placeholder": {
      fontSize: "1.2rem",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "350",
      lineHeight: "1.42857",
      opacity: "1"
    },
    "&::placeholder": {
      color: "#AAAAAA"
    }
  },
};

export default FormStyle;

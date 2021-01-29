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

  btn: {
    background: 'linear-gradient(150deg, #FDD93D 30%, #D5352E 90%)',
    width: '95%',
    height: '35px',
    fontSize:'20px',
    fontWeight: 'bold',
    fontFamily:'roboto',
    fontWeight: "500",
    border: 0,
    borderRadius: 3,
    boxShadow: '0 jpx 5px 2px #000',
    color: 'white',
    padding: '0 20px',
  }
};

export default FormStyle;

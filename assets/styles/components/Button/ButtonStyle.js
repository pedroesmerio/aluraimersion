import styled from 'styled-components';
import db from '../../../../db.json';
import PropTypes from 'prop-types';

const ButtonStyle = styled.button`
  background: linear-gradient(150deg, #FDD93D 30%, #D5352E 90%);
  color: #FFF;
  border-radius: 10px;
  borderRadius: 3;
  border: 0;
  width: 100%;
  padding: 20px 16px;
  font-weight: bold;
  font-size: 18px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
  }
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;

ButtonStyle.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonStyle;

import styled from "styled-components";

const ButtonStyles = styled.button<any>`
  border: 2px solid ${(props) => props.background};
  cursor: pointer;
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background: ${(props) => props.theme.colors.pink};
`;
export default ButtonStyles;

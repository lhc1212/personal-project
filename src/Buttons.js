import styled, { css } from "styled-components";

const Button = styled.button`
    border-radius: 5px;
    cursor: pointer;
    transition: transform 500ms;
    &:hover {
        background-color: blue;
    }
`;

export default Button;
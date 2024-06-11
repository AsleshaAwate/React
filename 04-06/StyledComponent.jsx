import styled from "styled-components";

const MyAnotherElement=styled.p`
font-size: 42px;
font-weight: bold;
color: purple;
`;
function StyledComponents(){
    return(
        <div>
        <h1>Styled Components</h1>
        <MyAnotherElement>Testing Styled Components</MyAnotherElement>
    </div>
    );
}

export default StyledComponents;
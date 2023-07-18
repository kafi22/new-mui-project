import styled from "styled-components";

const Wrapper = styled.nav`
width : 100%;
max-width : 100%;
margin : 0 auto;
padding : 20px;

.navBar {
    display : flex;
    align-items : center;
    justify-content : center;
    gap : 1.5rem;

    a {
        font-size: 1.5em;
        text-transition : none;

    }

    .active {
        color : red;
    }
}
`;

export default Wrapper;
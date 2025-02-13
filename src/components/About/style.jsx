import styled from "styled-components";

export const AnimatedLogo = styled.img`
    width: 150px;
    animation: spinHorizontal 5s linear infinite;

    @keyframes spinHorizontal {
        0%{
            transform: rotateY(0deg)
        }
        100%{
            transform: rotateY(360deg)
        }
    }
`
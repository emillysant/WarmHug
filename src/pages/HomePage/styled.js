import styled from "styled-components";

export const FirstContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  position: sticky;
`


export const FirstImg = styled.img`
  width: 60vw;
  margin: 0px;
  top:0;
  left:0;
  position: absolute;
  z-index: -1;
`

export const FirstImg2 = styled.img`
  width: 60vw;
  top: 0;
  right:0;
  position: relative;
  z-index:1;
`

export const FirstText = styled.div`
  text-align: center;
  margin: 75px;
  align-items: left;
`

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;


export const SecondImg = styled.img`
  width: 30vw;
  margin: 75px;
`;

export const SecondText = styled.div`
  margin: 100px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;


export const ThirdContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

export const DiversityImg = styled.img`
  margin: 50px;
  width: 50%;
`;

export const Footer = styled.div`
  width: 100%;
  background-color: #3fbfeb;
`;

export const ContainerFooter = styled.div`
  padding: 50px 350px 50px 350px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AFooter = styled.a`
  margin-left: 18%;
`;

export const ButtonDiv = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
`
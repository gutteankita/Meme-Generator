// Style your components here

import styled from 'styled-components'

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

width: 100%;
color: "#35469c";
min-height:100vh;

`
export const ContentContainer = styled.div`
display: flex;
justify-content: space-between;


@media (max-width: 576px) {
flex-direction: column;
align-items: center;

}
`
export const FormContainer = styled.form`
display: flex;
flex-direction: column;
width: 40%;
padding: 20px;
margin-left: 30px;
flex-shrink: 0;

@media (max-width: 576px) {
  
   width: 100%; 
   margin-left: 0px;
   order: 1;
}
`

export const Heading = styled.h1`
color: #35469c;
padding: 20px;
margin-top:60px;
margin-left: 30px;
`

export const LabelContainer = styled.div`
display: flex;
flex-direction: column;
`
const sharedInputStyles = `
  outline: none;
  border-style: none;
  border-radius: 5px;
  border: 2px solid #d7dfe9;
  color: #5a7184;
  font-size: 22px;
  margin-top: 7px;
  margin-bottom: 12px;
  padding: 5px;
  padding-left: 13px;
`

export const Input = styled.input`
${sharedInputStyles}
`

export const Label = styled.label`
color: #5a7184;
font-size: 25px;
`

export const SelectContainer = styled.div`
display: flex;
flex-direction: column;
color: "#35469c";
`
export const Select = styled.select`
${sharedInputStyles}
`

export const Option = styled.option`
color: "#35469c";
`

export const Button = styled.button`
background: #0b69ff;
width: 200px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
outline: none;
border-style: none;
border-radius: 5px;
color: #ffffff;
cursor: pointer
`

export const ImageContainer = styled.div`

  background-image: url(${props => props.backgroundImageUrl});
  background-size: cover;
  
  width:  100%;
  color: "#35469c";
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px;

 
`

export const ImgHeading = styled.p`

  font-size: ${props => props.ImgfontSize};
  font-weight: bold;
  color: #ffffff;
`

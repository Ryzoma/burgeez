import styled from "styled-components"

const LogoContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content:center;
    min-width: 2rem;
    transform: scale();

    p {
    font-size: 8rem;    
    font-family: 'Amatic SC', cursive;
    font-weight: 700;
    color: orange;
    z-index: 2;
    margin: 0;
    }

    img {
      height:10rem;
      object-fit: contain;
      object-position: center;
      margin: 0 1rem;
    }
`


const Logo = ()=> {
  return (
    <LogoContainer>
        <p>Holyyy</p>
        <img src="/images/F03 logo-orange.png" alt="" />
        <p>Burgeez</p>
    </LogoContainer>
  )
}

export default Logo
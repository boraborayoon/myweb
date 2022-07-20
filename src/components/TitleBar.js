import styled from 'styled-components'
import { color, device, contentWidth, boxShadow } from '../styles';

const TitleBarContainer = styled.div`
    height: 40px;
    background: ${color.primary};
    width:100%;
    left:0%;
    position: fixed:
    z-index:9999;
    top:0px;
    color: ${color.white};
    box-shadow: ${boxShadow}
    margin-bottom: 1rem;
    `

const Logo = styled.div`
    display: flex;
    align-items: left;
    padding: 0.4rem;
`
const Menu = styled.div`
`

function TitleBar() {
    return (
        <TitleBarContainer>
          <Logo>BORABORA</Logo>
          <Menu></Menu>
        </TitleBarContainer>
    );
}
  
export default TitleBar;
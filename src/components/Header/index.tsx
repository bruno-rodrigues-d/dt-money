import { HeaderContainer, HeaderContent, NewTransactionButton, HeaderTexto } from "./styles";
import logoImg from "/public/logo.svg"

export function Header() {
  return(
    <HeaderContainer>
      <HeaderContent>
        <HeaderTexto>
          <img src={logoImg} alt="" />
          <span>DT Money</span>
        </HeaderTexto>
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
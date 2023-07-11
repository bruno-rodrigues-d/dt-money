import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
  HeaderTexto,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../../public/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderTexto>
          <img src={logoImg} alt="" />
          <span>DT Money</span>
        </HeaderTexto>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContainer, TransactionsTable, PriceHightlight } from "./styles";

export function Transactions() {
  return(
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width='50%'>Desenvolvimento de site</td>
              <td>
                <PriceHightlight variant='income'>
                  R$ 12.000,00
                </PriceHightlight>
              </td>
              <td>Venda</td>
              <td>10/07/2023</td>
            </tr>
            <tr>
              <td width='50%'>Hamburguer</td>
              <td>
              <PriceHightlight variant='outcome'>
                  - R$ 59,00
                </PriceHightlight>
              </td>
              <td>Alimentação</td>
              <td>10/07/2023</td>
            </tr>
            <tr>
              <td width='50%'>Desenvolvimento de site</td>
              <td>
                <PriceHightlight variant='income'>
                  R$ 12.000,00
                </PriceHightlight>
              </td>
              <td>Venda</td>
              <td>10/07/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
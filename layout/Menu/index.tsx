import { useQuery } from "@apollo/client"
import { Container } from "@mui/material"
import Link from "next/link"
import navHeader from "queries/navHeader"
import { FC } from "react"
import { MenuS } from "./styled"

interface IMenu {
  active: boolean
}

const Menu: FC<IMenu> = ({active}) => {

  const {data, loading} = useQuery(navHeader)

  if(loading) {
    return <></>
  }

  return (
    <MenuS active={active}>
      <Container maxWidth="xl">
        <nav>
          <ul>
            {data.nav.data.attributes.topNav.map((item: any, idx: number) => <li key={idx}><Link href={item.url}>{item.title}</Link></li>)}
          </ul>
        </nav>
      </Container>
    </MenuS>
  )
}

export default Menu
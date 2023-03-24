import { useQuery } from "@apollo/client";
import { Container } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import navHeader from "queries/navHeader";
import { FC } from "react";
import { MenuS } from "./styled";

interface IMenu {
  active: boolean;
  setOpen: (state: boolean) => void
}

const Menu: FC<IMenu> = ({ active, setOpen }) => {
  const { data, loading } = useQuery(navHeader);

  const router = useRouter()

  if (loading) {
    return <></>;
  }

  return (
    <MenuS active={active}>
      <Container maxWidth="xl">
        <nav>
          <ul>
            {data.nav.data.attributes.topNav.map((item: any, idx: number) => (
              <li key={idx}>
                <Link onClick={() => setOpen(false)} className={router.asPath === item.url ? 'active' : undefined} href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </MenuS>
  );
};

export default Menu;

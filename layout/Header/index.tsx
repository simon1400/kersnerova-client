import Lang from "components/Lang";
import { ControlWrapS, HamburderWrap, HeaderS, HeaderWrap } from "./styled";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Container } from "@mui/material";
import Menu from "layout/Menu";
import { selectAllState } from "stores/slices/diffState";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Logo from "components/Logo";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const { homepage } = useSelector(selectAllState);

  return (
    <HeaderWrap>
      <Container maxWidth="xl">
        <HeaderS>
          {/* <Logo alt="Kersnerova" fill={isOpen ? "white" : "black"} /> */}
          <Logo />
          <ControlWrapS>
            <Lang active={isOpen} />
            <HamburderWrap>
              <Hamburger
                color={isOpen ? "white" : "black"}
                toggled={isOpen}
                toggle={setOpen}
                size={34}
                label="Show menu"
              />
            </HamburderWrap>
          </ControlWrapS>
          <Menu active={isOpen} setOpen={setOpen} />
        </HeaderS>
      </Container>
    </HeaderWrap>
  );
};

export default Header;

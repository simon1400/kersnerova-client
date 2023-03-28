import Lang from "components/Lang";
import { ControlWrapS, HamburderWrap, HeaderS, HeaderWrap } from "./styled";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Container } from "@mui/material";
import Logo from "public/assets/kersnerova-logo.svg";
import Menu from "layout/Menu";
import Link from "next/link";
import { selectAllState } from "stores/slices/diffState";
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const {homepage} = useSelector(selectAllState);

  return (
    <HeaderWrap>
      <Container maxWidth="xl">
        <HeaderS>
          <Link style={{transition: "all .2s ease", opacity: isOpen || !homepage ? 1 : 0}} href="/">
            <Logo alt="Kersnerova" fill={isOpen ? "white" : "black"} />
          </Link>
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

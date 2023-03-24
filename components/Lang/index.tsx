import Link from "next/link"
import { FC } from "react";
import { LangS } from "./styled"

interface ILang {
  active: boolean;
}

const Lang: FC<ILang> = ({active}) => {
  return (
    <LangS active={active}>
      <ul>
        <li><Link href="/">cs</Link></li>
        <li><Link href="/">en</Link></li>
      </ul>
    </LangS>
  )
}

export default Lang
import Link from "next/link"
import { useRouter } from "next/router";
import { FC } from "react";
import { LangS } from "./styled"

interface ILang {
  active: boolean;
}

const Lang: FC<ILang> = ({active}) => {

  const router = useRouter()

  return (
    <LangS active={active}>
      <ul>
        <li className={router.locale === 'cs' ? "active" : undefined}><Link href="/" locale="cs">cs</Link></li>
        <li className={router.locale === 'en' ? "active" : undefined}><Link href="/" locale="en">en</Link></li>
      </ul>
    </LangS>
  )
}

export default Lang
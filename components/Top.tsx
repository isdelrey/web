import { GitHub, Linkedin } from "react-feather"
import Tag from "./Tag"
import Image from "next/image"
import {useRouter} from "next/router"
import $ from "classname"

const Top = () => {
  const router = useRouter()
  const home = router.route === "/"

  return (
    <header className={$("flex text-sm justify-between flex-wrap", !home && "hidden md:flex")}>
      <div className="flex items-center flex-wrap">
        <div className="mb-4 sm:mb-0 w-full sm:w-auto mr-4"><Image width={40} height={40} src="/foto.png" priority className="rounded-3xl" /></div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-auto">Ivo Sequeros del Rey</div>
          <div className="md:ml-12 text-gray">Engineering, Design &#x26; Innovation</div>
        </div>
      </div>
      <div className="flex text-gray pt-3 gap-5 items-center">
        <a href="http://linkedin.com/in/ivo-s-393598131" target="_blank" className="hover:text-fg"><Linkedin size="16px" /></a>
        <a href="https://github.com/isdelrey" target="_blank" className="hover:text-fg"><GitHub size="16px" className="mt-0.5" /></a>
        <a href="mailto:ivosequeros@me.com" className="hover:text-fg">Contact</a>
        <div><Tag>This website is a WIP</Tag></div>
      </div>
    </header>
  )
}

export default Top
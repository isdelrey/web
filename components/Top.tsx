import { GitHub, Linkedin } from "react-feather"

const Top = () => {
  return (
    <header className="flex text-sm justify-between">
      <div className="flex items-center flex-wrap">
        <div className="mb-4 sm:mb-0 w-full sm:w-auto"><img width="40px" src="/foto.png" className="mr-4 rounded-3xl" /></div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-auto">Ivo Sequeros del Rey</div>
          <div className="md:ml-4 text-gray">Engineering, Design &#x26; Innovation</div>
        </div>
      </div>
      <div className="flex text-gray pt-3 gap-5">
        <a href="http://linkedin.com/in/ivo-s-393598131" target="_blank" className="hover:text-fg"><Linkedin size="16px" /></a>
        <a href="https://github.com/ivosequeros" target="_blank" className="hover:text-fg"><GitHub size="16px" className="mt-0.5" /></a>
        <a href="mailto:ivosequeros@me.com" className="hover:text-fg">Contact</a>
      </div>
    </header>
  )
}

export default Top
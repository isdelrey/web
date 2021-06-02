import SveltImage from "../../assets/Svelt.svg"
import Back from "../../components/Back"
import Top from "../../components/Top"

const Svelt = () => {
  return (
    <div className="my-8 mx-9 flex justify-center">
      <div className="w-full flex-shrink">
        <Top />
        
        <Back />

        <main className="mt-8 md:mt-12 text-xl md:ml-60 fill-fg">
          <div><div className="">Svelt Display</div>
          <h1 className="mt-3">
            <SveltImage width="170px" height="70px" alt="Svelt" />
          </h1></div>

          <section className="text-base mt-10">
            Svelt is a square sans-serif font-face developed from the first sketches of Vaguevoid. Unlike its antecessor's, this font-faces's thickness is not constant. To ensure proper reading at small size, the ascender and descender heights are reduced and all upper-case glyphs are widened.

            
          </section>
        </main>
      </div>
    </div>
  )
}

export default Svelt
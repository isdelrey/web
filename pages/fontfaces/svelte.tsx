import SvelteImage from "../../assets/svelte.svg"
import Back from "../../components/Back"
import Top from "../../components/Top"

const Svelte = () => {
  return (
    <div className="my-8 mx-9 flex justify-center">
      <div className="w-full flex-shrink">
        <Top />
        
        <Back />

        <main className="mt-8 md:mt-12 text-xl md:ml-60 fill-fg">
          <div><h2>Svelte Display</h2>
          <div className="mt-3">
            <SvelteImage width="170px" height="70px" />
          </div></div>
        </main>
      </div>
    </div>
  )
}

export default Svelte
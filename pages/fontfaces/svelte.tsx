import SvelteImage from "../../assets/svelte.svg"
import Back from "../../components/Back"
import Top from "../../components/Top"

const Home = () => {
  return (
    <div className="my-8 mx-9 flex justify-center">
      <div className="w-full flex-shrink">
        <Top />
        
        <Back />

        <div className="mt-8 text-xl md:ml-52 fill-fg">
          <h1>Svelte Display</h1>
          <div className="mt-3">
            <SvelteImage width="170px" height="70px" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
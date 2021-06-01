import VaguevoidImage from "../../assets/vaguevoid.svg"
import Back from "../../components/Back"
import Top from "../../components/Top"

const Home = () => {
  return (
    <div className="my-8 mx-9 flex justify-center">
      <div className="w-full flex-shrink">
        <Top />
        
        <Back />

        <div className="mt-8 text-xl md:ml-52 fill-fg">
          <h1>Vaguevoid Display</h1>
          <div className="mt-3">
            <VaguevoidImage width="170px" height="70px" />
          </div>

          <section className="text-base mt-10">
            Vaguevoid is a 
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home
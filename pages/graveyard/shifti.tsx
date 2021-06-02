import Back from "../../components/Back"
import Top from "../../components/Top"

const Shifti = () => {
  return (
    <div className="my-8 mx-9 flex justify-center">
      <div className="w-full flex-shrink">
        <Top />
        
        <Back />

        <main className="mt-8 md:mt-12 text-xl md:ml-60 fill-fg">
          <div>
              <h1 className="text-5xl font-light">Shifti</h1>
          </div>


          <section className="text-base mt-10">
            Shifti was a business application developed between 2018 and 2019 to 
          </section>
        </main>
      </div>
    </div>
  )
}

export default Shifti
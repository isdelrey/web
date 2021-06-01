import Link from "next/link"
import SvelteImage from "../assets/svelte.svg"
import VaguevoidImage from "../assets/vaguevoid.svg"
import Font from "../components/Font"
import Project from "../components/Project"
import Top from "../components/Top"

const Home = () => {
  return (
    <div className="my-8 mx-9 flex justify-center">
      <div className="w-full flex-shrink">
        <Top />
        
        <main className="mt-10 md:mt-12 text-xl">
          <div className="font-medium">Hi, I’m Ivo. A full-stack engineer and designer from Barcelona, currently in London, UK.</div>
          <div className="text-base text-gray mt-2 md:mt-0">I love innovation, complex challenges and learning. Don’t hesitate to contact me for any challenge or proposal.</div>

          <section className="mt-10 md:mt-14">
            <h2 className="">Open Projects</h2>
            <div className="flex mt-5">
              <a 
                href="https://playscript.studio"
                target="_blank">
                <Project
                  title="Playscript Studio"
                  description="A minimal movie quotes search engine, open to everyone."
                  tag="v1"
                />
              </a>
            </div>
          </section>

          <section className="mt-10 md:mt-10">
            <h2>Fontfaces
              <small className="leading-tight block p-0 m-0 text-xxs text-gray">
                Currently being repackaged
            </small>
            </h2>
            <div className="flex mt-6 gap-8">
              <Link href="/fontfaces/vaguevoid"><a><Font
                title="Vaguevoid"
                image={VaguevoidImage}
              /></a></Link>
              <Link href="/fontfaces/svelte"><a><Font
                title="Svelte"
                image={SvelteImage}
              /></a></Link>
            </div>
          </section>

          <section className="mt-10 md:mt-10">
            <h2 className="">My Graveyard<span className="text-sm align-top ml-0.5">✝</span></h2>
            <div className="flex mt-5">
                <Project
                  title="Shifti"
                  description="An AI-driven shift management tool for big corporations"
                  tag="Beta"
                />
              </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Home
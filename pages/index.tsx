import Link from "next/link"
import SveltImage from "../assets/Svelt.svg"
import VaguevoidImage from "../assets/vaguevoid.svg"
import GraphosImage from "../assets/graphos.svg"
import Font from "../components/Font"
import Project from "../components/Project"
import Top from "../components/Top"

const Home = () => {
  return (
    <div className="my-8 mx-9 flex justify-center">
      <div className="w-full flex-shrink">
        <Top />
        
        <main className="mt-10 md:mt-12">
         <div className="md:w-44">
          <div className="font-bold">Hi, I’m Ivo. <br className="hidden md:block"/>A full-stack engineer and designer from Barcelona.</div>
          <div className="md:mt-1">Currently in London, UK.</div>
            <div className="text-base text-gray mt-2 md:mt-6">I love innovation, complex challenges and learning. Don’t hesitate to contact me for any challenge or proposal.</div>
         </div>

         <div className="md:fixed md:ml-60 top-[4.35rem]">


           


         <section className="mt-10 md:mt-14">
            <h2 className="">Open Projects<span className="text-sm align-top ml-0.5">†</span></h2>
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
            <h2>Fontfaces</h2>
              <small className="leading-tight block p-0 m-0 text-xxs text-gray">
                Currently being repackaged
            </small>
            <div className="flex mt-6 gap-12">
              <Link href="/"><a className="cursor-not-allowed"><Font
                title="Vaguevoid"
                image={VaguevoidImage}
                tag="Beta"
                description="An oval sans-serif display font."
              /></a></Link>
              <Link href="/"><a className="cursor-not-allowed"><Font
                title="Svelt"
                image={SveltImage}
                tag="Beta"
                description="A square sans-serif font"
              /></a></Link>
            </div>
          </section>

          <section className="mt-20">
            <h2 className="">My Graveyard</h2>
            <div className="flex mt-5 gap-10">
            <Link href="/"><a className="flex cursor-not-allowed"><Project
                  title="Shifti"
                  description="An AI-driven shift management tool for big corporations"
                  tag="RIP"
                /></a></Link>
              </div>
          </section>
         </div>

         <section className="md:absolute md:bottom-5 md:left-7 mt-10 md:mt-14 text-xs text-gray leading-tight">
† Most of the projects I have participated in were developed for private companies and cannot be disclosed. If you want to see a rough explanation of what I developed, please visit my LinkedIn profile.
      </section>
        </main>
      </div>
    </div>
  )
}

export default Home
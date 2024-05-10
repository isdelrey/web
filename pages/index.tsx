import Link from "next/link";
import SveltImage from "../assets/svelt.svg";
import VaguevoidImage from "../assets/vaguevoid.svg";
import Font from "../components/Font";
import Project from "../components/Project";
import Top from "../components/Top";

const Home = () => {
  return (
    <div className="my-8 mx-9 flex justify-center">
      <div className="w-full flex-shrink">
        <Top />

        <main className="mt-10 md:mt-12">
          <div className="md:fixed md:w-[200px]">
            <div className="font-bold">
              Hi, I’m Ivo. <br className="hidden md:block" />A full-stack
              engineer and designer from Barcelona.
            </div>
            <div className="md:mt-5">
              Currently in London, UK working as a contractor.
            </div>
            <div className="text-base text-gray-1 mt-5 md:mt-6">
              I love innovation, complex challenges and learning. Don’t hesitate
              to{" "}
              <a
                className="border-b border-gray-3 hover:text-fg"
                href="mailto:ivosequeros@me.com"
              >
                contact me
              </a>{" "}
              for any challenge or proposal.
            </div>
          </div>

          <div className="md:ml-[252px] top-[4.35rem]">
            <section className="md:w-3/4 mt-5 md:mt-0 text-sm hidden">
              <p>
                You will find that this portfolio uses black, white and shades
                of gray. <b>This is a statement.</b>
              </p>
              <p>
                I believe that design is a balance between aesthetics and
                functionality, the result of a negociation between subjectivity
                and utility. I believe that
              </p>
            </section>
            <section className="mt-10 md:mt-14">
              <h2 className="">
                Open Projects<span className="text-sm align-top ml-0.5">†</span>
              </h2>
              <div className="flex mt-5">
               <a href="https://playscript.delrey.dev" target="_blank">
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
              <small className="leading-tight block p-0 m-0 text-xxs text-gray-1">
                Currently being repackaged
              </small>
              <div className="flex mt-6 gap-12">
                <Link href="/fontfaces/vaguevoid">
                  <a>
                    <Font
                      title="Vaguevoid"
                      image={VaguevoidImage}
                      tag="Beta"
                      description="An oval sans-serif font."
                    />
                  </a>
                </Link>
                <Link href="/fontfaces/svelt">
                  <a>
                    <Font
                      title="Svelt"
                      image={SveltImage}
                      tag="Beta"
                      description="A square sans-serif display font"
                    />
                  </a>
                </Link>
              </div>
            </section>
            <section className="mt-10 md:mt-10">
              <h2>Draft & Past Projects</h2>
              <div className="flex mt-6 gap-x-2 gap-y-7 flex-wrap">
                <Project
                  title="Vertical"
                  description="An app to manage properties"
                  tag="v1"
                />
                <Project
                  title="Toost"
                  description="A app to create UX-optimised menus for restaurants"
                  tag="v1"
                />
                <Project
                  title="Shifti"
                  description="An AI-driven shift management tool for big corporations"
                  tag="RIP"
                />
                <Project
                  title="Prepped"
                  description="An app to keep track of emtricitabine-tenofovir uptake, also known as PrEP"
                  tag="v1"
                />
                <Project
                  title="The Potatoe Group"
                  description="Basic design for a software company developing multiple products"
                  tag="v1"
                />
              </div>
            </section>
          </div>

          <section className="md:fixed md:w-[180px] md:bottom-9 md:left-9 mt-10 md:mt-14 text-xxs text-gray-1 leading-tight">
            † Most of the projects I have participated in were developed for
            private companies and cannot be disclosed. If you want to see a
            rough explanation of what I developed, please visit my LinkedIn
            profile.
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;

import Sample1 from "../../assets/vaguevoid/1.svg";
import Sample2 from "../../assets/vaguevoid/2.svg";
import Sample3 from "../../assets/vaguevoid/3.svg";
import Sample4 from "../../assets/vaguevoid/4.svg";
import Sample5 from "../../assets/vaguevoid/5.svg";

import Sample6 from "../../assets/vaguevoid/6.svg";
import Sample7 from "../../assets/vaguevoid/7.svg";
import Sample8 from "../../assets/vaguevoid/8.svg";
import Sample9 from "../../assets/vaguevoid/9.svg";
import Sample10 from "../../assets/vaguevoid/10.svg";
import Sample11 from "../../assets/vaguevoid/11.svg";
import Sample12 from "../../assets/vaguevoid/12.svg";

import VaguevoidImage from "../../assets/vaguevoid.svg";
import Back from "../../components/Back";
import Top from "../../components/Top";

const Vaguevoid = () => {
  return (
    <div className="my-8 mx-8 flex justify-center">
      <div className="w-full flex-shrink">
        <Top />

        <Back />

        <div className="mt-8 md:mt-12 text-xl md:ml-64 fill-fg">
          <h2>Vaguevoid</h2>
          <h1 className="mt-3">
            <VaguevoidImage width="170px" height="70px" alt="Vaguevoid" />
          </h1>

          <section className="text-base mt-10">
            Vaguevoid is a complete sans-serif font featuring the entire
            extended latin alphabet A, plus the IPA alphabet and the cyrillic
            alphabet. Type features have been developed from an initial
            oval-shaped o, which served as a reference to develop the typeface.
            The font supports 72 languages and is designed for both title and
            body use.
          </section>

          <section className="mt-10 overflow-hidden md:w-3/4">
            <div className="uppercase tracking-widest text-xs mb-5 text-gray-1">
              Example
            </div>
            <Sample1 alt="Sample 1" />
          </section>

          <div className="flex gap-x-20 gap-y-10 flex-wrap mt-10">
            <section className="overflow-hidden w-full md:w-auto">
              <div className="uppercase tracking-widest text-xs mb-5 text-gray-1">
                Lower-case basic latin set
              </div>
              <Sample2 alt="Sample 2" className="md:h-[100px] text-gray-1" />
            </section>

            <section className="overflow-hidden w-full md:w-auto">
              <div className="uppercase tracking-widest text-xs mb-5 text-gray-1">
                Upper-case basic latin set
              </div>
              <Sample3 alt="Sample 3" className="md:h-[92px] text-gray-1" />
            </section>
          </div>

          <section className="mt-16">
            <h2>Language support</h2>
            <div className="flex gap-14 flex-wrap">
              <div className="w-full md:w-auto">
                <p className="text-base mt-10 font-bold">
                  Support for cyrillic
                </p>
                <div className="mt-6">
                  <section className="overflow-hidden w-full md:w-auto">
                    <div className="uppercase tracking-widest text-xs mb-5 text-gray-1">
                      Lower-case cyrillic set
                    </div>
                    <Sample5 alt="Sample 5" className="md:h-[105px] text-fg" />
                  </section>

                  <section className="overflow-hidden w-full md:w-auto mt-8">
                    <div className="uppercase tracking-widest text-xs mb-5 text-gray-1">
                      Upper-case cyrillic set
                    </div>
                    <Sample4 alt="Sample 4" className="md:h-[200px] text-fg" />
                  </section>
                </div>
              </div>

              <div>
                <p className="text-base mt-10 font-bold">
                  Support for european languages, IPA and math symbols
                </p>
                <div className="flex gap-10 flex-col flex-wrap">
                  <div className="mt-8 flex gap-8 flex-wrap">
                    <section className=" w-full md:w-auto">
                      <div className="uppercase tracking-widest text-xs mb-5 text-gray-1">
                        SCANDINAVIAN LANGUAGES SUPPORT + ICELANDIC
                      </div>
                      <Sample6 alt="Sample 6" className="h-[58px]  text-fg" />
                    </section>

                    <section className="w-full md:w-auto">
                      <div className="uppercase tracking-widest pb-2 text-xs mb-5 text-gray-1">
                        DUTCH SUPPORT + CATALAN
                      </div>
                      <Sample7 alt="Sample 7" className="h-[67px] text-fg" />
                    </section>
                  </div>
                  <div className="flex gap-14 flex-wrap">
                    <section className="">
                      <div className="uppercase tracking-widest text-xs mb-5 text-gray-1">
                        SPANISH + GERMAN
                      </div>
                      <Sample8 alt="Sample 8" className="h-[50px] text-fg" />
                    </section>

                    <section className=" w-full md:w-auto">
                      <div className="uppercase tracking-widest text-xs mb-5 text-gray-1">
                        DIERESIS (ACUTE, GRAVE) (CONSONANT, VOWEL) ACCENTS
                      </div>
                      <Sample9 alt="Sample 9" className="h-[57px] text-fg" />
                    </section>
                  </div>
                  <div className="flex gap-10 flex-wrap">
                    <section className=" w-full md:w-auto">
                      <div className="uppercase tracking-widest text-xs mb-5 text-gray-1">
                        ENTIRE IPA ALPHABET
                      </div>
                      <Sample10 alt="Sample 10" className="h-[65px] text-fg" />
                    </section>
                    <section className="w-full md:w-auto">
                      <div className="uppercase tracking-widest text-xs mb-4 text-gray-1">
                        FRENCH SUPPORT + POLISH
                      </div>
                      <Sample11 alt="Sample 11" className="h-[55px]  text-fg" />
                    </section>

                    <section className=" w-full md:w-auto">
                      <div className="uppercase tracking-widest text-xs mb-5 text-gray-1">
                        MATH SYMBOLS
                      </div>
                      <Sample12 alt="Sample 12" className="h-[57px] text-fg" />
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Vaguevoid;

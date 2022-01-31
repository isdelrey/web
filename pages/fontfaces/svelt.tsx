import Sample1 from "../../assets/svelt/1.svg";
import Sample2 from "../../assets/svelt/2.svg";
import Sample3 from "../../assets/svelt/3.svg";
import SveltImage from "../../assets/svelt.svg";
import Back from "../../components/Back";
import Top from "../../components/Top";

const Svelt = () => {
  return (
    <div className="my-8 mx-8 flex justify-center">
      <div className="w-full flex-shrink">
        <Top />

        <Back />

        <main className="mt-8 md:mt-12 text-xl md:ml-64 fill-fg">
          <div>
            <div className="">Svelt Display</div>
            <h1 className="mt-3">
              <SveltImage width="170px" height="70px" alt="Svelt" />
            </h1>
          </div>

          <section className="text-base mt-10">
            Svelt is a square sans-serif font-face developed from the first
            sketches of Vaguevoid. Unlike its antecessor's, this font-faces's
            thickness is not constant. To ensure proper reading at small size,
            the ascender and descender heights are reduced and all upper-case
            glyphs are widened.
          </section>

          <section className="mt-10 overflow-hidden -mr-8">
            <div className="uppercase tracking-widest text-xs mb-5 text-gray-1">
              Example
            </div>
            <Sample1 alt="Sample 1" />
          </section>

          <section className="text-base mt-14">
            It is meant to be used as a display fontface for article titles,
            quotations and brand names.
          </section>
          <section className="text-base font-bold">
            It features the full extended latin alphabet A.
          </section>

          <section className="mt-10 overflow-hidden">
            <div className="uppercase tracking-widest text-xs mb-5 text-gray-1">
              Basic Latin Charset
            </div>
            <Sample2 alt="Sample 2" className="md:w-[471px]" />
          </section>

          <section className="mt-4 overflow-hidden max-w-full">
            <Sample3 alt="Sample 2" className="md:w-[475px]" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Svelt;

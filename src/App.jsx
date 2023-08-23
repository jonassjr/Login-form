import bgImage from "./assets/background-image.png";
import { Form, Header } from "./components";

function App() {
  return (
    <main className="min-[1024px]:grid min-[1024px]:grid-cols-2">
      <div className="hidden min-[1024px]:flex relative min-h-screen justify-center items-center">
        <img
          src={bgImage}
          alt="backgroud image"
          className="w-full h-full object-cover absolute"
        />
        <article
          className="glassmorphism w-[350px] h-[400px] rounded-3xl 
          px-10 py-8 flex flex-col justify-center gap-y-8 border-2 
          border-white border-opacity-40"
        >
          <h2 className="text-2xl font-semibold text-title-color">
            Lorem ipsum
          </h2>
          <p className="text-base text-text-color">
            Lorem ipsum dolor sit amet consectetur. Turpis mauris blandit et
            libero lorem nam eget. Volutpat nisi lectus purus ut.
          </p>
        </article>
      </div>

      <div className="min-h-screen flex justify-center items-center">
        <img
          src={bgImage}
          alt="backgroud image"
          className="absolute w-full h-full object-cover z-0 min-[1024px]:hidden"
        />

        <div
          className="glassmorphism w-full min-[768px]:w-[520px] min-[768px]:h-[730px]
         h-screen absolute z-10 min-[768px]:rounded-3xl min-[768px]:border 
         min-[768px]:border-opacity-40 border-white min-[1024px]:hidden"
        />

        <div
          className="flex flex-col gap-y-8 min-h-screen w-full justify-center relative z-20
           items-center "
        >
          <Header />

          <Form />
        </div>
      </div>
    </main>
  );
}

export default App;

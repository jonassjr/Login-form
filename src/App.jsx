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
          className="bg-glass backdrop-blur-sm w-[350px] h-[400px] rounded-3xl 
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

      <div className="min-h-screen relative flex justify-center items-center">
        <img
          src={bgImage}
          alt="backgroud image"
          className="absolute w-full h-full object-cover z-0 min-[1024px]:hidden"
        />

        <div
          className="max-[1023px]:bg-glass max-[1023px]:backdrop-blur-sm 
          w-full min-[768px]:w-[520px] min-[768px]:h-[730px]
          min-[1024px]:w-full min-[1024px]:h-full
          relative z-10 min-[768px]:rounded-3xl min-[768px]:border  
          min-[768px]:border-opacity-40 border-white
          flex flex-col gap-y-8 h-screen min-[768px]:my-10 min-[1024px]:my-2 justify-center 
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

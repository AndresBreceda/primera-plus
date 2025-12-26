import { Footer } from "../Footer";
import { Header } from "../Header";

export default function Home(){
    return(
        <div className="">
            <Header></Header>

            <div className="bg-blue-700 text-black p-4">
                Verde OK
            </div>

<div className="bg-verdePrimera text-black p-6">
      Tailwind funciona ✅
      l
      l
      l
      l
      l
      l
      l
    </div>

    <div className="bg-verdePrimera h-screen text-white flex items-center justify-center text-2xl">
  ESTE ES EL VERDE
</div>


            <Footer></Footer>
        </div>
    );
}
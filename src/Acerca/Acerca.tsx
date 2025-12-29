import { Footer } from "../Footer";
import { Header } from "../Header";

export default function Acerca(){
    return(
        <div className="min-h-screen flex flex-col">
            <Header showBack></Header>

            <main className="flex-1 flex items-center justify-center px-4"></main>

            <Footer></Footer>
        </div>
    );
}    
import { Footer } from "../Footer";
import { Header } from "../Header";

export default function Home(){
    return(
        <div className="">
            {/* put showBack to show the arrow */}
            <Header showBack></Header> 

            <div className="mb-110"></div>

            <Footer></Footer>
        </div>
    );
}
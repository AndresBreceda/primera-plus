import { Footer } from "../Footer";
import { Header } from "../Header";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Acerca(){
    return(
        <div className="min-h-screen flex flex-col">
            <Header showBack></Header>

            <main className="flex-1 flex items-center justify-center p-4 ">
                <div className="text-center bg-white border-2 border-black pl-10 pr-10 pb-10 pt-5 rounded-lg shadow-lg max-w-md w-full">
                    <h1 className="text-2xl font-bold mb-4">Acerca de</h1>
                    <p className="mb-2 text-left">Esta es una aplicación de ejemplo, basada en la aplicación de entretenimiento que se puede encontrar en los camiones de la <b>Primera Plus</b>.</p>
                    <p className="mb-2 text-left">Desarrollada con <b>React</b> y <b>TypeScript</b>, ademas de <b>Tailwind Css</b>.</p>
                    <p className="mb-2 text-left">Creada por <b>Andrés E. Breceda</b> como proyecto personal</p>
                    <p className="mb-2 text-left flex"><GitHubIcon></GitHubIcon> <a className="text-blue-700 ml-2" href="https://github.com/AndresBreceda/primera-plus" target="_blank">https://github.com/AndresBreceda/primera-plus</a></p>
                </div>
            </main>

            <Footer></Footer>
        </div>
    );
}    
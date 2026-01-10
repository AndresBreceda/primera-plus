import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { useNavigate } from "react-router-dom";

export default function Footer(){
    const navigate = useNavigate();
    
    return(
        <footer className="flex items-center justify-between px-6 py-4">
            <div>
                <img onClick={() => navigate("/Home")} src="./primera-plus-logo-largo.png" alt='logo largo Primera plus' className='w-48 cursor-pointer'></img>
            </div>

            <div>
               <QuestionMarkIcon onClick={() => navigate("/Acerca")} sx={{ fontSize: 32 }} className='cursor-pointer hover:text-gray-600 transition'></QuestionMarkIcon> 
            </div>
        </footer>
    );
}
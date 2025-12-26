import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export default function Footer(){
    return(
        <footer className="flex items-center justify-between px-6 py-4">
            <div>
                <img src="./primera-plus-logo-largo.png" alt='logo largo Primera plus' className='w-48'></img>
            </div>

            <div>
               <QuestionMarkIcon sx={{ fontSize: 32 }} className='cursor-pointer hover:text-gray-600 transition'></QuestionMarkIcon> 
            </div>
        </footer>
    );
}
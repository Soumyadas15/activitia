import styles from '../../styles/Pages.module.css';
import Card from '../ui/card';
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook, FaMicrosoft, FaYoutube } from "react-icons/fa";


export default function Index({ navigateToPage }) {
  return (
    <div className="
      bg-black
      w-[400px] h-[485px] p-5
      flex items-center justify-center
    ">
      <div className='
            w-full 
            h-full 
            flex flex-col 
            items-start 
            gap-6
            text-neutral-300
      '>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl font-bold'>Your activity</h1>
          <h1 className='text-neutral-500'>Below is your activity on various websites in the past week</h1>
        </div>

        <div className='flex flex-col gap-3 w-full max-h-96 overflow-hidden overflow-y-scroll'>
          <Card title={'Google.com'} time={'10'} icon={<FcGoogle />}/>
          <Card title={'Github.com'} time={'10'} icon={<FaGithub />}/>
          <Card title={'Facebook.com'} time={'10'} icon={<FaFacebook className='text-blue-600'/>}/>
          <Card title={'Microsoft.com'} time={'10'} icon={<FaMicrosoft />}/>
          <Card title={'Youtube.com'} time={'10'} icon={<FaYoutube className='text-red-600' />}/>
          <Card title={'Google.com'} time={'10'} icon={<FcGoogle />}/>
        </div>
        
        
      </div>
      
    </div>
  );
}

import Link from 'next/link';
import SocialProfile from '../Global/SocialProfile';



const Copyright = () => {
  return (
    <footer className="bg-black text-white py-8 border-t mt-14">
      <div className="flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-gray-400 text-sm mt-4 md:mt-0">
          <span>Copyright © 2024 | </span>
          <Link href="/privacy-policy" className="text-white hover:underline font-semibold">
            Privacy Policy
          </Link>
        </div>
        <SocialProfile/>
      </div>
    </footer>
  );
};

export default Copyright;

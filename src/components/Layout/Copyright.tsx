import Link from 'next/link';
import SocialProfile from '../Global/SocialProfile';



const Copyright = () => {
  return (
    <footer className="bg-black text-white py-8 border-t mt-14">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-gray-400">Powered by</span>
          <Link href="https://luxurypresence.com" className="text-white font-semibold hover:underline">
            Luxury Presence
          </Link>
        </div>
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

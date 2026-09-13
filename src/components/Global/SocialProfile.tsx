import { REALTOR_CA_URL } from "@/lib/seo";
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialProfile = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 mt-4 md:mt-0">
    <Link href={REALTOR_CA_URL} target="_blank" rel="noopener noreferrer" className="text-white hover:text-black hover:bg-white px-3 h-8 ring-1 ring-white rounded-full flex items-center justify-center text-[10px] tracking-[1px] uppercase">
      realtor.ca
    </Link>
    <Link href="https://www.facebook.com/profile.php?id=61553027443148" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black hover:bg-white w-8 h-8 ring-1 ring-white rounded-full flex flex-col items-center justify-center">
      <FaFacebookF />
    </Link>
    <Link href="https://www.instagram.com/ashvaksheik/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black hover:bg-white w-8 h-8 ring-1 ring-white rounded-full flex flex-col items-center justify-center">
      <FaInstagram />
    </Link>
    <Link href="https://www.linkedin.com/in/ashvaksheik7/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black hover:bg-white w-8 h-8 ring-1 ring-white rounded-full flex flex-col items-center justify-center">
      <FaLinkedinIn />
    </Link>
  </div>
  )
}

export default SocialProfile
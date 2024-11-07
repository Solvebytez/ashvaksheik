import Image from "next/image";



const ContactCard = ({cardType}:{cardType?:string}) => {

    const IsWhite = cardType?"text-white":"text-gray-800";

  return (
    <div className="max-w-sm mx-auto  rounded-lg shadow-md p-4">
      <div className="flex items-center mb-4 gap-4">
       <div className="relative w-16 h-16">
       <Image
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Agent"
       fill
        sizes="15vw"
          className=" object-cover z-0 rounded-full"
        /> 
       </div>
        <div>
          <h2 className={`font-bold ${IsWhite} font-tenor_Sans`}>RE/MAX</h2>
          <p className={`text-sm ${IsWhite} font-tenor_Sans`}>Rahul Luthra</p>
        </div>
      </div>
      <div className="flex justify-between mb-2 py-3">
        <span className={`text-sm ${IsWhite}`}>Mobile number</span>
        <span className={`text-sm ${IsWhite}`}>(519) 829-6165</span>
      </div>
      <hr className="my-2 border-white/10"  />
      <div className="mb-4 py-3 flex justify-between">
        <span className={`text-sm ${IsWhite}`}>Email</span>
        <p className={`text-sm ${IsWhite}`}>rahul@theluthragroup.com</p>
      </div>
      <button className="w-full bg-black text-white font-tenor_Sans py-3 uppercase tracking-[2px]">
        Contact agent
      </button>     
    </div>
  );
};

export default ContactCard;

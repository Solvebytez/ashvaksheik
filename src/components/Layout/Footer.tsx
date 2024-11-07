import { Mail, NotebookTabs,Map, Milestone  } from "lucide-react"
import Container from "../Global/Container"
import SubmitButton from "../Global/SubmitButton"
import Copyright from "./Copyright"


const Footer = () => {
  return (
   
     <div className="bg-black text-white p-8">
        <Container>
        <h1 className="text-3xl my-14 font-tenor_Sans tracking-[2px]">RAHUL LUTHRA</h1>
      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start">
        {/* Left Section */}
        <div className="mb-8 md:mb-0 md:text-left w-1/4 font-tenor_Sans">
          
          <div className="space-y-1">
            <p className="text-xl tracking-[2px]">GUELPH</p>
            <p className="text-xl tracking-[2px]">REAL</p>
            <p className="text-xl tracking-[2px]">ESTATE</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-left mb-8 md:mb-0 space-y-0 w-2/4 flex flex-wrap gap-6">
          <div className="flex items-start justify-center md:justify-start space-x-2 gap-4">
            <span className="material-icons"> <Mail size={30} /></span>
            <div>
            <p className="text-sm tracking-[2px] font-bold uppercase">EMAIL</p>
            <p className="text-sm tracking-[2px] font-bold uppercase underline">RAHUL@THELUTHRAGROUP.COM</p>
            </div>
          </div>
          <div className="flex items-start justify-center md:justify-start  gap-4">
            <span className="material-icons"> <NotebookTabs size={30} /></span>
           <div>
           <p className="text-sm tracking-[2px] font-bold uppercase">PHONE NUMBER</p>
           <p className="text-sm tracking-[2px] font-bold uppercase underline">(519) 829-6165</p>
           </div>
          </div>
          <div className="flex items-start justify-center md:justify-start gap-4">
            <span className="material-icons"><Map size={30}/></span>
           <div>
           <p className="text-sm tracking-[2px] font-bold uppercase">ADDRESS</p>
            <p className="text-sm tracking-[2px] font-bold uppercase">
              238 SPEEDVALE AVE W<br />
              GUELPH, ON N1H 1C4
            </p>
           </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center md:text-left w-1/4">
          <h2 className="text-sm tracking-[2px] font-bold uppercase flex gap-4 mb-6"><Milestone size={30} /> SIGN UP FOR EXCLUSIVE NEWS</h2>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-black border-b border-gray-500 text-white p-2 mb-4 focus:outline-none"
          />
          <div className="text-xs text-gray-400 mb-4">
            <input type="checkbox" className="mr-2" />
            <span className="font-bold !text-justify">
              By providing Rahul Luthra your contact information, you acknowledge and agree to our{' '}
              <a href="/privacy-policy" className="text-gray-300 underline">
                Privacy Policy
              </a>{' '}
              and consent to receiving marketing communications, including through automated calls, texts, and emails,
              some of which may use artificial or prerecorded voices. This consent isn’t necessary for purchasing any
              products or services and you may opt out at any time. To opt out from texts, you can reply, ‘stop’ at any
              time. To opt out from emails, you can click on the unsubscribe link in the emails. Message and data rates
              may apply.
            </span>
          </div>
          <SubmitButton btnText="Subscribe"/>
         
        </div>
      </div>
      <Copyright/>
      </Container>
    </div>

  )
}

export default Footer
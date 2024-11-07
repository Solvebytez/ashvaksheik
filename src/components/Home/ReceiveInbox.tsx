import UseNewslaterForm from "../Form/NewslaterForm";


const ReceiveInbox = () => {
  return (
    <div
      className=" text-white bg-[center_top_8rem] bg-fixed relative bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/luxuryp/images/w_2560,c_limit,f_auto,q_auto/ddubo2udq7mhcpbvgt9q/rahul-36-1')",
      }}
    >
      <div className="bg-black bg-opacity-70 text-white flex flex-col items-center justify-center py-16 w-full space-y-7">
        <h2 className="font-tenor_Sans tracking-[6px] text-4xl">
          RECEIVE EXCLUSIVE OFF MARKET LISTINGS IN YOUR INBOX.
        </h2>
        <p>
          Are you interested in buying a home? Look no further than working with{" "}
          {"Guelph's"} Real Estate Expert. Rahul works with estate sales, first
          time home buyers, multifamily investment and luxury leases.
        </p>

      
          <UseNewslaterForm />
    
      </div>
    </div>
  );
};

export default ReceiveInbox;

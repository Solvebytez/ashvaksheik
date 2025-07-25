import UseNewslaterForm from "../Form/NewslaterForm";

const ReceiveInbox = () => {
  return (
    <div
      className=" text-white bg-[center_top_8rem] bg-fixed relative bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('/bg-ashvaik.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-70 text-white flex flex-col items-center justify-center py-16 w-full space-y-7 px-4 md:px-8 lg:px-16 xl:px-36 2xl:px-72">
        <h2 className="font-tenor_Sans tracking-[6px] text-4xl text-center">
          RECEIVE EXCLUSIVE OFF-MARKET LISTINGS IN YOUR INBOX.
        </h2>
        <p className="text-center">
          Are you interested in buying a home? Discover exclusive listings
          before they hit the market by working with one of {"GTA's"} top real
          estate professionals. Ashvak specializes in estate sales, first-time
          homebuyers, multifamily investments, and luxury leases.
        </p>

        <UseNewslaterForm />
      </div>
    </div>
  );
};

export default ReceiveInbox;

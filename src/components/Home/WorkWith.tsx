
import LinkButton from '../Global/Button'

const WorkWith = () => {
  return (
    <div
        className=" text-white bg-fixed relative bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5313175/pexels-photo-5313175.jpeg')",
            backgroundPosition: 'center top '
        }}
      >
        <div className="bg-black bg-opacity-70 text-white flex flex-col items-center justify-center py-[10rem] w-full space-y-7 px-4 md:px-8 lg:px-16 xl:px-36 2xl:px-72 text-center">
          <h2 className="font-tenor_Sans tracking-[6px] text-5xl">
          WORK WITH ASHVAK
          </h2>
          <span className="border-t border-white w-16 mr-2 borer-3 inline-block"></span>
          <p className="font-light">
          Serving the Greater Toronto Area, including Peel, Durham,<br/> Halton, York, and surrounding areas.
          </p>
          <div className="flex justify-center items-center mb-[5rem]">
        <LinkButton href="#" btnText="LET'S CONNECT" className="text-white mt-10" />
      </div>
        </div>
      </div>
  )
}

export default WorkWith
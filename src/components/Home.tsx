import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="main sm:max-w-7xl sm:mx-auto">
      <div className="relative h-80 lg:h-96">
        <div className="relative">
          <img
            src="/washing.jpeg"
            className="inset-0 h-80 w-full bg-black lg:object-cover lg:h-96"
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>

        <div className="content absolute top-20 h-48 lg:h-60 px-4">
          <p className="text-2xl text-white lg:text-3xl lg:w-1/2">
            SERVICE Best Cleaning Service Amazing quality cleaning service
            agency.
          </p>
          <Link
            className="bg-[#1239AC] py-3 px-6 rounded-md text-white 
          hover:bg-white hover:text-slate-800 text-lg transition-colors duration-500 absolute bottom-0"
            to="/"
          >
            Book a schedule
          </Link>
        </div>
      </div>

      <div className="scetion lg:grid grid-cols-2 gap-40 lg:mt-8">
        <div className="images relative hidden lg:block h-[400px]">
          <div className="cover">
            <img src="/dishes.jpg" className="rounded-md h-[380px]" alt="" />
          </div>

          <div className="rounded-image absolute -right-8 bottom-2">
            <img
              src="/rounded.jpg"
              className="h-40 w-40 rounded-full ring-[5px] ring-[#00445b]"
              alt=""
            />
          </div>
        </div>

        <div className="section">
          <div className="service text-slate-800">
            <p className="text-2xl px-2 font-bold mt-8 lg:mt-0 lg:px-1">
              We are committed to give our best services
            </p>
          </div>

          <div className="box p-3 lg:px-0 mt-4">
            <div className="block-section shadow-sm border-l-4 text-lg italic bg-white border-l-[#1239AC] py-10 px-4">
              Local operations team on-call 24 hours a day, available to work at
              a moments notice.
            </div>
          </div>

          <div className="blog p-4 lg:px-1 text-lg text-slate-600">
            <p>
              Friendly bachelor entrance to on by. Extremity as if breakfast
              agreement. Off now mistress provided out horrible opinions.
              Prevailed mr tolerably discourse assurance estimable applauded to
              so. Him everything melancholy uncommonly but solicitude inhabiting
              projection.
            </p>
          </div>

          <div className="contact p-4 flex lg:space-x-4 lg:divide-x-2">
            <Link
              to=""
              className="uppercase bg-[#1239AC] py-4 px-8 text-base font-bold text-slate-200 rounded-md"
            >
              Contact us
            </Link>

            <div className="details px-4 hidden lg:block">
              <p>Get Free Estimate</p>
              <p>+44-20-7328-4499</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

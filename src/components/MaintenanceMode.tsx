import Image from "next/image";
import { Tenor_Sans, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic", "latin-ext"],
  variable: "--font-montserrat",
});

const tenor_Sans = Tenor_Sans({
  subsets: ["latin", "cyrillic", "latin-ext"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-tenor-sans",
});

const MaintenanceMode = () => {
  return (
    <html>
      <head>
        <title>Site Maintenance | Ashvak Sheik</title>
        <meta
          name="description"
          content="We're currently performing maintenance on our website. Please check back soon."
        />
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body
        className={`${montserrat.variable} ${tenor_Sans.variable} ${montserrat.className} montserrat bg-black text-white`}
      >
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-12">
              <Image
                src="/logo3.png"
                width="200"
                height="200"
                alt="Ashvak Sheik Logo"
                className="mx-auto"
              />
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-tenor_Sans tracking-[6px] uppercase">
                Site Maintenance
              </h1>

              <div className="w-24 h-1 bg-white mx-auto"></div>

              <h2 className="text-2xl md:text-3xl font-tenor_Sans tracking-[4px] uppercase">
                We'll Be Back Soon
              </h2>

              <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                We're currently performing scheduled maintenance to improve your
                experience. Our website will be back online shortly.
              </p>

              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 max-w-md mx-auto">
                <h3 className="text-xl font-tenor_Sans tracking-[3px] uppercase mb-4">
                  Need Immediate Assistance?
                </h3>
                <div className="space-y-3 text-left">
                  <div>
                    <span className="font-bold">Phone:</span>
                    <br />
                    <a
                      href="tel:647-890-0982"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      647-890-0982
                    </a>
                  </div>
                  <div>
                    <span className="font-bold">Email:</span>
                    <br />
                    <a
                      href="mailto:ashvak.realtor07@gmail.com"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      ashvak.realtor07@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-400">
                <p>Thank you for your patience.</p>
                <p className="mt-2">
                  Ashvak Sheik | Re/Max President Realty Brokerage
                </p>
              </div>
            </div>

            {/* Solid Black Background */}
            <div className="fixed inset-0 -z-10 bg-black"></div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default MaintenanceMode;

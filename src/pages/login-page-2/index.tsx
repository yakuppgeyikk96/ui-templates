import IconFacebook from "../../assets/icons/IconFacebook";
import IconGooglePlus from "../../assets/icons/IconGooglePlus";
import IconTwitter from "../../assets/icons/IconTwitter";
import logo from "../../assets/images/logo.png";

export default function LoginPage2() {
  return (
    <section className="h-mainScreen relative">
      <div className="absolute bg-loginDemo2Bg h-full w-full bg-cover bg-no-repeat bg-center brightness-50"></div>
      <div className="absolute w-full h-full flex justify-center items-center 2xl:items-start 2xl:pt-24 opacity-95">
        <div className="bg-white w-160 h-100 flex rounded-lg">
          <div className="rounded-l-lg bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 w-5/12 h-full py-8 flex flex-col justify-start items-center gap-16">
            <div className="flex justify-center items-center w-1/2 gap-4 mx-auto">
              <img src={logo} width={48} />
              <span className="text-xl text-white font-bold tracking-widest">
                DeerUI
              </span>
            </div>
            <div className="flex flex-col gap-8 items-center px-8">
              <p className="text-sm text-white text-center tracking-wider">
                Login using social media account
              </p>
              <div className="flex flex-col gap-4 w-full">
                <button className="bg-[#dc4a38] flex justify-between items-center px-3 py-2 rounded-md gap-2">
                  <IconGooglePlus size={24} />
                  <span className="text-white text-xs text-start flex-1 font-semibold">
                    Signin with google
                  </span>
                </button>
                <button className="bg-[#4460A0] flex justify-between items-center px-3 py-2 rounded-md gap-2">
                  <IconFacebook size={24} />
                  <span className="text-white text-xs text-start flex-1 font-semibold whitespace-nowrap">
                    Signin with facebook
                  </span>
                </button>
                <button className="bg-[#1d9bf0] flex justify-between items-center px-3 py-2 rounded-md gap-2">
                  <IconTwitter size={24} />
                  <span className="text-white text-xs text-start flex-1 font-semibold">
                    Signin with twitter
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-2/3 h-full"></div>
        </div>
      </div>
    </section>
  );
}

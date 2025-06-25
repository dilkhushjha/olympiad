import Image from "next/image";

export default function RankBanner() {
  return (
    <div className="container bg-[url('/images/olympiad/champCard.png')] w-full bg-cover bg-center rounded-3xl ">
      <div className="flex flex-col md:flex-row justify-between items-center m-4 md:m-6 py-12 gap-6">
        <div className="flex flex-col gap-5 p-8">
          <div className="flex flex-col md:flex-row gap-4 md:w-4/5">
            <Image src={'/images/olympiad/trophy.png'} height={100} width={100} alt="trophy"></Image>


            <h2 className="text-[42px] font-bold">Matrix JEE Champions</h2>
          </div>
          <div className="w-full">
            <p className="text-lg">Give yourself the best chance to succeed</p>
          </div>
          <div className="mt-2">
            <button className="flex gap-3 items-center *:text-white font-semibold btn-secondary text-lg">
              Register for free <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 10.5L5.5 6L1 1.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>



        <div className="flex flex-wrap justify-center gap-4 m-4 md:m-8">
          <div className="relative">
            <Image
              src="images/olympiad/air1.png"
              alt="air1"
              width={150}
              height={120}
              className="object-cover bg-white rounded-xl border-Primary-Shade_2"
            />
            <div className="absolute rounded-b-xl bottom-0 left-0 w-full bg-Accent_2 bg-opacity-90 text-white text-center p-3">
              <p className="font-semibold text-sm">Mayank Soni</p>
              <p style={{ fontSize: "8px" }}>S/O Subhash Chandra Soni</p>
            </div>

            <div className="absolute gap-2 bottom-11 left-7 bg-yellow-400 text-white font-bold px-3 py-1 rounded-full text-sm flex items-center shadow">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.229797"
                  y="0.584961"
                  width="23.2881"
                  height="23.2881"
                  rx="11.6441"
                  fill="white"
                />
                <path
                  d="M8.42432 15.3193L8.42334 15.3203L9.94678 16.9258L7.59619 19.9307L6.40771 17.8926V17.8916L4.1626 17.1738L6.95947 13.7744L8.42432 15.3193Z"
                  fill="url(#paint0_linear_10856_2756)"
                />
                <path
                  d="M18.5978 17.1729L16.3507 17.8906L16.3527 17.8926L15.1642 19.9307L12.8126 16.9258L14.3361 15.3184L15.8019 13.7734L18.5978 17.1729Z"
                  fill="url(#paint1_linear_10856_2756)"
                />
                <path
                  d="M11.3847 5.49707L16.4091 6.69629V11.8633C16.4091 13.9966 15.2584 15.9797 13.4062 17.0381L11.3857 18.1924L9.3642 17.0381C7.51202 15.9796 6.36127 13.9966 6.36127 11.8633V6.69629L11.3847 5.49707Z"
                  fill="#FED130"
                />
                <path
                  d="M10.2618 9.80059L8.43768 10.3983L9.56203 11.9541L9.56688 13.8736L11.3841 13.2851L12.0642 11.3271L11.3841 8.25049L10.2618 9.80059Z"
                  fill="#FFEC7A"
                />
                <path
                  d="M12.5257 9.80059L11.3837 8.25049V13.2851L13.2206 13.8736L13.2254 11.9541L14.3498 10.3983L12.5257 9.80059Z"
                  fill="#FFEC7A"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_10856_2756"
                    x1="7.05469"
                    y1="13.7744"
                    x2="7.05469"
                    y2="19.9307"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF7D05" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_10856_2756"
                    x1="15.7052"
                    y1="13.7734"
                    x2="15.7052"
                    y2="19.9307"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF7D05" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>
              AIR 26
            </div>
          </div>
          <div className="relative">
            <Image
              src="images/olympiad/air2.png"
              alt="air2"
              width={150}
              height={120}
              className="border border-green-300 rounded-xl object-cover"
            />
            <div className="absolute rounded-b-xl bottom-0 left-0 w-full bg-Accent_2 bg-opacity-90 text-white text-center p-3">
              <p className="font-semibold text-sm">Rishabh Meel</p>
              <p style={{ fontSize: "8px" }}>S/O Ram Krishan Meel</p>
            </div>

            <div className="absolute gap-2 bottom-11 left-7 bg-yellow-400 text-white font-bold px-3 py-1 rounded-full text-sm flex items-center shadow">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.229797"
                  y="0.584961"
                  width="23.2881"
                  height="23.2881"
                  rx="11.6441"
                  fill="white"
                />
                <path
                  d="M8.42432 15.3193L8.42334 15.3203L9.94678 16.9258L7.59619 19.9307L6.40771 17.8926V17.8916L4.1626 17.1738L6.95947 13.7744L8.42432 15.3193Z"
                  fill="url(#paint0_linear_10856_2756)"
                />
                <path
                  d="M18.5978 17.1729L16.3507 17.8906L16.3527 17.8926L15.1642 19.9307L12.8126 16.9258L14.3361 15.3184L15.8019 13.7734L18.5978 17.1729Z"
                  fill="url(#paint1_linear_10856_2756)"
                />
                <path
                  d="M11.3847 5.49707L16.4091 6.69629V11.8633C16.4091 13.9966 15.2584 15.9797 13.4062 17.0381L11.3857 18.1924L9.3642 17.0381C7.51202 15.9796 6.36127 13.9966 6.36127 11.8633V6.69629L11.3847 5.49707Z"
                  fill="#FED130"
                />
                <path
                  d="M10.2618 9.80059L8.43768 10.3983L9.56203 11.9541L9.56688 13.8736L11.3841 13.2851L12.0642 11.3271L11.3841 8.25049L10.2618 9.80059Z"
                  fill="#FFEC7A"
                />
                <path
                  d="M12.5257 9.80059L11.3837 8.25049V13.2851L13.2206 13.8736L13.2254 11.9541L14.3498 10.3983L12.5257 9.80059Z"
                  fill="#FFEC7A"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_10856_2756"
                    x1="7.05469"
                    y1="13.7744"
                    x2="7.05469"
                    y2="19.9307"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF7D05" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_10856_2756"
                    x1="15.7052"
                    y1="13.7734"
                    x2="15.7052"
                    y2="19.9307"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF7D05" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>
              AIR 70
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

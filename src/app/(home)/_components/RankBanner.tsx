import Image from "next/image";

export default function RankBanner() {
  return (
    <div className="container bg-[url('/images/olympiad/champCard.png')] w-full bg-cover bg-center rounded-2xl my-16">
      <div className="flex flex-col md:flex-row justify-between items-center m-4 md:m-6 py-4 gap-6">
        <div className="flex flex-col gap-5 p-8">
          <div className="flex flex-col md:flex-row gap-4 md:w-4/5">
            <svg
              width="83"
              height="83"
              viewBox="0 0 83 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="41.4984" cy="27.2334" r="14.2656" fill="#FFDE6B" />
              <path
                d="M70.453 13.3216H66.3644C66.426 12.0613 66.4873 10.801 66.4873 9.50975C66.4873 8.24946 66.0263 6.98899 65.1962 6.0668C64.3662 5.14462 63.2596 4.59131 62.0606 4.59131L20.9297 4.59131C19.7308 4.59131 18.5934 5.14462 17.7633 6.0668C16.964 6.98899 16.4722 8.24946 16.503 9.50975C16.503 10.801 16.5644 12.0613 16.6259 13.3216H12.5373C8.90995 13.3216 5.92819 16.2728 5.92819 19.9309V24.4499C5.92819 35.6394 14.5048 44.8308 25.4485 45.784C28.6453 50.7942 32.549 54.2681 36.883 55.7128V59.7273C31.2786 61.4921 27.0878 66.3156 26.2491 72.2557H21.8549C20.1557 72.2557 18.7808 73.6321 18.7808 75.3297C18.7808 77.0274 20.1557 78.4038 21.8549 78.4038C63.7961 78.4072 47.8583 78.404 61.1334 78.4038C62.8325 78.4038 64.2075 77.0274 64.2075 75.3297C64.2075 73.6321 62.8325 72.2557 61.1334 72.2557H56.747C55.9434 66.4892 52.1945 61.6115 46.1052 59.7171V55.7134C46.1049 55.7136 46.1056 55.7132 46.1052 55.7134C50.655 54.2071 54.7445 50.4564 58.003 45.0155C68.9773 42.0335 77.0621 32.012 77.0621 20.1153V19.9309C77.0621 16.2728 74.0804 13.3216 70.453 13.3216ZM45.3684 20.4229L49.1803 20.9762C50.1026 21.0991 50.8096 21.7447 51.1169 22.6053C51.3937 23.4662 51.1477 24.4191 50.5023 25.0646L47.7355 27.7698L48.3811 31.551C48.5348 32.4732 48.1659 33.3646 47.4588 33.9179C46.6451 34.4413 45.7367 34.5554 44.9074 34.0716L41.4951 32.2887L38.0829 34.0716C37.253 34.502 36.3001 34.4406 35.5621 33.9179C34.8244 33.3646 34.4555 32.4732 34.6092 31.551L35.2548 27.739L32.4881 25.0646C31.8426 24.4191 31.5966 23.4662 31.8734 22.6053C32.1807 21.7447 32.9185 21.0991 33.8099 20.9762L37.6219 20.4229C37.7748 20.1143 39.4963 16.6405 39.3434 16.9491C39.743 16.1499 40.5729 15.6271 41.4951 15.6271C42.4174 15.6271 43.2473 16.1191 43.647 16.9491C43.7999 17.2578 45.5214 20.7315 45.3684 20.4229ZM12.0763 24.4499V19.9309C12.0763 19.6849 12.2914 19.4697 12.5373 19.4697H17.1177C17.917 26.7247 19.5771 33.2417 21.8211 38.7135C16.134 36.5002 12.0763 30.9361 12.0763 24.4499ZM70.914 20.1153C70.914 26.9705 67.3481 33.0265 61.9993 36.5618C63.8436 31.551 65.1655 25.7717 65.8726 19.4697H70.453C70.6988 19.4697 70.914 19.6849 70.914 19.9309V20.1153Z"
                fill="#04DC86"
              />
            </svg>

            <h2 className="text-2xl font-bold">Matrix JEE Champions</h2>
          </div>
          <div className="w-full">
            <p className="text-md">Give yourself the best chance to succeed</p>
          </div>
          <div className="bg-Primary-Shade_1 w-40 h-10 rounded-3xl flex items-center justify-center">
            <button className="text-white font-semibold">
              Register for free &gt;
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

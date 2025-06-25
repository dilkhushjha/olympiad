// app/components/StageFlow.tsx
import Image from "next/image";

export default function StageFlow() {
    return (
        <div className="bg-[#1263c9] py-10 px-4">
            <div className="flex gap-1 justify-between  mx-auto relative">

                {/* Stage 1 */}
                <div className="flex flex-col items-center">
                    <Image src={'/images/olympiad/stage1.png'} width={200} height={180}></Image>
                    <p className="text-white font-bold xl:text-xl sm:text-base mt-2">Entry Level Exam</p>
                </div>

                {/* Dotted line & label */}
                <div className="flex flex-col gap-2 xl:mt-[50px] ">
                    <span className="bg-Secondary-Shade_1 text-white mx-auto text-lg font-semibold px-5 py-2 rounded-full whitespace-nowrap ">
                        Top 25% Selected
                    </span>
                    <div className="border-dashed border-t-2 border-white w-20 xl:w-60 sm:w-32 my-2"></div>
                </div>

                {/* Stage 2 */}
                <div className="flex flex-col items-center">
                    <Image src={'/images/olympiad/stage2.png'} width={200} height={180}></Image>
                    <p className="text-white font-bold xl:text-xl sm:text-base mt-2">Main Exam</p>
                </div>

                {/* Dotted line & label */}
                <div className="flex flex-col gap-2 xl:mt-[50px] text-center">
                    <span className="bg-Secondary-Shade_1 text-white text-lg mx-auto font-semibold px-5 py-2 rounded-full whitespace-nowrap w-max">
                        Top 1000 Performers
                    </span>
                    <div className="border-dashed border-t-2 border-white w-20 xl:w-60 sm:w-32 my-2"></div>
                </div>

                {/* Reward */}
                <div className="flex flex-col items-center">
                    <Image src={'/images/olympiad/stage3.png'} width={200} height={180}></Image>
                    <p className="text-white font-bold xl:text-xl sm:text-base mt-2">Reward</p>
                </div>

            </div>
        </div>
    );
}

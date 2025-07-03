// app/components/StageFlow.tsx
import Image from "next/image";

export default function StageFlow() {
    return (
        <div className="bg-[#1263c9] " >
            <div className="flex  justify-center gap-4  mx-auto">

                {/* Stage 1 */}
                <div className="flex flex-col items-center w-[220px] max-h-[280px]">
                    <Image src="/images/olympiad/stage1.png" width={200} height={180} alt="stage1" />
                    <p className="text-white font-bold text-center text-lg xl:text-xl mt-2">Entry Level Exam</p>
                </div>

                {/* Dotted line & label */}
                <div className="flex flex-col items-center justify-center gap-2 max-h-[280px]">
                    <span className="bg-Secondary-Shade_1 text-white text-sm sm:text-base xl:text-lg font-semibold px-5 py-2 rounded-full whitespace-nowrap text-center">
                        Top 25% Selected
                    </span>
                    <div className="border-dashed border-t-2 border-white w-16 sm:w-24 xl:w-60 my-2" />
                </div>

                {/* Stage 2 */}
                <div className="flex flex-col items-center w-[220px] max-h-[280px]">
                    <Image src="/images/olympiad/stage2.png" width={200} height={180} alt="stage2" />
                    <p className="text-white font-bold text-center text-lg xl:text-xl mt-2">Main Exam</p>
                </div>

                {/* Dotted line & label */}
                <div className="flex flex-col items-center justify-center gap-2 max-h-[280px]">
                    <span className="bg-Secondary-Shade_1 text-white text-sm sm:text-base xl:text-lg font-semibold px-5 py-2 rounded-full whitespace-nowrap text-center">
                        Top 1000 Performers
                    </span>
                    <div className="border-dashed border-t-2 border-white w-16 sm:w-24 xl:w-60 my-2" />
                </div>

                {/* Reward */}
                <div className="flex flex-col items-center w-[220px] max-h-[280px]">
                    <Image src="/images/olympiad/stage3.png" width={200} height={180} alt="stage3" />
                    <p className="text-white font-bold text-center text-lg xl:text-xl mt-2">Reward</p>
                </div>

            </div>
        </div>

    );
}

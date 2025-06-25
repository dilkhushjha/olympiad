// components/BenefitCardSection.tsx

const benefits = [
    {
        title: "₹71 Crores Scholarships",
        description: "Unlock your chance to win from a scholarship pool worth ₹71 Crores",
        image: "/images/olympiad/scholarship-cap.png"
    },
    {
        title: "Up to 100% Scholarship",
        description: "Top performers can earn full (100%) tuition fee scholarships",
        image: "/images/olympiad/certificate.png"
    },
    {
        title: "₹31L Cash <br> Prizes",
        description: "Grab your share of ₹31 Lakhs in exciting cash rewards.",
        image: "/images/olympiad/cash-gift.png"
    },
    {
        title: "Free International Education Trip",
        description: "Stand a chance to win an all-expenses-paid educational tour to Dubai",
        image: "/images/olympiad/airplane.png"
    }
]


export default function BenefitCardSection() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#F6F9FE]  px-4 sm:px-6 lg:px-8 ">
            {benefits.map((item, index) => (
                <div
                    key={index}
                    className="bg-[url('/images/olympiad/card1.png')] bg-cover bg-center rounded-3xl shadow-sm p-6 flex flex-col items-start justify-between h-[300px]"
                >
                    <div className="">
                        <h3
                            className="text-lg font-bold text-gray-900 mb-2 w-[80%]"
                            dangerouslySetInnerHTML={{ __html: item.title }}
                        ></h3>
                        <p className="text-sm text-gray-600 w-[90%]">{item.description}</p>
                    </div>
                    {/* <Image
                        src={item.image}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="mt-6"
                    /> */}
                </div>
            ))}
        </div>
    )
}

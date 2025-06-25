// components/BenefitCardSection.tsx

const benefits = [
    {
        title: "₹71 Crores Scholarships",
        description: "Unlock your chance to win from a scholarship pool worth ₹71 Crores",
        image: "/images/olympiad/why-1.png"
    },
    {
        title: "Up to 100% Scholarship",
        description: "Top performers can earn full (100%) tuition fee scholarships",
        image: "/images/olympiad/why-2.png"
    },
    {
        title: "₹31L Cash <br> Prizes",
        description: "Grab your share of ₹31 Lakhs in exciting cash rewards.",
        image: "/images/olympiad/why-3.png"
    },
    {
        title: "Free International Education Trip",
        description: "Stand a chance to win an all-expenses-paid educational tour to Dubai",
        image: "/images/olympiad/why-4.png"
    }
]


export default function BenefitCardSection() {
    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#F6F9FE] px-4 sm:px-6 lg:px-8 py-8">
            {benefits.map((item, index) => (
                <div
                    key={index}
                    className="rounded-3xl shadow-sm p-6 flex flex-col items-start  h-[300px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                >
                    <h3 className="text-[20px] font-bold h-[60px]" dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                    <p
                        className="text-sm mt-2"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                </div>
            ))}
        </div>
    );
}

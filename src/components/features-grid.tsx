import badge from "../assets/badge.png"
import hand from "../assets/hand.png"
import bulb from "../assets/bulb.png"
import man from "../assets/man.png"
import rocket from "../assets/rocket.png"

const FeaturesGrid = () => {
    const features = [
        {
            icon: badge,
            title: "Quality You Can Trust",
            description:
                "We only partner with brands you can trust. Our rigorous quality control ensures that every product meets our high standards before it reaches your home.",
        },
        {
            icon: hand,
            title: "Reliability Every Step of the Way",
            description:
                "We have built our reputation on consistency and dependability. From order to delivery, we ensure a seamless experience every time.",
        },
        {
            icon: bulb,
            title: "Innovation That Matters",
            description:
                "We're not just about today, we're building solutions that will serve you better tomorrow. Our innovations are practical and purposeful.",
        },
        {
            icon: man,
            title: "People First, Always",
            description:
                "Behind every service, every product, every success story is our commitment to people. We care, and we take care of our customers.",
        },
        {
            icon: rocket,
            title: "A Sustainable Future",
            description:
                "We're committed to sustainable practices that minimize our carbon footprint. Future-minded people and businesses choose us for the value this creates.",
        },
    ]

    return (
        <section className="w-full py-12 bg-[#F7F7F7] dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <div className="flex justify-center">
                        <button className="flex items-center gap-2 mb-2 bg-[#FFFFFF] dark:bg-gray-800 rounded-lg p-2">
                            <div className="w-2 h-2 rounded-full bg-[#4CAF50]"></div>
                            <h2 className="text-[#333333] dark:text-gray-100 text-[18px] font-semibold">Why should you trust us?</h2>
                        </button>
                    </div>
                    <p className="text-sm md:text-base text-[#1A1A1A] dark:text-gray-300 max-w-3xl mx-auto">
                        We are committed to delivering world-class products and services, maintaining the highest standards of
                        quality, and driving positive transformation across the industries within which we do business.
                    </p>
                </div>

                {/* First row - 3 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
                    {features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="p-6 bg-[#FFFFFF] dark:bg-gray-800 rounded-lg transition-all shadow-lg dark:shadow-gray-900/30">
                            <div className="flex flex-col items-start">
                                <div className="mb-2 p-3">
                                    <img src={feature.icon || "/placeholder.svg"} alt="" className="w-12 h-16" />
                                </div>
                                <h3 className="text-[24px] font-bold mb-2 text-[#000000] dark:text-white">{feature.title}</h3>
                                <p className="text-[16px] font-medium text-[#767676] dark:text-gray-400">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second row - 2 centered cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {features.slice(3).map((feature, index) => (
                        <div key={index + 3} className="p-6 bg-[#FFFFFF] dark:bg-gray-800 rounded-lg transition-all shadow-lg dark:shadow-gray-900/30">
                            <div className="flex flex-col items-start">
                                <div className="mb-2 p-3">
                                    <img src={feature.icon || "/placeholder.svg"} alt="" className="w-12 h-16" />
                                </div>
                                <h3 className="text-[24px] font-bold mb-2 text-[#000000] dark:text-white">{feature.title}</h3>
                                <p className="text-[16px] font-medium text-[#767676] dark:text-gray-400">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturesGrid


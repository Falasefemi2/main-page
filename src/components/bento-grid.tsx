import { Link } from "react-router"
import light from "../assets/energy.jpeg"
import cargo from "../assets/cargo.jpeg"
import energy from "../assets/light.jpeg"
import agric from "../assets/agric.png"

const BentoGrid = () => {
    return (
        <section className="w-full py-12 bg-[#F7F7F7] dark:bg-gray-900">
            <div className="container mx-auto px-4">
                {/* Header Text */}
                <div className="text-center mb-8">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <span className="inline-block w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full mr-1"></span>
                        What we have to offer
                    </p>
                    <p className="text-gray-800 dark:text-gray-200 max-w-3xl mx-auto text-sm md:text-base">
                        Whether it's bringing joy through good food, helping you find the perfect home, powering communities with
                        sustainable energy and affordable metering solutions, or getting your goods where they need to be, we do it
                        with passion and purpose.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Properties Card */}
                    <div className="md:col-span-5 relative rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-900/30 h-[339px]">
                        <Link to="https://harlivia-properties.vercel.app" className="block w-full h-full relative">
                            <img
                                src={light || "/placeholder.svg"}
                                alt="Modern building interior"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 rounded-2xl"></div>
                            <div className="absolute inset-0 p-4 flex flex-col justify-between">
                                <div className="py-4 px-2">
                                    <span className="px-4 py-2 bg-[#335CFF] text-white text-sm font-semibold rounded-[8px]">
                                        PROPERTIES
                                    </span>
                                    <p className="text-white font-medium max-w-[80%] text-sm md:text-xl mt-6">
                                        More than real estate, we create elevated <br /> living experiences.
                                    </p>
                                </div>
                                <div className="text-white text-xs md:text-sm font-medium">Explore Harlivia Properties →</div>
                            </div>
                        </Link>
                    </div>

                    {/* Cargo & Logistics Card */}
                    <div className="md:col-span-7 relative rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-900/30 h-[339px]">
                        <Link to="https://harlivia-cargo.vercel.app" className="block w-full h-full relative">
                            <img
                                src={cargo || "/placeholder.svg"}
                                alt="Delivery person on motorcycle"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 rounded-2xl"></div>
                            <div className="absolute inset-0 p-4 flex flex-col justify-between">
                                <div className="py-4 px-2">
                                    <span className="px-4 py-2 bg-[#B3E951] text-[#2D3D11] text-sm font-semibold rounded-[8px]">
                                        CARGO & LOGISTICS
                                    </span>
                                    <p className="text-white font-medium max-w-[80%] text-sm md:text-xl mt-6">
                                        Seamless, efficient logistics solutions <br /> designed to keep you moving.
                                    </p>
                                </div>
                                <div className="text-white text-xs md:text-sm font-medium">Explore Harlivia Cargo & Logistics →</div>
                            </div>
                        </Link>
                    </div>

                    {/* Energy Card */}
                    <div className="md:col-span-7 relative rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-900/30 h-[339px]">
                        <Link to="https://harlivia-energy.vercel.app" className="block w-full h-full relative">
                            <img
                                src={energy || "/placeholder.svg"}
                                alt="Solar panels at sunset"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 rounded-2xl"></div>
                            <div className="absolute inset-0 p-4 flex flex-col justify-between">
                                <div className="py-4 px-2">
                                    <span className="px-4 py-2 bg-[#B3E951] text-[#2D3D11] text-sm font-semibold rounded-[8px]">
                                        ENERGY
                                    </span>
                                    <p className="text-white font-medium max-w-[80%] text-sm md:text-xl mt-6">

                                        Reliable energy solutions that drive progress for <br /> businesses and communities.
                                    </p>
                                </div>
                                <div className="text-white text-xs md:text-sm font-medium">Explore Harlivia Energy →</div>
                            </div>
                        </Link>
                    </div>

                    {/* Agric Card */}
                    <div className="md:col-span-5 relative rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-900/30 h-[339px]">
                        <Link to="https://harlivia-agric.vercel.app" className="block w-full h-full relative">
                            <img
                                src={agric || "/placeholder.svg"}
                                alt="Grain products"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 rounded-2xl"></div>
                            <div className="absolute inset-0 p-4 flex flex-col justify-between">
                                <div className="py-4 px-2">
                                    <span className="px-4 py-2 bg-[#335CFF] text-white text-sm font-semibold rounded-[8px]">
                                        AGRIC
                                    </span>
                                    <p className="text-white font-medium max-w-[80%] text-sm md:text-xl mt-6">
                                        We bring you the finest in quality, taste, <br /> and satisfaction.
                                    </p>
                                </div>
                                <div className="text-white text-xs md:text-sm font-medium">Explore Harlivia Agric →</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BentoGrid


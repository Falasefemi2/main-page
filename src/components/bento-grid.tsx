import frame2 from "../assets/Frame 6.png";
import frame4 from "../assets/Frame 11.png";
import frame5 from "../assets/image1.png";
import frame6 from "../assets/image2.png";
import { Link } from "react-router";

const BentoGrid = () => {
    return (
        <section className="w-full py-12 bg-[#F7F7F7]">
            <div className="container mx-auto px-4">
                {/* Header Text */}
                <div className="text-center mb-8">
                    <p className="text-sm text-gray-600 mb-2">
                        <span className="inline-block w-1 h-1 bg-gray-400 rounded-full mr-1"></span>
                        What we have to offer
                    </p>
                    <p className="text-gray-800 max-w-3xl mx-auto text-sm md:text-base">
                        Whether it's bringing joy through good food, helping you find the perfect home, powering communities with
                        sustainable energy and affordable metering solutions, or getting your goods where they need to be, we do it
                        with passion and purpose.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Properties Card */}
                    <div className="md:col-span-5 relative rounded-2xl overflow-hidden">
                        {/* Added  for mobile, md:aspect-auto to reset on larger screens */}
                        <Link to="https://harlivia-properties.vercel.app" className="w-full h-full  md:aspect-auto">
                            <img
                                src={frame2 || "/placeholder.svg"}
                                alt="Modern building interior"
                                className="w-full h-full object-cover rounded-2xl" // Keep object-cover
                            />
                        </Link>
                    </div>

                    {/* Cargo & Logistics Card */}
                    <div className="md:col-span-7 relative rounded-2xl overflow-hidden">
                        {/* Added  for mobile, md:aspect-auto to reset on larger screens */}
                        <Link to="https://harlivia-cargo.vercel.app" className="w-full h-full  md:aspect-auto">
                            <img
                                src={frame6 || "/placeholder.svg"}
                                alt="Delivery person on motorcycle"
                                className="w-full h-full object-cover rounded-2xl" // Keep object-cover
                            />
                        </Link>
                    </div>

                    {/* Energy Card */}
                    <div className="md:col-span-7 relative rounded-2xl overflow-hidden">
                        {/* Added  for mobile, md:aspect-auto to reset on larger screens */}
                        <Link to="https://harlivia-energy.vercel.app" className="w-full h-full  md:aspect-auto">
                            <img
                                src={frame5 || "/placeholder.svg"}
                                alt="Solar panels at sunset"
                                className="w-full h-full object-cover rounded-2xl" // Keep object-cover
                            />
                        </Link>
                    </div>

                    {/* Agric Card */}
                    <div className="md:col-span-5 relative rounded-2xl overflow-hidden">
                        {/* Added  for mobile, md:aspect-auto to reset on larger screens */}
                        <Link to="https://harlivia-agric.vercel.app" className="w-full h-full  md:aspect-auto">
                            <img
                                src={frame4 || "/placeholder.svg"}
                                alt="Grain products"
                                className="w-full h-full object-cover rounded-2xl" // Keep object-cover
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
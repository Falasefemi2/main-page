export default function HeroSection() {
    return (
        <div className="w-full bg-white dark:bg-gray-950 py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="flex flex-col items-center text-center space-y-6">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white leading-tight">
                        Building Better Lives Through Innovation, Excellence, and Impact.
                    </h1>

                    <p className="text-sm md:text-base text-[#767676] dark:text-gray-400 max-w-3xl">
                        From quality organic farm produce and luxury bed linens to sustainable energy and seamless logistics, the
                        Kora mission is to transform industries and enrich everyday life experiences for everyone across Africa and
                        beyond.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
                        <button className="px-6 py-3 rounded-md bg-[#335CFF] text-white font-medium hover:bg-[#335CFF]/90 transition-colors dark:bg-blue-600 dark:hover:bg-blue-700">
                            Explore Our Ecosystem
                        </button>

                        <button className="px-6 py-3 rounded-md bg-[#F5F7FA] text-gray-800 dark:bg-gray-800 dark:text-gray-100 font-medium hover:bg-[#F5F7FA]/90 dark:hover:bg-gray-700 transition-colors">
                            Partner with Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


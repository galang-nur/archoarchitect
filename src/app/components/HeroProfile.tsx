import Image from "next/image";
import Link from "next/link";

export default function HeroProfile() {
    return (
        <section className="bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                    <Image
                        alt=""
                        src="/lance-anderson-QdAAasrZhdk-unsplash.jpg"
                        className="absolute inset-0 h-full w-full object-cover"
                        width={1000}
                        height={1000}
                    />
                    </div>
            
                    <div className="lg:py-24">
                    <h2 className="text-3xl font-bold sm:text-4xl text-teal-500">Where Vision Meets Reality</h2>
            
                    <p className="mt-4 text-gray-200">
                        With a meticulous eye for detail and a passion for innovation, we specialize in creating spaces that inspire, uplift, and exceed expectations. From concept to completion, we collaborate closely with our clients to ensure every design reflects their unique style, needs, and aspirations.
                    </p>
            
                    <Link
                        href="/"
                        className="mt-8 inline-block rounded bg-teal-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-400"
                    >
                        Get Started Today
                    </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
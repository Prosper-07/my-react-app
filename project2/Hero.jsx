import React from "react";

const Hero = ()=>{
    return(
        <>
<section id="hero" className="h-screen bg-gradient-to-r from-blue-500 to-purple-400 pt-70 sm:pt-70 md:pt-70 lg:pt-70 text-center px-4">
    <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-black font-serif mb-2">
        Everyday Tech, Done Right
    </h2>
    <p className="text-gray-900 text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto">
        Evoryte offers Computers and its accessories, renewable energy solutions, networking & <br className="hidden sm:block" />
        connectivity devices, and portable tech gadgets for everyday needs.
    </p>
    <button className="bg-gradient-to-l from-purple-400 to-purple-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-purple-500 hover:to-purple-400 hover:underline transition">
        Explore Products
    </button>
</section>


        </>
    )
}
export default Hero
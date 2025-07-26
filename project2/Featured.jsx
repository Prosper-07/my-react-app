import React from "react";

const Featured = ()=>{
    return(
        <>
        <div className="bg-gray-200 text-center  pt-26 p-10">
            <h3 className="text-center py-8 text-3xl font-bold">Featured Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 text-sm">
                <div className="flex flex-col items-center shadow-[0_0_10px_rgba(0,0,0,0.2)] border border-white rounded-xl p-4 hover:border-purple-500 hover:scale-105 transition duration-300">
                    <img src="/images/elitebook1.jpg" alt="" className="h-60 w-60 rounded"/>
                    <h4 className="text-xl font-bold pb-2 pt-2">HP EliteBook 1040 x360 G6</h4>
                    <p className="text-lg mb-2">Reliable business laptop, perfect for professionals and students.</p>
                    <button className="mt-2 font-bold text-lg text-white"><a href="https://wa.me/+23409134254396" className="hover:from-purple-500 hover:to-blue-300 bg-gradient-to-r from-blue-500 to-purple-500 py-2 px-6  rounded-xl transition">
                    Ask on Whatsapp
                    </a></button>
                </div>
                <div className="flex flex-col items-center shadow-[0_0_10px_rgba(0,0,0,0.2)] border border-white rounded-xl p-4 hover:border-purple-500 hover:scale-105 transition duration-300">
                    <img src="/images/TD-LTE TD-PB57 20000mAh Power Bank 1.jpg" alt="" className="h-60 w-60 rounded"/>
                    <h4 className="text-xl font-bold pb-2 pt-2">TD-LTE 20000mAh Power Bank</h4>
                    <p className="text-lg mb-2">Keep your devices charged on the go.</p>
                    <button className="mt-2 font-bold text-lg text-white"><a href="https://wa.me/+23409134254396" className="hover:from-purple-500 hover:to-blue-300 bg-gradient-to-r from-blue-500 to-purple-500 py-2 px-6  rounded-xl transition">
                    Ask on Whatsapp
                    </a></button>
                </div>
                <div className="flex flex-col items-center shadow-[0_0_10px_rgba(0,0,0,0.2)] border border-white rounded-xl p-4 hover:border-purple-500 hover:scale-105 transition duration-300">
                    <img src="/images/camedio 1.jpg" alt="" className="h-60 w-60 rounded"/>
                    <h4 className="text-xl font-bold pb-2 pt-2">Camedio XBT high quality wireless headphone</h4>
                    <p className="text-lg mb-2">Enjoy rich, wireless sound and all-day comfort for music, calls, and gaming.</p>
                    <button className="mt-2 font-bold text-lg text-white"><a href="https://wa.me/+23409134254396" className="hover:from-purple-500 hover:to-blue-300 bg-gradient-to-r from-blue-500 to-purple-500 py-2 px-6  rounded-xl transition">
                    Ask on Whatsapp
                    </a></button>
                </div>
                <div className="flex flex-col items-center shadow-[0_0_10px_rgba(0,0,0,0.2)] border border-white rounded-xl p-4 hover:border-purple-500 hover:scale-105 transition duration-300">
                    <img src="/images/keyboard 1.jpg" alt="" className="h-60 w-60 rounded"/>
                    <h4 className="text-xl font-bold pb-2 pt-2">Bluetooth keyboard</h4>
                    <p className="text-lg mb-2">Portable, quiet, and connects easily to all your devices for effortless typing.</p>
                    <button className="mt-2 font-bold text-lg text-white"><a href="https://wa.me/+23409134254396" className="hover:from-purple-500 hover:to-blue-300 bg-gradient-to-r from-blue-500 to-purple-500 py-2 px-6  rounded-xl transition">
                    Ask on Whatsapp
                    </a></button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Featured
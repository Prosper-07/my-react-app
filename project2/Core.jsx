import React from "react";
const Core =()=>{
    return(
        <>
        <h3 className="text-center py-8 text-3xl font-bold">Our Core Offerings</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10 text-sm text-center">
    <div className="shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded flex flex-col items-center text-center p-6 text-lg">
        <img src="/images/computer-accessories 2.jpg" alt="image" className="w-40 rounded-xl" />
        <h4 className="font-bold py-2 text-lg">Computer & Accessories</h4>
        <p>Laptops, keyboards, external drives, and more for work, study, and play.</p>
    </div>
    <div className="shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded flex flex-col items-center text-center p-6 text-lg">
        <img src="/images/renwwable-energy 3.jpg" alt="" className="w-40 rounded-xl" />
        <h4 className="font-bold py-2 text-lg">Renewable Energy</h4>
        <p>Rechargeable fans, solar-powered devices, and energy solutions for all.</p>
    </div>
    <div className="shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded flex flex-col items-center text-center p-6 text-lg">
        <img src="/images/networking-tools.jpg" alt="" className="w-40 rounded-xl" />
        <h4 className="font-bold py-2 text-lg">Networking & Connectivity</h4>
        <p>Routers, Wi-Fi extenders, modems, and more to keep you connected.</p>
    </div>
    <div className="shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded flex flex-col items-center text-center p-6 text-lg">
        <img src="/images/portable-tech 2.jpg" alt="" className="w-40 rounded-xl" />
        <h4 className="font-bold py-2 text-lg">Portable Tech Gadgets</h4>
        <p>Routers, Wi-Fi extenders, modems, and more to keep you connected.</p>
    </div>
</div>

        </>
    )
}
export default Core
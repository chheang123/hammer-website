import img from "../public/img/image-removebg-preview(38).png"

function App() {
  
  

  return (
    <div>
    <div className="flex items-center justify-between bg-yellow-500 px-2 py-4 text-black  ">
      <h1 className="text-2xl font-bold ">
        HAMMER ⌚
      </h1>
      <nav className="hidden md:flex gap-14 font-bold ">
        <a href="#" className="hover: text-black">HOME</a>
        <a href="#" className="hover: text-black">PRODUCTS</a>
        <a href="#" className="hover: text-black">YEAR</a>
        <a href="#" className="hover: text-black">ABOUT</a>
      </nav>
      <button className="md:hidden text-3xl"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#000" d="M3 7h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m18 10H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0-4H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0-4H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2" stroke-width="0.5" stroke="#000"/></svg></button>
    </div>
    <div className="text-center ">
     <img src={img}className="mx-auto mt-24 animate-bounce " />
     
      <img src="img/image-removebg-preview(26).png" className="mx-auto mt-15 " />
      <div>
        <a href="https://www.google.com/search?q=smart+watch+hammer&client=firefox-b-d&hs=cZHp&sca_esv=9cf1df91a9197cf6&aep=1&udm=2&biw=496&bih=793&aic=0&sxsrf=ANbL-n4e00-Y6Edje8EnoSTiFhk54vNSIA%3A1770102241783&ei=4Z2Baae2L6ys0-kP8ISesA4&ved=0ahUKEwjnqtna4LySAxUs1jQHHXCCB-YQ4dUDCBI&uact=5&oq=smart+watch+hammer&gs_lp=Egtnd3Mtd2l6LWltZyISc21hcnQgd2F0Y2ggaGFtbWVyMgcQIxgnGMkCMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBBAAGB4yBBAAGB4yBhAAGAgYHjIGEAAYCBgeMgYQABgIGB5Isg5Q4wVY5QdwAngAkAEAmAFfoAFfqgEBMbgBA8gBAPgBAZgCA6ACnQHCAgUQABiABMICBhAAGAUYHpgDAIgGAZIHAzIuMaAH3wayBwMwLjG4B3DCBwUzLTIuMcgHNIAIAA&sclient=gws-wiz-img" target="blenk">
        <button className="bg-blue-500 px-8 py-3 rounded-full hover:bg-pink-500 mt-20"> HAMMER</button>
        </a>
      </div>
      <div className="mt-14">
       
        <div className="w-full">
    <div className="w-full relative aspect-[16/9] md:h-screen ">
      <div className="absolute inset-0 bg-[url('img/hammerlogo4.jpg')]  bg-cover bg-center "></div>
    </div>
    <div className="w-full relative aspect-[16/9] md:h-screen">
      <div className="absolute inset-0 bg-[url('img/hammerlogo5.jpg')] bg-cover bg-center"></div>
    </div>
    </div>
      </div>
      
    </div>
    <div className="text-center mt-16 font-bold text-6xl font-serif">
      <h1 className="text-yellow-500">PRODUCTS</h1>
      <h2 className="text-pink-500">SMART WATCH HAMMER</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 mt-15 ">

      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="img/image-removebg-preview(25).png" className="w-65 h-65 object-contain mt-6 " />
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">HAMMER Active 2.0 Plus 2.1</h1>
        <p className="text-black">HAMMER Active 2.0 Plus 2.1" HD Display Smart Watch with Gesture Control, Bluetooth
           Calling, DIY Watch Face Studio, Sports Modes,Functional Crown, Dynamic Island Notification, Menstrual Cycle (Blue) </p>
           <a href="https://www.amazon.in/HAMMER-Bluetooth-Functional-Notification-Menstrual/dp/B0CQYMFS98" target="blenk">
           <button className="bg-pink-700 hover:bg-pink-500 px-5 py-2 rounded-full mt-5">Check it out.</button>
           </a>
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="img/image-removebg-preview(36).png" className="w-70- h-70 object-center mt-5 " />
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">HAMMER Watch 2</h1>
        <p className="text-black">eine ultra-resistente Smartwatch mit AMOLED-Display. Smartwatch mit zwei Wochen Akkulaufzeit, 5 ATM Wasserdichte und Gesundheitsüberwachung. Ideal für Outdoor-Aktivitäten und Extremsportarten, </p>
        <a href="https://www.gsm55.de/ref/103820-smartwatch-hammer-watch-2-schwarz.html?srsltid=AfmBOoq43WoZbZ9uLDK1AQEGY9HCAcQK-UCYIYaL0DhfCsQNYJCMQNbD" target="blenk">
        <button className="bg-pink-700 hover:bg-pink-500 px-5 py-2 rounded-full mt-2">Check it out.</button>
        </a>
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="img/image-removebg-preview(31).png"  className="w-70 h-70 object-center mt-5"/>
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl ">Classic 3</h1>
        <p className="text-black">IP67 It is water and dust-resistant So go ahead and put it on and jump into your daily chores without any hesitation.
        It monitors your Heart rate, blood pressure, blood oxygen level (SpO2), state of deep sleep light sleep and awake , </p>
        <a href="https://www.xcellme.com/product/classic-3-talk-smart-watch-pink-silicon-strap/" target="blenk">
        <button className="bg-pink-700 hover:bg-pink-500 px-5  py-2 rounded-full mt-2">Check it out.</button>
        </a>
        
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="img/image-removebg-preview(32).png"  className="w-70 h-70 object-center mt-5"/>
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">Noise</h1>
        <p className="text-black">Noise Fit Halo with Textured Strap Bluetooth Calling Round Dial Smart Watch 1.43 AMOLED Display Premium
           Metallic Build Always on Display Smart Touch Tech HR Stress Monitor-Statement Black Buy Online,year nosie 2026</p>
        <a href="https://www.w4blackfriday.com/?ggcid=1613426" target="blenk">
        <button className="bg-pink-700 hover:bg-pink-500 px-5  py-2 rounded-full mt-2">check it out.</button>
        </a>
        
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="img/image-removebg-preview(33).png"  className="w-70 h-70 object-center mt-5"/>
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">New Zw63</h1>
        <p className="text-black">The
         New ZW63 is a generic-brand smartwatch that features a 1.39-inch round HD display, Bluetooth calling,
         and a variety of health and fitness tracking capabilities. It is often sold by different manufacturers under various brand names, </p>
         <a href="https://ainville.en.made-in-china.com/product/eQJptwMbHLUO/China-New-Zw63-Smart-Watch-Bluetooth-Call-Round-Screen.html" target="blenk">
         <button className="bg-pink-700 hover:bg-pink-500 px-5 py-2 rounded-full mt-2">Check it out.</button>
         </a>
        
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="img/image-removebg-preview(34).png"  className="w-70 h-70 object-center mt-5"/>
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">Hammer</h1>
        <p className="text-black">The touchscreen 1.3" color display on the HAMMER Watch is protected by additional bumpers,
           and the display stands out with high contrast for reading in bright sunlight. Switch between one 
           of the three main dials and match it to your circumstances and taste.</p>
           <a href="https://hammerphones.com/en/product/hammer-watch?srsltid=AfmBOopjGCQYkHwCssgZ8AkCfYeKV_b113YV0wJ2WJsBTFxLulRXz98T" target="blenk">
           <button className="bg-pink-700 hover:bg-pink-500 px-5 py-2 rounded-full mt-2">Check it out.</button>
           </a>
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="img/image-removebg-preview(35).png"  className="w-70 h-70 object-center mt-5"/>
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">Hammer</h1>
        <p className="text-black">Introducing the HAMMER Active 2 LTE, a 5-inch rugged companion featuring a powerful battery,
           LTE for superior mobility, and a lightweight Android 8.1 Oreo GO Edition system. Tackle daily challenges with confidence.</p>
           <a href="https://hammerphones.com/en/product/hammer-watch?srsltid=AfmBOopyFShMkzp4hfux-DHRH-vmeNgb49XowPP82LxvHXdP2xtjHJn_" target="blenk">
           <button className="bg-pink-700 hover:bg-pink-500 px-5 py-2 rounded-full mt-2">Check it out.</button>
           </a>
        
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="img/image-removebg-preview(39).png"  className="w-70 h-70 object-center mt-5"/>
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">Smart Watch</h1>
        <p className="text-black">This modern smart watch features a stylish design with a red strap that is comfortable and perfect for everyday use.
         It helps you monitor important health and fitness data, including: Heart Rate Steps Calories Burned Temperature</p>
         <a href="https://topnicebcd.click/product_details/5931551.html" target="blenk">
         <button className="bg-pink-700 hover:bg-pink-500 px-5 py-2 rounded-full mt-2">Check it out.</button>
         </a>
        
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="img/image-removebg-preview(40).png"  className="w-70 h-70 object-center mt-5"/>
        <h1 className="text-gray-900 font-semibold text-center text-2xl">Hammer</h1>
        <p className="text-black">1.39" Radiant IPS Always On Display: Radiate Confidence with the Unisex smart watch for women and men with 
          1.39" IPS Display, Pixel Resolution of 240*240, a Stunning 600 Nits Brightness and Always On Display </p>
          <a href="https://www.amazon.in/HAMMER-Active-3-0-Bluetooth-Notifications/dp/B0CH8NQNZV?th=1"target="blenk">
          <button className="bg-pink-700 hover:bg-pink-500 px-5 py-2 rounded-full mt-2">Check it out.</button>
          </a>
        
      </div>
      

    </div>

    
    
    
    </div>

  )
}

export default App

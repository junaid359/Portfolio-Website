import React from "react";
import Aboutcart from "./component/Aboutcart.jsx";
import Feedback from "./component/Feedback.jsx";

function App() {
  return (
    <main className="p-5 px-20 m-0 bg-blue-950 min-h-screen">
      {/* Navbar */}
      <nav className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-semibold m-0 p-10 ml-5">JH Tech</h1>
        <ul className="flex flex-row justify-between items-center gap-6 m-0 p-0">
          <li className="text-lg text-gray-100 m-0 p-0">Home</li>
          <li className="text-lg text-gray-100 m-0 p-0">About</li>
          <li className="text-lg text-gray-100 m-0 p-0">Work</li>
          <li className="text-lg text-gray-100 m-0 p-0">Contact</li>
        </ul>
      </nav>
      {/* Navbar */}

      {/* Header */}
      <header className="p-32 flex flex-col justify-center items-center gap-3 relative">
        <p className="text-2xl">Hi, I am Junaid Hossain</p>
        <h1 className="text-6xl font-bold text-gray-100">
          Build Your Dream Website
        </h1>
        <img
          src="/assets/computer-man.png"
          alt="Computer Man"
          className="w-[500px]"
        />
        <img
          src="/assets/header-img1.png"
          alt="Decorative"
          className="w-[150px] absolute left-10 top-10"
        />
        <img
          src="/assets/header-img2.png"
          alt="Decorative"
          className="w-[150px] absolute right-10 top-10"
        />
        <img
          src="/assets/header-img4.png"
          alt="Decorative"
          className="w-[150px] absolute left-10 bottom-10"
        />
        <img
          src="/assets/header-img3.png"
          alt="Decorative"
          className="w-[150px] absolute right-10 bottom-10"
        />
      </header>
      {/* Header */}

      {/* About Section */}
      <section className="py-10 mb-5">
        <h1 className="text-3xl font-bold mb-5 text-white">About Me</h1>
        <div className="flex gap-5">
          <div className="w-4/6 flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-5">
              <Aboutcart Source="/assets/about-img1.png" />
              <Aboutcart Source="/assets/about-img2.png" />
            </div>
            <Aboutcart Source="/assets/about-img3.png" />
          </div>
          <div className="w-2/6 flex flex-col gap-5">
            <Aboutcart Source="/assets/about-img4.png" />
            <Aboutcart Source="/assets/about-img5.png" />
          </div>
        </div>
      </section>
      {/* About Section */}

      {/* Work Section */}
      <section className="py-10">
        <div className="text-2xl font-bold mb-5">My Projects</div>
        <div className="flex flex-row gap-5 justify-center items-center">
          {/* First Project */}
          <div
            className="p-5 rounded-xl h-[500px] w-[650px] bg-cover bg-center bg-no-repeat flex flex-col justify-between items-start"
            style={{ backgroundImage: "url('/assets/spotlight1.png')" }}
          >
            <div className="bg-gradient-to-br rounded-lg shadow p-5">
              <img
                src="/assets/project-logo1.png"
                className="h-8"
                alt="Project Logo"
              />
            </div>

            <div className="text-white text-xl font-bold mt-5">My Work</div>
            <h1 className="text-2xl font-bold">
              Postcaster - AI Postcaster Platform
            </h1>
            <p className="text-gray-500 text-sm">
              This platform idea could appeal to both independent podcasters
              and large podcast networks. Whether you're building the platform
              yourself or exploring the space, AI can massively enhance both
              content creation and consumption.
            </p>

            <div className="flex flex-row justify-between items-center mt-auto w-full">
              <div className="flex gap-2">
                {/* Technology Icons */}
                <div className="bg-gradient-to-br rounded-lg shadow p-2 border border-gray-700">
                  <img
                    src="/assets/project-logo1.png"
                    className="h-5"
                    alt="Project Logo"
                  />
                </div>
                <div className="bg-gradient-to-br rounded-lg shadow p-2 border border-gray-700">
                  <img
                    src="/assets/jsm-logo.png"
                    className="h-5"
                    alt="JSM Logo"
                  />
                </div>
                <div className="bg-gradient-to-br rounded-lg shadow p-2 border border-gray-700">
                  <img
                    src="/assets/tailwindcss.png"
                    className="h-5"
                    alt="Tailwind CSS"
                  />
                </div>
                <div className="bg-gradient-to-br rounded-lg shadow p-2 border border-gray-700">
                  <img
                    src="/assets/project-logo4.png"
                    className="h-5"
                    alt="Project Logo"
                  />
                </div>
              </div>

              {/* Check Live Site Section */}
              <div className="flex flex-col items-center ml-auto">
                <p className="text-xl mb-2">Check live site</p>
                <div className="bg-gradient-to-br rounded-lg shadow p-2 border border-gray-500">
                  <img
                    src="/assets/arrow-up.png"
                    className="h-5"
                    alt="Arrow Up"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center place-items-center gap-2 mt-4">
              <div className="p-1 rounded-full bg-black"></div>
              <div className="p-1 rounded-full bg-gray-300"></div>
              <div className="p-1 rounded-full bg-black"></div>
              <div className="p-1 rounded-full bg-black"></div>
              <div className="p-1 rounded-full bg-black"></div>
            </div>
          </div>

          {/* Second Project */}
          <div
            className="p-5 rounded-xl h-[500px] w-[650px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/assets/work-computer.png')" }}
          >
            <div className="text-white text-xl font-bold">My Work</div>
          </div>
        </div>
      </section>


      {/*review*/}
      
      <section className="py-6">
          <h1 className="text-2xl font-bold mb-10">My Clients</h1>
          <div className="grid grid-cols-2 gap-5 mb-5">
          <Feedback Source="/assets/review1.png" />
          <Feedback Source="/assets/review2.png" />
          <Feedback Source="/assets/review3.png" />
          <Feedback Source="/assets/review4.png" />

          </div>
        </section>
        {/*review*/}

         {/*Let's talk*/} 
         
         <div className="p-10 rounded-xl bg-[url('/assets/terminal.png')] bg-cover bg-no-repeat h-[700px] w-[70%] mx-auto">
          
        <h1 className='text-3xl font-bold flex justify-center pt-10'> Let's Talk</h1>
        <div className="py-3 flex flex-col items-start gap-2 w-1/2 mx-auto">
  <div className="text-gray-500">Full Name</div>
  <input 
    type="text" 
    placeholder="JH Tech" 
    className="text-gray-500 p-3 rounded-lg bg-gray-900 w-full"
  />
</div>

<div className="py-3 flex flex-col items-start gap-2 w-1/2 mx-auto">
  <div className="text-gray-500">Email</div>
  <input 
    type="email" 
    placeholder="Jhtech@mail.net" 
    className="text-gray-500 p-3 rounded-lg bg-gray-900 w-full"
  />
</div>

<div className="py-3 flex flex-col items-start gap-2 w-1/2 mx-auto">
  <div className="text-gray-500">Write something to JH Tech</div>
  <textarea 
    placeholder="Say hello to JH Tech" 
    className="text-gray-500 p-3 rounded-lg bg-gray-900 w-full h-40"
  />

  <button className="p-3 w-full font-semibold rounded-lg bg-gray-400">
    Send Message
</button>
</div>

</div>

{/*Let's talk*/}

{/*Footer*/}
<footer className="flex justify-between items-center">
  <p className="text-gray-400 pt-8">Terms & Condition | Privacy Policy</p>
  <p className="text-gray-400 pt-8">2024 JH Tech All rights | Privacy Policy</p>




</footer>





{/*Footer*/}


    </main>
  );
}

export default App;

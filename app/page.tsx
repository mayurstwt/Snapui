import HomePage from "./Pages/Homepage/Page";

export default function Home() {
  return (
    // <div className="flex justify-center items-center h-screen bg-gray-100">
    //   <div className="grid grid-cols-5 gap-4">
    //     <Link href="/Navbars/SimpleNavbarOne" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Simple Navbar One
    //       </button>
    //     </Link>
    //     <Link href="/Navbars/SimpleNavbarTwo" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Simple Navbar Two
    //       </button>
    //     </Link>
    //     <Link href="/Navbars/SimpleNavbarThree" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Simple Navbar Three
    //       </button>
    //     </Link>
    //     <Link href="/Navbars/SimpleNavbarFour" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Simple Navbar Four
    //       </button>
    //     </Link>
    //     <Link href="/Navbars/SimpleNavbarFive" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Simple Navbar Five
    //       </button>
    //     </Link>
    //     <Link href="/Navbars/SimpleNavbarSix" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Simple Navbar Six
    //       </button>
    //     </Link>
    //     <Link href="/Navbars/SimpleNavbarSeven" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Simple Navbar Seven
    //       </button>
    //     </Link>
    //     <Link href="/Navbars/SimpleNavbarEight" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Simple Navbar Eight
    //       </button>
    //     </Link>
    //     <Link href="/Navbars/SimpleNavbarNine" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Simple Navbar Nine
    //       </button>
    //     </Link>
    //     <Link href="/Navbars/SimpleNavbarTen" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Simple Navbar Ten
    //       </button>
    //     </Link>




    //     <Link href="/Heros/SimpleHeroOne" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Simple Hero One
    //       </button>
    //     </Link>

    //     <Link href="/Heros/SimpleHeroTwo" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Simple Hero Two
    //       </button>
    //     </Link>

    //     <Link href="/Heros/SimpleHeroThree" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Simple Hero Three
    //       </button>
    //     </Link>


    //     <Link href="/Heros/SimpleHeroFour" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Simple Hero Four
    //       </button>
    //     </Link>


    //     <Link href="/Heros/SimpleHeroFive" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Simple Hero Five
    //       </button>
    //     </Link>

    //     <Link href="/Heros/CreativeAgencyHero" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Creative Agency Hero
    //       </button>
    //     </Link>

    //     <Link href="/Heros/EcoFriendlyHero" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Eco-Friendly Hero
    //       </button>
    //     </Link>

    //     <Link href="/Heros/EcommerceHero" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Ecommerce Hero
    //       </button>
    //     </Link>

    //     <Link href="/Heros/EducationHero" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Education Hero
    //       </button>
    //     </Link>


    //     <Link href="/Heros/FinanceHero" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Finance Hero
    //       </button>
    //     </Link>

    //     <Link href="/Heros/GamingHero" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Gaming Hero
    //       </button>
    //     </Link>

    //     <Link href="/Heros/ModernTechHero" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Modern Tech Hero
    //       </button>
    //     </Link>

    //     <Link href="/Heros/SaasHero" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         SaaS Hero
    //       </button>
    //     </Link>

    //     <Link href="/Heros/TravelHero" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Travel Hero
    //       </button>
    //     </Link>

    //     <Link href="/Heros/WellnessHero" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Wellness Hero
    //       </button>
    //     </Link>



    //     <Link href="/Bentos/CreativeBento" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Creative Bento
    //       </button>
    //     </Link>

    //     <Link href="/Bentos/TechBento" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Tech Bento
    //       </button>
    //     </Link>


    //     <Link href="/Bentos/NatureBento" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Nature Bento
    //       </button>
    //     </Link>

    //     <Link href="/Bentos/CulinaryBento" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Culinary Bento
    //       </button>
    //     </Link>

    //     <Link href="/Bentos/TravelBento" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Travel Bento
    //       </button>
    //     </Link>

    //     <Link href="/Bentos/MusicBento" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Music Bento
    //       </button>
    //     </Link>

    //     <Link href="/Bentos/FitnessBento" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Fitness Bento
    //       </button>
    //     </Link>




    //     <Link href="/Footer/SimpleFooter" target="_blank">
    //       <button className="w-full p-3 bg-black text-white rounded hover:bg-gray-700 transition duration-300">
    //         Simple Footer
    //       </button>
    //       </Link>

    //   </div>
    // </div>

    <HomePage/>
  );
}

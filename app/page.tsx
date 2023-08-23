"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [nav, setnav] = useState(false);
  const handleNav = () => {
    setnav(!nav);
  };
  return (
    <>
      <motion.header
        animate={{
          opacity: 1,
          scale: 1,
         
        }}
        initial={{ opacity: 0, scale: 0.4 }}
        transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
        className="p-6 bg-slate-700 "
      >
        <nav className="flex justify-between items-center w-[92%] mx-auto ">
          <div>
            <img src="./favicon.ico" width={30} height={32} />
          </div>
          <div className="  ">
            <ul className="hidden  text-lg md:flex  flex-row items-start gap-12 cursor-pointer ">
              <li className="  hover:text-white">Home</li>
              <li className="hover:text-gray-500">About</li>
              <li className="hover:text-gray-500">Links</li>
              <li className="hover:text-gray-500">Portfolio</li>
              <li className="hover:text-gray-500">Contact Us</li>
            </ul>
          </div>
          <div>
            <a
              href="#"
              className="bg-slate-500 px-3 py-3 rounded-full text-yellow-50 hover:bg-orange-200 hover:text-slate-400 sm:text-lg sm:px-2 sm:py-2  "
            >
              Sign In
            </a>
          </div>
          {/* hamburger menu */}
          <div onClick={handleNav} className="md:hidden z-10">
            {nav ? (
              <img
                src="/icons8-close-96.png"
                width={32}
                height={32}
                className=""
              />
            ) : (
              <img
                src="/icons8-menu-96.png"
                width={32}
                height={32}
                className=""
              />
            )}
          </div>

          <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{ duration: 0.6, delay: 0.9, type: "spring" }}
          
            className={
              nav
                ? "absolute bg-fuchsia-600 h-[80vh] inset-0 lg:hidden md:hidden"
                : "hidden"
            }
          >
            <motion.ul animate={{
            opacity: 1,
            scale: 1,
            }}
          initial={{ opacity: 0, scale: 0.4 }}
          transition={{ duration: 0.9, delay: 0.9, type: "spring" }} className="h-full grid place-items-center  py-20 ">
              <li className="  hover:text-white text-lg">Home</li>
              <li className="hover:text-gray-500 text-lg">About</li>
              <li className="hover:text-gray-500 text-lg">Links</li>
              <li className="hover:text-gray-500 text-lg">Portfolio</li>
              <li className="hover:text-gray-500 text-lg">Contact Us</li>
            </motion.ul>
          </motion.div>
        </nav>
      </motion.header>
      <section className="pt-10 m-6">
        <motion.p
          animate={{
            opacity: 1,
            scale: 1,
            color: "orange",
          }}
          initial={{ opacity: 0, scale: 0.4 }}
          transition={{ duration: 0.6, delay: 0.9, type: "spring" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ex
          eius sed? Laborum nesciunt officia ut, nostrum ipsa, provident
          sapiente, inventore cum nulla omnis minima totam vero quibusdam ab
          animi? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Debitis laborum nisi perferendis quisquam nobis tempore reiciendis
          architecto incidunt quia, quam perspiciatis dignissimos ratione
          impedit maiores dolorem minus blanditiis magni nam odit sapiente alias
          quas voluptate consequuntur suscipit! Quis dolorem, ex est sit
          reiciendis nesciunt a repellat non corporis? Eius, impedit.
        </motion.p>
      </section>
    </>
  );
}

// <main className="flex pt-20 pl-5 pb-28">
//       <motion.div
//         className="w-32 rounded-lg h-32 border bg-slate-600 inline pb-28"
//         animate={{
//           x: 900,
//           opacity: 1,
//           rotate: 90,
//         }}
//         whileTap={{
//           scale: 0.5,
//         }}
//         initial={{
//           opacity: 0.1,
//         }}
//         transition={{
//           stiffness: 50,
//           type: "spring",
//           bounce: 233
//         }}
//       >

//       </motion.div>
//       <motion.p className="pb-28" animate={{
//         opacity: 1,  scale:1, color: "orange"
//       }} initial={{opacity:0, scale:0.4, }} transition={{duration: 0.6, delay:0.4 , type:"spring"}}>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, magni
//           doloribus? Sit deleniti reiciendis animi modi illo temporibus ex,
//           cumque porro odit ad perspiciatis aut eum debitis corporis aperiam
//           incidunt doloribus facilis aspernatur quos error saepe esse. Ut modi
//           ea sequi labore voluptate soluta neque sed, nesciunt ad. Provident
//           earum aperir quia nostrum quas doloremque asperiores
//           eaque, eligendi harum quidem. Nulla, quasi magnam placeat repellat
//           eligendi inventore lias commodi rerum quibusdam maxime? Repellat
//           natus necessitatibus asperiores sed molestias, error facere soluta
//           dignissimos. Placeat praesentium repellat, culpa vero velit quis
//           exercitationem ad magni nesciunt nulla beatae quae eligendi debitis
//           possimus aspernatur, labore atque illo! Omnis.
//         </motion.p>
//     </main>

"use client"; // Ensure this is a client-side component

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Link from "next/link";
import { Model } from "./tshirt"; // Adjust the import path if needed
import "./style.css";

function Merchandise() {
  const buyLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSdrFaBfxtSA1b4Vj4lffP1Vu6-tQpIVcUpFHxSOOVbM4Bn59g/viewform?usp=sf_link";

  return (
    <div className="flex flex-col justify-center items-center text-white">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">🌟 Our Merchandise</h1>
      </div>
      <div className="main md:p-10 md:ml-10 ml-0 overflow-hidden">
        <div className="textContainer flex flex-col justify-center md:w-[60vw] w-[100vw]">
          <p className="md:text-lg text-sm md:mb-16 mb-6 md:mt-4 mt-3 md:p-0 p-4 text-gray-300">
            Stand out from the crowd and show your support for the Techverse community with our exclusive merchandise! 
            Don&apos;t miss the chance to own an official Techverse T-shirt that&apos;s not only stylish but also a great way to connect with others who share your passion. 
            <br />
            <br />
            Upgrade your wardrobe today and join the Techverse community with our official merchandise T-shirt!
          </p>
          <div className="flex justify-center items-center ">
            <Link href={buyLink}>
              <div className="buynow text-center py-2 px-4 bg-purple-500 hover:bg-blue-700 text-white font-semibold rounded transition duration-200">
                Buy Now
              </div>
            </Link>
          </div>
        </div>
        <div className="canvasContainer">
          <Canvas camera={{ position: [0, 1, 3], fov: 60 }}>
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 2.2}
              maxPolarAngle={Math.PI / 2.2}
            />
            <directionalLight position={[0, 5, 0]} intensity={5} />
            <directionalLight position={[-5, 0, 0]} intensity={2} />
            <directionalLight position={[5, 0, 0]} intensity={2} />
            <ambientLight intensity={0.5} />
            <group position={[0, -1.2, 0]}>
              <Suspense fallback={<span>Loading model...</span>}>
                <Model scale={[1.3,1.3,1.3]} /> {/* Change scale here */}
              </Suspense>
            </group>
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default Merchandise;

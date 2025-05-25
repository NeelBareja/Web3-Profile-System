"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { useState, useCallback } from "react";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");
  const [bio, setBio] = useState("");
  const [userInfo, setUserInfo] = useState<string>("");
  
  const { data: userInfoData } = useScaffoldReadContract({
    contractName: "YourContract",
    functionName: "getUserInfo",
    args: [userInfo],
  });

  const { writeContractAsync } = useScaffoldWriteContract({contractName: "YourContract" });

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-gradient"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: ["#6366f1", "#a855f7", "#ec4899"],
            },
            links: {
              color: "#6366f1",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: ["circle", "triangle", "polygon"],
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <div className="relative">
              <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Web 3 Profile System
              </h1>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center items-center space-x-2 flex-col mt-8"
            >
              <p className="text-gray-400 mb-3 text-lg font-light">Connected Address</p>
              <div className="bg-black/40 backdrop-blur-xl px-6 py-3 rounded-2xl border border-gray-800 shadow-2xl">
                <Address address={connectedAddress} />
              </div>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Input Form Section */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-gray-800">
                <h2 className="text-3xl font-semibold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Add Your Information</h2>
                <div className="space-y-6">
                  <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                    <label className="text-gray-400 text-sm font-light">Name</label>
                    <motion.input 
                      whileFocus={{ scale: 1.02 }}
                      className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
                      type="text" 
                      placeholder="Enter your name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                    <label className="text-gray-400 text-sm font-light">Age</label>
                    <motion.input 
                      whileFocus={{ scale: 1.02 }}
                      className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
                      type="text" 
                      placeholder="Enter your age" 
                      value={age} 
                      onChange={(e) => setAge(e.target.value)} 
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                    <label className="text-gray-400 text-sm font-light">Profession</label>
                    <motion.input 
                      whileFocus={{ scale: 1.02 }}
                      className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
                      type="text" 
                      placeholder="Enter your profession" 
                      value={profession} 
                      onChange={(e) => setProfession(e.target.value)} 
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                    <label className="text-gray-400 text-sm font-light">Bio</label>
                    <motion.input 
                      whileFocus={{ scale: 1.02 }}
                      className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
                      type="text" 
                      placeholder="Enter your bio" 
                      value={bio} 
                      onChange={(e) => setBio(e.target.value)} 
                    />
                  </motion.div>
                  <motion.button 
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-4 rounded-xl font-medium hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all shadow-lg" 
                    onClick={() => writeContractAsync({
                      functionName: "setUserInfo",
                      args: [name, BigInt(age), profession, bio],
                    })}
                  >
                    Add User Info
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Read Info Section */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative group h-full"
            >
              {/* Adjusted background gradient for consistency */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-md opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-gray-800 h-full flex flex-col justify-between">
                <div>
                <h2 className="text-3xl font-semibold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Read User Information</h2>
                <div className="space-y-6">
                  <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                    <label className="text-gray-400 text-sm font-light">Address</label>
                    <motion.input 
                      whileFocus={{ scale: 1.02 }}
                      className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all" 
                      type="text" 
                      placeholder="Enter address to lookup" 
                      value={userInfo} 
                      onChange={(e) => setUserInfo(e.target.value)} 
                    />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6 p-6 bg-black/30 rounded-xl border border-gray-800 flex-grow flex items-center justify-center"
                  >
                    {userInfoData ? (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-black/40 transition-colors">
                          <span className="text-indigo-400 font-medium min-w-[100px]">Name:</span>
                          <span className="text-white">{userInfoData[0]}</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-black/40 transition-colors">
                          <span className="text-indigo-400 font-medium min-w-[100px]">Age:</span>
                          <span className="text-white">{userInfoData[1].toString()}</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-black/40 transition-colors">
                          <span className="text-indigo-400 font-medium min-w-[100px]">Profession:</span>
                          <span className="text-white">{userInfoData[2]}</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-black/40 transition-colors">
                          <span className="text-indigo-400 font-medium min-w-[100px]">Bio:</span>
                          <span className="text-white">{userInfoData[3]}</span>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-gray-500 text-lg font-light"
                      >
                        No User Info Found
                      </motion.p>
                    )}
                  </motion.div>
                </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

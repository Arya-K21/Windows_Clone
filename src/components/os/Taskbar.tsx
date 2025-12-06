"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Wifi, Volume2, Battery, ChevronUp, Search, AppWindow } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

interface TaskbarProps {
  onStartClick: () => void;
  isStartOpen: boolean;
  openWindows: { id: string; title: string; icon: any }[];
  activeWindowId: string | null;
  onWindowClick: (id: string) => void;
}

export const Taskbar = ({ onStartClick, isStartOpen, openWindows, activeWindowId, onWindowClick }: TaskbarProps) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 bg-white/85 dark:bg-[#202020]/85 backdrop-blur-xl border-t border-white/20 dark:border-white/5 z-50 flex items-center justify-between px-2 select-none">
      
      {/* Left Widget Area (Empty or Weaher) */}
      <div className="hidden md:flex flex-1 justify-start">
         <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/50 dark:hover:bg-white/10 transition-colors cursor-pointer text-xs group">
             {/* Weather Icon Placeholder */}
             <div className="flex flex-col">
                 <span className="font-semibold text-gray-700 dark:text-gray-200">72°F</span>
                 <span className="text-gray-500 dark:text-gray-400">Sunny</span>
             </div>
         </div>
      </div>

      {/* Center Icons */}
      <div className="flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
        
        {/* Start Button */}
        <div 
            className="p-2 rounded hover:bg-white/50 dark:hover:bg-white/10 transition-colors cursor-pointer active:scale-95 duration-100"
            onClick={onStartClick}
        >
             <div className="relative w-6 h-6">
                <div className="absolute inset-0 grid grid-cols-2 gap-[1px]">
                    <div className="bg-[#00a4ef]"></div>
                    <div className="bg-[#7fba00]"></div>
                    <div className="bg-[#f25022]"></div>
                    <div className="bg-[#ffb900]"></div>
                </div>
            </div>
        </div>

        {/* Search */}
        <div className="p-2 rounded hover:bg-white/50 dark:hover:bg-white/10 transition-colors cursor-pointer text-gray-700 dark:text-gray-200">
             <Search size={22} strokeWidth={2.5} />
        </div>

        {/* Task View */}
        <div className="p-2 rounded hover:bg-white/50 dark:hover:bg-white/10 transition-colors cursor-pointer text-gray-700 dark:text-gray-200 hidden sm:block">
             <div className="w-5 h-5 border-2 border-current rounded bg-transparent relative">
                 <div className="absolute -right-2 top-0 w-3 h-3 bg-current opacity-40 rounded-sm"></div>
             </div>
        </div>

        {/* Separator */}
        {openWindows.length > 0 && <div className="w-[1px] h-6 bg-gray-400/30 mx-1"></div>}

        {/* Open Apps */}
        {openWindows.map((win) => (
             <motion.div 
                key={win.id}
                layoutId={`taskbar-item-${win.id}`}
                className={cn(
                    "p-2 rounded transition-colors cursor-pointer relative group",
                    activeWindowId === win.id ? "bg-white/50 dark:bg-white/10" : "hover:bg-white/50 dark:hover:bg-white/5"
                )}
                onClick={() => onWindowClick(win.id)}
             >
                {/* Active Indicator */}
                <div className={cn(
                    "absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-gray-400 dark:bg-gray-400 transition-all",
                    activeWindowId === win.id ? "w-3 bg-blue-500" : "w-1"
                )} />
                
                <div className="w-6 h-6 flex items-center justify-center relative">
                    {win.icon ? (
                        typeof win.icon === "string" ? (
                            <Image src={win.icon} alt={win.title} fill className="object-contain" sizes="24px" />
                        ) : (
                            <win.icon size={22} className="text-blue-500" />
                        )
                    ) : ( 
                        <AppWindow size={22} className="text-blue-500" /> 
                    )}
                </div>

                {/* Tooltip Preview - Simplified */}
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity">
                    {win.title}
                </div>
             </motion.div>
        ))}

      </div>

      {/* Right System Tray */}
      <div className="flex-1 flex justify-end items-center gap-1">
          <div className="flex items-center gap-1 px-1 py-1 rounded hover:bg-white/50 dark:hover:bg-white/10 transition-colors cursor-pointer">
             <ChevronUp size={16} className="text-gray-600 dark:text-gray-300" />
          </div>

          <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/50 dark:hover:bg-white/10 transition-colors cursor-pointer h-full">
              <Wifi size={16} className="text-gray-700 dark:text-white" />
              <Volume2 size={16} className="text-gray-700 dark:text-white" />
              <Battery size={16} className="text-gray-700 dark:text-white rotate-90" />
          </div>

          <div className="flex flex-col items-end px-2 py-0.5 rounded hover:bg-white/50 dark:hover:bg-white/10 transition-colors cursor-pointer text-right">
              <span className="text-xs font-medium text-gray-700 dark:text-white leading-tight">
                  {format(time, "h:mm aa")}
              </span>
              <span className="text-[10px] text-gray-600 dark:text-gray-300 leading-tight">
                  {format(time, "M/d/yyyy")}
              </span>
          </div>

          <div className="w-1 h-12 border-l border-gray-300 dark:border-gray-600 ml-1"></div>
      </div>
    </div>
  );
};

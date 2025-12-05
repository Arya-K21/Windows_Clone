"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Power, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
  apps: { id: string; name: string; icon: any; action: () => void }[];
}

export const StartMenu = ({ isOpen, onClose, apps }: StartMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
            {/* Backdrop to close */}
            <div className="fixed inset-0 z-40" onClick={onClose} />
            
            <motion.div
                initial={{ y: 20, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 20, opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="fixed bottom-14 left-1/2 -translate-x-1/2 w-[640px] max-w-[95vw] h-[600px] max-h-[80vh] bg-white/85 dark:bg-[#202020]/90 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden"
            >
                {/* Search Bar */}
                <div className="p-6 pb-2">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                            type="text" 
                            placeholder="Type here to search" 
                            className="w-full bg-[#f3f3f3] dark:bg-[#2c2c2c] border-b-2 border-transparent focus:border-blue-500 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none dark:text-white transition-all placeholder:text-gray-500"
                        />
                    </div>
                </div>

                {/* Pinned Section */}
                <div className="px-8 py-4 flex-1 overflow-y-auto custom-scrollbar">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 px-2">Pinned</h3>
                        <button className="text-xs bg-white/50 dark:bg-white/10 px-2 py-1 rounded border border-gray-200 dark:border-white/10 flex items-center gap-1 hover:bg-white dark:hover:bg-white/20 transition-colors">
                            All apps {'>'}
                        </button>
                    </div>

                    <div className="grid grid-cols-6 gap-4">
                        {apps.map((app) => (
                            <button 
                                key={app.id}
                                onClick={() => {
                                    app.action();
                                    onClose();
                                }}
                                className="flex flex-col items-center gap-2 p-2 rounded hover:bg-white dark:hover:bg-white/10 transition-colors group aspect-square justify-center"
                            >
                                <div className="w-8 h-8 flex items-center justify-center text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-800 rounded-md shadow-sm group-hover:scale-110 transition-transform">
                                    <app.icon size={20} />
                                </div>
                                <span className="text-[11px] font-medium text-gray-700 dark:text-gray-200 text-center line-clamp-2 w-full">
                                    {app.name}
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className="flex justify-between items-center mt-8 mb-4">
                        <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 px-2">Recommended</h3>
                        <button className="text-xs text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors"> More {'>'}</button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                        {/* Mock Recent Files */}
                        {[1, 2, 3, 4].map((i) => (
                             <div key={i} className="flex items-center gap-3 p-2 rounded hover:bg-white dark:hover:bg-white/10 transition-colors cursor-pointer">
                                 <div className="w-8 h-8 rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center shrink-0">
                                     <span className="text-xs font-bold text-gray-500">File</span>
                                 </div>
                                 <div className="flex flex-col overflow-hidden">
                                     <span className="text-xs font-medium text-gray-700 dark:text-gray-200 truncate">Project_Draft_{i}.pdf</span>
                                     <span className="text-[10px] text-gray-500 truncate">Just now</span>
                                 </div>
                             </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="h-16 bg-[#f3f3f3]/50 dark:bg-[#1f1f1f]/50 border-t border-gray-200 dark:border-white/5 flex items-center justify-between px-8 backdrop-blur-md">
                     <div className="flex items-center gap-3 hover:bg-white dark:hover:bg-white/10 p-2 rounded transition-colors cursor-pointer">
                         <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                             US
                         </div>
                         <span className="text-xs font-medium text-gray-700 dark:text-gray-200">User</span>
                     </div>

                     <div className="flex items-center gap-2">
                         <button className="p-2 rounded hover:bg-white dark:hover:bg-white/10 text-gray-700 dark:text-gray-200 transition-colors">
                             <Settings size={18} />
                         </button>
                         <button className="p-2 rounded hover:bg-white dark:hover:bg-white/10 text-gray-700 dark:text-gray-200 transition-colors">
                             <Power size={18} />
                         </button>
                     </div>
                </div>
            </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

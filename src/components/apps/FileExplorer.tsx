"use client";

import React from "react";
import { 
    ArrowLeft, ArrowRight, ArrowUp, RotateCw, Search,
    Plus, Scissors, Copy, Clipboard, Share, Trash, 
    LayoutGrid, List, Filter, MoreHorizontal,
    Monitor, Download, FileText, Image as ImageIcon, Music, Video,
    HardDrive, Cloud, Home as HomeIcon, Star, Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Mock Data ---

const SIDEBAR_ITEMS = [
    { name: "Home", icon: HomeIcon, active: true },
    { name: "Gallery", icon: ImageIcon },
    { name: "OneDrive - Personal", icon: Cloud },
    { type: "separator" },
    { name: "Desktop", icon: Monitor },
    { name: "Downloads", icon: Download },
    { name: "Documents", icon: FileText },
    { name: "Pictures", icon: ImageIcon },
    { name: "Music", icon: Music },
    { name: "Videos", icon: Video },
    { type: "separator" },
    { name: "This PC", icon: HardDrive },
    { name: "Network", icon: Cloud },
];

const QUICK_ACCESS_FOLDERS = [
    { name: "Desktop", icon: Monitor, color: "text-blue-500", bg: "bg-blue-500" },
    { name: "Downloads", icon: Download, color: "text-green-500", bg: "bg-green-500" },
    { name: "Documents", icon: FileText, color: "text-orange-400", bg: "bg-orange-400" }, // Windows uses yellowish/orange
    { name: "Pictures", icon: ImageIcon, color: "text-teal-500", bg: "bg-teal-500" },
    { name: "Music", icon: Music, color: "text-rose-500", bg: "bg-rose-500" },
    { name: "Videos", icon: Video, color: "text-purple-500", bg: "bg-purple-500" },
];

export const FileExplorer = () => {
    return (
        <div className="flex flex-col h-full bg-[#f0f4f9] dark:bg-[#191919] text-sm text-gray-900 dark:text-gray-100 font-sans select-none">
            
            {/* 1. Top Navigation Bar */}
            <div className="h-12 flex items-center px-2 gap-2 border-b border-gray-200/50 dark:border-white/5 bg-white/50 dark:bg-[#202020] backdrop-blur-sm shadow-sm z-20">
                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                    <button className="p-1.5 hover:bg-black/5 dark:hover:bg-white/10 rounded disabled:opacity-30" disabled><ArrowLeft size={16} /></button>
                    <button className="p-1.5 hover:bg-black/5 dark:hover:bg-white/10 rounded disabled:opacity-30" disabled><ArrowRight size={16} /></button>
                    <button className="p-1.5 hover:bg-black/5 dark:hover:bg-white/10 rounded"><ArrowUp size={16} /></button>
                    <button className="p-1.5 hover:bg-black/5 dark:hover:bg-white/10 rounded"><RotateCw size={14} /></button>
                </div>

                {/* Address Bar */}
                <div className="flex-1 h-8 bg-white/60 dark:bg-[#2c2c2c] border border-gray-300/50 dark:border-gray-700/50 rounded flex items-center px-3 hover:bg-white dark:hover:bg-[#333] transition-colors gap-2 group">
                    <HomeIcon size={14} className="text-gray-500 dark:text-gray-400" />
                    <span className="text-xs pt-0.5 w-full flex items-center gap-1.5">
                        <span className="hover:bg-gray-200 dark:hover:bg-gray-600 px-1 rounded cursor-pointer">Home</span> 
                    </span>
                </div>

                {/* Search Bar */}
                <div className="w-64 h-8 bg-white/60 dark:bg-[#2c2c2c] border border-gray-300/50 dark:border-gray-700/50 rounded flex items-center px-3 gap-2 hover:bg-white dark:hover:bg-[#333] transition-colors">
                    <Search size={14} className="text-gray-500 dark:text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search Home" 
                        className="bg-transparent w-full text-xs focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400" 
                    />
                </div>
            </div>

            {/* 2. Command Bar */}
            <div className="h-10 flex items-center px-2 gap-1 border-b border-gray-200/50 dark:border-white/5 bg-white/40 dark:bg-[#202020] backdrop-blur-sm z-10 overflow-x-auto">
                 <CommandBtn icon={Plus} label="New" showChevron className="hidden sm:flex" />
                 <div className="w-[1px] h-5 bg-gray-300 dark:bg-gray-700 mx-1 hidden sm:block" />
                 <CommandBtn icon={Scissors} />
                 <CommandBtn icon={Copy} />
                 <CommandBtn icon={Clipboard} />
                 <CommandBtn icon={Share} className="hidden sm:flex" />
                 <CommandBtn icon={Trash} />
                 <div className="w-[1px] h-5 bg-gray-300 dark:bg-gray-700 mx-1" />
                 <CommandBtn icon={LayoutGrid} label="Sort" showChevron className="hidden md:flex" />
                 <CommandBtn icon={List} label="View" showChevron className="hidden md:flex" />
                 <div className="flex-1" />
                 <CommandBtn icon={Filter} label="Filter" showChevron className="hidden md:flex" />
                 <CommandBtn icon={MoreHorizontal} />
            </div>

            <div className="flex flex-1 overflow-hidden relative">
                {/* 3. Sidebar */}
                <div className="w-48 hidden md:flex flex-col border-r border-gray-200/50 dark:border-white/5 bg-white/30 dark:bg-[#202020]/30 overflow-y-auto py-2">
                    {SIDEBAR_ITEMS.map((item, idx) => (
                        item.type === "separator" ? (
                             <div key={idx} className="h-[1px] bg-gray-200 dark:bg-white/5 mx-4 my-2" />
                        ) : (
                            <button 
                                key={idx}
                                className={cn(
                                    "px-4 py-1.5 flex items-center gap-3 text-xs mx-1 rounded hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-left group",
                                    item.active && "bg-blue-100/50 dark:bg-white/10"
                                )}
                            >
                                {item.icon && <item.icon size={16} className={cn(
                                    "text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200", 
                                    item.active && "text-blue-600 dark:text-blue-400"
                                )} />}
                                <span className={cn(item.active ? "font-semibold text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-300")}>
                                    {item.name}
                                </span>
                            </button>
                        )
                    ))}
                </div>

                {/* 4. Main Content Area */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 pb-20 scroll-smooth">
                    {/* Quick Access Section */}
                     <div className="mb-8">
                         <div className="flex items-center gap-2 mb-4 group cursor-pointer">
                            <span className="p-1 rounded hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                                <ArrowRight size={12} className="text-gray-500 group-hover:rotate-90 transition-transform" />
                            </span>
                            <h2 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Quick access</h2>
                         </div>
                         
                         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                             {QUICK_ACCESS_FOLDERS.map((folder) => (
                                 <div 
                                    key={folder.name}
                                    className="group flex flex-col gap-2 p-3 rounded hover:bg-blue-50 dark:hover:bg-white/5 hover:shadow-sm border border-transparent hover:border-gray-200 dark:hover:border-white/5 transition-all cursor-default"
                                 >
                                    <div className="relative aspect-[4/3] flex items-center justify-center">
                                        {/* Folder Background Base */}
                                        <div className="absolute inset-x-4 inset-y-2 bg-gradient-to-br from-yellow-100 to-yellow-50 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-lg opacity-50" />
                                        
                                        {/* Colored Icon */}
                                        <div className={cn(
                                            "relative w-12 h-12 flex items-center justify-center rounded-lg shadow-sm border border-white/20",
                                            "bg-gradient-to-br from-white to-gray-50 dark:from-[#333] dark:to-[#222]"
                                        )}>
                                            <folder.icon size={24} className={folder.color} />
                                            
                                            {/* Pin Badge for visual flair */}
                                            <div className="absolute -bottom-1 -right-1 bg-white dark:bg-[#2c2c2c] rounded-full p-0.5 shadow-sm border border-gray-100 dark:border-gray-700">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-xs font-medium text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white truncate w-full text-center">
                                            {folder.name}
                                        </span>
                                        <span className="text-[10px] text-gray-400 dark:text-gray-500 truncate w-full text-center hidden sm:block">
                                            Pin symbol
                                        </span>
                                    </div>
                                 </div>
                             ))}
                         </div>
                     </div>

                     {/* Recent Files Section - Hidden as per request but kept structure for future */}
                     <div className="opacity-50 pointer-events-none filter grayscale">
                        <div className="flex items-center gap-2 mb-4">
                            <h2 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide px-2">Recent (Empty)</h2>
                         </div>
                         <div className="h-32 flex items-center justify-center text-xs text-gray-400 border border-dashed border-gray-200 dark:border-gray-800 rounded-lg">
                             No recent files
                         </div>
                     </div>

                </div>
            </div>

            {/* Status Bar */}
            <div className="h-6 bg-white dark:bg-[#202020] border-t border-gray-200 dark:border-white/5 flex items-center px-3 text-xs text-gray-500 dark:text-gray-400 gap-4">
                <span>30 items</span>
                <div className="flex-1" />
                <div className="flex items-center gap-2">
                    <List size={14} className="hover:text-gray-800 dark:hover:text-white cursor-pointer" />
                    <LayoutGrid size={14} className="hover:text-gray-800 dark:hover:text-white cursor-pointer text-blue-500" />
                </div>
            </div>
        </div>
    );
};

// Helper for Command Bar Buttons
const CommandBtn = ({ icon: Icon, label, showChevron, className }: any) => (
    <button className={cn(
        "h-8 px-2 flex items-center gap-1 hover:bg-black/5 dark:hover:bg-white/10 rounded transition-colors text-gray-600 dark:text-gray-300 disabled:opacity-50",
        className
    )}>
        <Icon size={16} strokeWidth={1.5} />
        {label && <span className="text-xs">{label}</span>}
        {showChevron && <span className="text-[10px] ml-0.5 opacity-60">▼</span>}
    </button>
);

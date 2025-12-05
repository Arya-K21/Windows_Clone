"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface DesktopIconProps {
  id: string;
  label: string;
  icon: any; // Lucide icon or image url
  selected: boolean;
  onClick: (e: React.MouseEvent) => void;
  onDoubleClick: () => void;
}

export const DesktopIcon = ({ id, label, icon: Icon, selected, onClick, onDoubleClick }: DesktopIconProps) => {
  return (
    <div 
        className={cn(
            "w-[76px] flex flex-col items-center gap-1 p-2 rounded-[2px] border border-transparent transition-all group cursor-default select-none",
            selected ? "bg-white/10 border-white/20" : "hover:bg-white/5"
        )}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
    >
         <div className="w-10 h-10 flex items-center justify-center text-blue-500 mb-0.5">
            {/* If icon is a component (Lucide), render it. If image path, render Image. 
                For now we assume Lucide component for simplicity or we can wrap.
            */}
             <Icon size={36} strokeWidth={1.5} className="drop-shadow-lg text-[#ffd449]" /> 
             {/* Using yellow for folder-like look, or custom colors */}
         </div>
         <span className={cn(
             "text-xs text-white text-center drop-shadow-md line-clamp-2 leading-tight px-1 rounded-sm",
             selected ? "" : ""
         )}>
             {label}
         </span>
    </div>
  );
};

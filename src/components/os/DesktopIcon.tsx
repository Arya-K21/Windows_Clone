"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface DesktopIconProps {
  id: string;
  label: string;
  icon: string | LucideIcon; // Allow string (URL) or Component
  selected: boolean;
  onClick: (e: React.MouseEvent) => void;
  onDoubleClick: () => void;
}

export const DesktopIcon = ({ id, label, icon: Icon, selected, onClick, onDoubleClick }: DesktopIconProps) => {
  return (
    <div 
        className={cn(
            "w-[86px] flex flex-col items-center gap-1 p-2 rounded-[2px] border border-transparent transition-all group cursor-default select-none",
            selected ? "bg-white/10 border-white/20" : "hover:bg-white/5"
        )}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
    >
         <div className="w-12 h-12 flex items-center justify-center mb-1 relative">
            {/* Logic: If it's a string, render Image. If it's a component, render Lucide Icon */}
            {typeof Icon === "string" ? (
                <Image 
                    src={Icon} 
                    alt={label} 
                    width={48} 
                    height={48} 
                    className="object-contain drop-shadow-md"
                />
            ) : (
                // Fallback to Lucide if no image provided
                <Icon size={36} strokeWidth={1.5} className="drop-shadow-lg text-[#ffd449]" /> 
            )}
         </div>
         <span className={cn(
             "text-xs text-white text-center drop-shadow-md line-clamp-2 leading-tight px-1 rounded-sm",
             selected ? "bg-blue-600/20" : ""
         )}>
             {label}
         </span>
    </div>
  );
};
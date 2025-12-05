"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useDragControls } from "framer-motion";
import { cn } from "@/lib/utils";
import { Minus, Square, X, Maximize2 } from "lucide-react";

interface WindowProps {
  id: string;
  title: string;
  icon?: any;
  isOpen: boolean;
  isActive: boolean;
  isMinimized: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
  children: React.ReactNode;
  initialSize?: { width: number; height: number };
  initialPosition?: { x: number; y: number };
}

export const Window = ({ 
    id, title, icon: Icon, isOpen, isActive, isMinimized, 
    onClose, onMinimize, onFocus, children,
    initialSize = { width: 800, height: 600 },
    initialPosition
}: WindowProps) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const constraintsRef = useRef(null);

  // Default center if no position
  const defaultPosition = initialPosition || {
      x: typeof window !== 'undefined' ? window.innerWidth / 2 - initialSize.width / 2 : 100,
      y: typeof window !== 'undefined' ? window.innerHeight / 2 - initialSize.height / 2 : 50
  };

  if (!isOpen) return null;

  return (
    <motion.div
        drag={!isMaximized}
        dragMomentum={false}
        initial={{ 
            x: defaultPosition.x, 
            y: defaultPosition.y, 
            opacity: 0, 
            scale: 0.95 
        }}
        animate={{ 
            x: isMaximized ? 0 : undefined, // Framer motion drag override
            y: isMaximized ? 0 : undefined,
            width: isMaximized ? "100vw" : initialSize.width,
            height: isMaximized ? "calc(100vh - 48px)" : initialSize.height,
            opacity: isMinimized ? 0 : 1,
            scale: isMinimized ? 0.8 : 1,
            zIndex: isActive ? 50 : 10,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
             position: isMaximized ? "fixed" : "absolute",
             top: isMaximized ? 0 : undefined,
             left: isMaximized ? 0 : undefined,
             pointerEvents: isMinimized ? "none" : "auto",
        }}
        className={cn(
            "flex flex-col bg-win-light-bg dark:bg-win-dark-bg rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden",
            isMaximized ? "rounded-none h-[calc(100vh-48px)] w-screen" : "resize overflow-auto"
        )}
        onMouseDown={onFocus}
    >
        {/* Title Bar */}
        <div 
            className={cn(
                "h-9 flex items-center justify-between px-3 select-none bg-white dark:bg-[#1f1f1f] border-b border-gray-200 dark:border-gray-800",
                isActive ? "text-black dark:text-white" : "text-gray-500"
            )}
            onDoubleClick={() => setIsMaximized(!isMaximized)}
        >
            <div className="flex items-center gap-2 text-xs font-medium">
                {Icon && <Icon size={14} className="text-blue-500" />}
                <span>{title}</span>
            </div>

            <div className="flex items-center h-full">
                <button 
                    onClick={(e) => { e.stopPropagation(); onMinimize(); }}
                    className="h-9 w-11 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                >
                    <Minus size={14} />
                </button>
                <button 
                    onClick={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized); }}
                    className="h-9 w-11 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                >
                     {isMaximized ? <MinimizeIcon size={14} /> : <Square size={12} />}
                </button>
                <button 
                    onClick={(e) => { e.stopPropagation(); onClose(); }}
                    className="h-9 w-11 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
                >
                    <X size={14} />
                </button>
            </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto bg-win-light-bg dark:bg-win-dark-bg relative">
             {children}
        </div>
    </motion.div>
  );
};

// Simple icon for restore (unmaximize)
const MinimizeIcon = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="5" width="14" height="14" rx="2" />
    </svg>
)

"use client";

import React, { useState } from "react";
import { Taskbar } from "@/components/os/Taskbar";
import { StartMenu } from "@/components/os/StartMenu";
import { Window } from "@/components/os/Window";
import { DesktopIcon } from "@/components/os/DesktopIcon";
import { User, Mail, Folder, Layout, Code2, FolderOpen, Chrome, Terminal } from "lucide-react";
import Image from "next/image";
import { StartMenuApps, DesktopShortcuts } from "@/lib/os-data";
import AboutPage from "@/app/about/page";
import ContactPage from "@/app/contact/page";
import { HomeView } from "@/components/home/HomeView";

import { FileExplorer } from "@/components/apps/FileExplorer";

// Map IDs to Content Components
const APP_CONTENT: Record<string, React.ReactNode> = {
    "portfolio": <HomeView />,
    "explorer": <FileExplorer />,
    "about": <AboutPage />,
    "contact": <ContactPage />,
    "browser": <iframe src="https://www.google.com/webhp?igu=1" className="w-full h-full border-none" title="Browser" />,
    "terminal": <div className="p-4 font-mono text-sm text-green-400 bg-black h-full">User@Portfolio-OS:~$ <span className="animate-pulse">_</span></div>
};

export const DesktopLayout = () => {
  const [startOpen, setStartOpen] = useState(false);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [windows, setWindows] = useState<{ id: string; title: string; icon: any; isMinimized: boolean; contentId: string }[]>([]);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const openApp = (id: string, title: string, icon: any) => {
      const existing = windows.find(w => w.id === id);
      if (existing) {
          if (existing.isMinimized) {
             setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: false } : w));
          }
          setActiveWindow(id);
          return;
      }
      setWindows(prev => [...prev, { id, title, icon, isMinimized: false, contentId: id }]);
      setActiveWindow(id);
  };

  const closeWindow = (id: string) => {
      setWindows(prev => prev.filter(w => w.id !== id));
      if (activeWindow === id) setActiveWindow(null);
  }

  const minimizeWindow = (id: string) => {
      setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w));
      setActiveWindow(null);
  }

  return (
    <div 
        className="w-full h-screen overflow-hidden relative selection:bg-blue-500/30"
        onClick={() => {
            if (activeWindow) setActiveWindow(null);
            if (selectedIcon) setSelectedIcon(null);
            if (startOpen) setStartOpen(false); // Close start if clicking desktop
        }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/windows-bg.jpg"
          alt="Windows 11 Desktop Background"
          fill
          quality={90}
          priority
          unoptimized // Disable optimization to prevent blur/compression artifacts
          className="object-cover object-center pointer-events-none brightness-110 contrast-105 select-none"
        />
      </div>

      {/* Desktop Grid */}
      <div className="absolute inset-0 z-10 p-2 grid grid-flow-col grid-rows-[repeat(auto-fill,100px)] gap-2 content-start justify-start w-fit">
         {DesktopShortcuts.map((shortcut) => (
             <DesktopIcon 
                key={shortcut.id}
                id={shortcut.id}
                label={shortcut.name}
                icon={shortcut.icon}
                selected={selectedIcon === shortcut.id}
                onClick={(e) => { e.stopPropagation(); setSelectedIcon(shortcut.id); }}
                onDoubleClick={() => openApp(shortcut.id, shortcut.name, shortcut.icon)}
             />
         ))}
      </div>

      {/* Windows Layer */}
      {windows.map((win) => (
          <Window
            key={win.id}
            id={win.id}
            title={win.title}
            icon={win.icon}
            isOpen={true}
            isActive={activeWindow === win.id}
            isMinimized={win.isMinimized}
            onClose={() => closeWindow(win.id)}
            onMinimize={() => minimizeWindow(win.id)}
            onFocus={() => setActiveWindow(win.id)}
          >
              {APP_CONTENT[win.contentId] || <div className="p-8 flex items-center justify-center text-gray-500">App content not found for {win.contentId}</div>}
          </Window>
      ))}

      {/* Taskbar & Start Menu */}
      <StartMenu 
        isOpen={startOpen} 
        onClose={() => setStartOpen(false)} 
        apps={StartMenuApps.map(app => ({ ...app, action: () => openApp(app.id, app.name, app.icon) }))} 
      />
      
      <Taskbar 
        onStartClick={() => setStartOpen(!startOpen)} 
        onExplorerClick={() => openApp("explorer", "File Explorer", "/Icons/file explorer.png")}
        isStartOpen={startOpen}
        openWindows={windows}
        activeWindowId={activeWindow}
        onWindowClick={(id) => {
             const win = windows.find(w => w.id === id);
             if (win?.isMinimized) {
                 minimizeWindow(id); 
                 setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: false } : w));
                 setActiveWindow(id);
             } else {
                 if (activeWindow === id) {
                     minimizeWindow(id);
                 } else {
                     setActiveWindow(id);
                 }
             }
        }} 
      />
    </div>
  );
};

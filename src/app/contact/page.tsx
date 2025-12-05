"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full">
         <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-full max-w-4xl bg-win-light-card/90 dark:bg-win-dark-card/90 backdrop-blur-xl border border-win-light-border dark:border-win-dark-accent rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row"
         >
             {/* Left Panel: Info */}
             <div className="md:w-1/3 bg-gray-100/50 dark:bg-black/20 p-8 flex flex-col justify-between border-r border-gray-200 dark:border-white/5">
                 <div>
                     <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Get in touch</h2>
                     <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xs">
                         I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                     </p>
                     
                     <div className="space-y-4">
                         <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                             <Mail size={18} className="text-blue-500" />
                             <span className="text-sm">hello@example.com</span>
                         </div>
                         <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                             <Phone size={18} className="text-blue-500" />
                             <span className="text-sm">+1 (555) 123-4567</span>
                         </div>
                         <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                             <MapPin size={18} className="text-blue-500" />
                             <span className="text-sm">San Francisco, CA</span>
                         </div>
                     </div>
                 </div>

                 <div className="mt-8">
                     <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Socials</p>
                     <div className="flex gap-3">
                         {/* Social Icons would go here */}
                         <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors cursor-pointer">
                             <span className="font-bold text-xs">Li</span>
                         </div>
                         <div className="w-8 h-8 rounded-full bg-gray-500/10 flex items-center justify-center text-gray-500 hover:bg-gray-800 hover:text-white transition-colors cursor-pointer dark:hover:bg-white dark:hover:text-black">
                             <span className="font-bold text-xs">Gh</span>
                         </div>
                     </div>
                 </div>
             </div>

             {/* Right Panel: Form */}
             <div className="md:w-2/3 p-8">
                 <h3 className="text-lg font-semibold mb-6 text-gray-800 dark:text-white">Send me a message</h3>
                 <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div className="space-y-2">
                             <label htmlFor="name" className="text-xs font-medium text-gray-500 uppercase">Name</label>
                             <input 
                                id="name" type="text" placeholder="John Doe" 
                                className="w-full px-4 py-2 rounded-md bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                             />
                         </div>
                         <div className="space-y-2">
                             <label htmlFor="email" className="text-xs font-medium text-gray-500 uppercase">Email</label>
                             <input 
                                id="email" type="email" placeholder="john@example.com" 
                                className="w-full px-4 py-2 rounded-md bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                             />
                         </div>
                     </div>
                     <div className="space-y-2">
                         <label htmlFor="subject" className="text-xs font-medium text-gray-500 uppercase">Subject</label>
                         <input 
                            id="subject" type="text" placeholder="Project Inquiry" 
                            className="w-full px-4 py-2 rounded-md bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                         />
                     </div>
                     <div className="space-y-2">
                         <label htmlFor="message" className="text-xs font-medium text-gray-500 uppercase">Message</label>
                         <textarea 
                            id="message" rows={4} placeholder="Tell me about your project..." 
                            className="w-full px-4 py-2 rounded-md bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                         />
                     </div>

                     <div className="pt-2">
                         <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors shadow-md hover:shadow-lg active:transform active:scale-95">
                             <Send size={16} />
                             <span>Send Message</span>
                         </button>
                     </div>
                 </form>
             </div>
         </motion.div>
    </div>
  );
}

"use client"
import React, { useState, useRef, useEffect } from "react";
import Link from 'next/link';
import { useAuth } from "../../context/AuthContext";
import { useToast } from "../providers/ToastProvider";

export default function Userbtn() {
    const [open, setOpen] = useState(false);
    const { isAuthenticated, logout, user } = useAuth();
    const { showToast } = useToast();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setOpen(false);
            }
        }

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [open]);

    return (
        <div ref={dropdownRef} className="hidden md:block fixed right-4 top-5 z-[1000]">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className={`z-[1001] relative flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg shadow-lg transition-all duration-300 border-2
          ${open ? 'ring-2 ring-purple-400 scale-105' : 'hover:scale-110'}
          bg-gradient-to-br from-[#7051c3] to-[#ff70cc] border-white/20 text-white
        `}
            >
                {isAuthenticated && user?.fname ? user.fname.charAt(0).toUpperCase() : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                )}
            </button>

            {open && (
                <div className="absolute right-0 top-full mt-3 w-50 rounded-2xl bg-white/80 dark:bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/20 shadow-2xl ring-1 ring-black/5 overflow-hidden z-[1002] transition-all transform origin-top-right">
                    {isAuthenticated && user ? (
                        <div className="p-4 border-b border-gray-100 dark:border-white/10 bg-gradient-to-br from-purple-500/5 to-pink-500/5">
                            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Signed in as</p>
                            <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{user.fname} {user.lname}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 truncate font-mono">{user.email}</p>
                        </div>
                    ) : (
                        <div className="p-4 border-b border-gray-100 dark:border-white/10 bg-gradient-to-br from-purple-500/5 to-pink-500/5">
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">Welcome!</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Join us to verify your site.</p>
                        </div>
                    )}

                    <div className="p-2">
                        {!isAuthenticated ? (
                            <div className="flex flex-col gap-1">
                                <Link
                                    href="/signin"
                                    onClick={() => setOpen(false)}
                                    className="group flex items-center px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 rounded-xl hover:bg-purple-50 dark:hover:bg-white/5 transition-colors"
                                >
                                    <span className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/10 flex items-center justify-center mr-3 group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 transition-colors">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
                                    </span>
                                    Sign In
                                </Link>
                                <Link
                                    href="/signup"
                                    onClick={() => setOpen(false)}
                                    className="group flex items-center px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 rounded-xl hover:bg-purple-50 dark:hover:bg-white/5 transition-colors"
                                >
                                    <span className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/10 flex items-center justify-center mr-3 group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 transition-colors">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                                    </span>
                                    Create Account
                                </Link>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-1">
                                <Link
                                    href="/settings"
                                    onClick={() => setOpen(false)}
                                    className="group flex items-center px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 rounded-xl hover:bg-purple-50 dark:hover:bg-white/5 transition-colors"
                                >
                                    <span className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/10 flex items-center justify-center mr-3 group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 transition-colors">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </span>
                                    Settings
                                </Link>
                                <button
                                    onClick={() => {
                                        logout();
                                        setOpen(false);
                                        showToast("Successfully logged out!", "success");
                                    }}
                                    className="w-full group flex items-center px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 rounded-xl hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors text-left"
                                >
                                    <span className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/10 flex items-center justify-center mr-3 group-hover:bg-red-100 dark:group-hover:bg-red-500/20 transition-colors">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
                                    </span>
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
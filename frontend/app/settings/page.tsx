"use client"
import React from 'react';

export default function Setting() {
    return (
        <div className="flex justify-center items-center min-h-screen pt-20 pb-10 px-4">
            <div className="w-full max-w-4xl p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-50" />

                <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative z-10">
                    Account Settings
                </h1>

                <p className="text-gray-400 mb-8 relative z-10">Manage your account preferences and profile details here.</p>

                <div className="space-y-6 relative z-10">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                        <h2 className="text-xl font-semibold text-white mb-2">Profile Information</h2>
                        <p className="text-sm text-gray-500">Update your name and personal details.</p>
                        {/* Placeholder for form */}
                        <div className="mt-4 h-24 bg-black/20 rounded-xl animate-pulse"></div>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                        <h2 className="text-xl font-semibold text-white mb-2">Security</h2>
                        <p className="text-sm text-gray-500">Change your password and security settings.</p>
                        {/* Placeholder for form */}
                        <div className="mt-4 h-16 bg-black/20 rounded-xl animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
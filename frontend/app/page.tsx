'use client';
import { useState, useEffect } from "react";
import { scanRequest, getScanById } from "../config/scan.api"

export default function Home() {

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const [scanResult, setScanResult] = useState<any>(null);

  const [loading, setLoading] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [scanid, setScanid] = useState("")


  const handleSubmit = async () => {
    try {
      setLoading(true)
      const startScan = await scanRequest(inputUrl);
      const scanId = startScan.scanId;
      setScanid(scanId);

    }
    catch (err) {
      setLoading(false);
      console.log("", err)
    }
  }

  const getScanresults = async () => {
    const token = localStorage.getItem("token");
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-8 py-16 text-center bg-[radial-gradient(circle_at_50%_50%,rgba(100,100,255,0.05)_0%,transparent_50%)]">
      <section className="max-w-[800px] mx-auto">
        <h1 className="text-6xl font-extrabold leading-[1.1] mb-6 tracking-tighter bg-gradient-to-b from-[var(--foreground)] to-[rgba(var(--foreground),0.7)] bg-clip-text text-transparent dark:from-white dark:to-[#aaa]">
          Stop Losing Customers. <br />
          Get Your Conversion Score.
        </h1>
        <p className="text-xl leading-relaxed text-[var(--foreground)] opacity-70 mb-12 max-w-[600px] mx-auto">
          Deterministic analysis of your website's conversion blockers.
          No fluff, just fixable insights based on proven UX principles.
        </p>

        <form
          className="flex gap-4 max-w-[500px] mx-auto w-full"
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
          }}>

          <input
            type="url"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="Enter your website URL (e.g., https://example.com)"
            className="flex-1 px-6 py-4 rounded-full border border-black/10 bg-white/50 text-base transition-all outline-none focus:border-[#0070f3] focus:ring-4 focus:ring-[#0070f3]/10 focus:bg-white dark:bg-white/5 dark:border-white/10 dark:text-white dark:focus:bg-black/50"
            required
          />

          {loading ? (
            <button type="submit"
              disabled
              className="px-8 py-4 rounded-full border-0 bg-gradient-to-br from-[#625f6c] to-[#261e23] text-white font-semibold text-base transition-all whitespace-nowrap">
              Loading..
            </button>
          ) :
            (
              <button type="submit">
                <div
                  className="px-8 py-4 rounded-full border-0 bg-gradient-to-br from-[#7051c3] to-[#ff70cc] text-white font-semibold text-base cursor-pointer transition-all hover:bg-[#0051a2] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,118,255,0.3)] whitespace-nowrap">
                  Analyze my site
                </div>
              </button>
            )}
        </form>
        {/* Placeholder for error display if needed */}
        {/* {error && <p className="text-red-500 font-medium">{error}</p>} */}
      </section>

      {/* Conditionally Render Results */}
      {scanResult && (
        <section className="w-full max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

            {/* 1. Score Card */}
            <div className="md:col-span-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl flex flex-col items-center justify-center dark:bg-black/40 dark:border-white/10">
              <div className="relative w-40 h-40 flex items-center justify-center mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-white/10" />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="url(#scoreGradient)"
                    strokeWidth="10"
                    fill="transparent"
                    // Calculate strokeDashoffset based on score: 440 - (440 * score / 100)
                    strokeDasharray={440}
                    strokeDashoffset={440 - (440 * (scanResult.score || 0)) / 100}
                    className="transition-all duration-1000 ease-out"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7051c3" />
                      <stop offset="100%" stopColor="#ff70cc" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  {/* Dynamic Score */}
                  <span className="text-5xl font-bold bg-gradient-to-br from-[#7051c3] to-[#ff70cc] bg-clip-text text-transparent">
                    {scanResult.score || 0}
                  </span>
                  <span className="text-sm text-[var(--foreground)] opacity-60 uppercase tracking-widest mt-1 dark:text-white/60">Score</span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold bg-gradient-to-br from-[#7051c3] to-[#ff70cc] bg-clip-text text-transparent mb-2">Conversion Potential</h3>
                <p className="text-sm text-[var(--foreground)] opacity-70 dark:text-white/60">
                  {/* Dynamic message based on score */}
                  {(scanResult.score || 0) > 80 ? "Your site is doing great!" : "Your site has significant room for improvement."}
                </p>
              </div>
            </div>

            {/* 2. Metrics Breakdown */}
            <div className="md:col-span-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl dark:bg-black/40 dark:border-white/10 flex flex-col justify-center text-left">
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-6 text-left dark:text-white">Performance Breakdown</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                {/* Map through breakdown categories */}
                {[
                  { label: 'Constructive Call to Action', score: scanResult?.breakdown?.cta || 0, color: 'bg-green-500' },
                  { label: 'Mobile Responsiveness', score: scanResult?.breakdown?.mobile || 0, color: 'bg-yellow-500' },
                  { label: 'Page Load Speed', score: scanResult?.breakdown?.speed || 0, color: 'bg-red-500' },
                  { label: 'Trust Signals', score: scanResult?.breakdown?.trust || 0, color: 'bg-blue-500' },
                ].map((metric, i) => (
                  <div key={i} className="mb-2">
                    <div className="flex justify-between text-sm text-[var(--foreground)] opacity-80 mb-2 dark:text-white/80">
                      <span>{metric.label}</span>
                      <span className="font-mono">{metric.score}/100</span>
                    </div>
                    <div className="h-2 bg-black/10 rounded-full overflow-hidden dark:bg-white/10">
                      <div className={`h-full ${metric.color} transition-all duration-1000`} style={{ width: `${metric.score}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Actionable Fixes List */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl dark:bg-black/40 dark:border-white/10 text-left">
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6 dark:text-white">Top Priority Fixes</h3>
            <div className="space-y-4">
              {/* Map through issues */}
              {(scanResult.issues || []).map((issue: any, idx: number) => (
                <div key={idx} className="p-4 bg-white/5 rounded-xl border border-black/5 flex flex-col md:flex-row gap-4 items-start hover:bg-white/10 transition-colors dark:bg-black/20 dark:border-white/5 dark:hover:bg-black/30">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center font-bold text-sm shrink-0 mt-1">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-[var(--foreground)] mb-1 dark:text-white">{issue.title || "Issue Title"}</h4>
                    <p className="text-[var(--foreground)] opacity-70 text-sm leading-relaxed dark:text-white/60">
                      {issue.description || "Description of the issue found on the website."}
                    </p>
                  </div>
                  <button className="px-5 py-2 text-xs font-semibold bg-[var(--foreground)] text-[var(--background)] rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap dark:bg-white dark:text-black">
                    Fix This
                  </button>
                </div>
              ))}

              {(!scanResult.issues || scanResult.issues.length === 0) && (
                <div className="p-8 text-center text-[var(--foreground)] opacity-50 italic dark:text-white/50">
                  No critical issues found. Your conversion optimization is on point!
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 max-w-[1000px] w-full mt-24 mx-auto">
        <div className="p-8 bg-white/[0.03] border border-white/10 rounded-2xl text-left transition-transform duration-200 hover:-translate-y-1 hover:bg-white/5">
          <h3 className="text-xl font-bold mb-2">Deterministic Scoring</h3>
          <p className="text-[0.95rem] opacity-70 leading-normal">No random LLM guesses. Our scoring engine follows strict, repeatable heuristic rules.</p>
        </div>
        <div className="p-8 bg-white/[0.03] border border-white/10 rounded-2xl text-left transition-transform duration-200 hover:-translate-y-1 hover:bg-white/5">
          <h3 className="text-xl font-bold mb-2">Deep Performance Analysis</h3>
          <p className="text-[0.95rem] opacity-70 leading-normal">We check load times, interactivity delays, and layout shifts that kill conversions.</p>
        </div>
        <div className="p-8 bg-white/[0.03] border border-white/10 rounded-2xl text-left transition-transform duration-200 hover:-translate-y-1 hover:bg-white/5">
          <h3 className="text-xl font-bold mb-2">Actionable Fixes</h3>
          <p className="text-[0.95rem] opacity-70 leading-normal">Get a prioritized list of specific changes to improve your conversion rate today.</p>
        </div>
      </section>
    </div>
  );
}

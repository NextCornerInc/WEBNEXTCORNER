export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-[#606060] mb-4 tracking-tight">
        Next Corner
      </h1>

      {/* Tagline */}
      <p className="text-lg md:text-xl text-[#606060]/80 mb-8 text-center max-w-xl leading-relaxed">
        Street Vendors at your fingertips.<br className="hidden md:inline" /> We’re cooking something up — launching soon.
      </p>

      {/* Email capture */}
      <div className="w-full max-w-md space-y-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 border border-[#606060]/30 rounded-lg shadow-sm
                     placeholder-[#606060] focus:outline-none
                     focus:ring-2 focus:ring-[#00aaed]"
        />
        <button
          className="w-full px-4 py-3 bg-[#00aaed] text-white rounded-lg
                     hover:bg-[#289AC8] transition font-medium"
        >
          Notify Me
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-sm text-[#606060]/70">
        &copy; {new Date().getFullYear()} Next Corner. All rights reserved.
      </footer>
    </div>
  );
}

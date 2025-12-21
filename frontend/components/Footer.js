export default function Footer() {
  return (
    <footer className="w-full mt-10 py-6 border-t bg-white/60 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-gray-600 text-sm">
        
        {/* Left Side */}
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} DailyNotes. All rights reserved.
        </p>

        {/* Right side */}
        <div className="flex gap-4">
          <a 
            href="https://github.com/Fiindah/" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-indigo-600 transition"
          >
            GitHub
          </a>
        </div>

      </div>
    </footer>
  );
}

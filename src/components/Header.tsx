export default function Header() {
  return ( 
    <header className="w-full bg-white p-2 md:p-4 shadow-md">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between">
        {/* Logo / Site Name */}
        <a href="/" className="text-lg font-bold text-gray-800">kj alba</a>
        
        {/* Navigation Links */}
        <div className="flex gap-10">
          <a href="https://github.com/kjalba" className="text-gray-600 hover:text-gray-900 transition">GitHub</a>
          <a href="https://www.linkedin.com/in/kjalba/" className="text-gray-600 hover:text-gray-900 transition">LinkedIn</a>
        </div>
      </div>
    </header>
  );
}

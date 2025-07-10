export function Footer() {
  return (
    <footer className="w-full mt-20 bg-transparent relative">
      <div className="absolute left-0 top-0 w-full h-2 bg-gradient-to-r from-[#203c63]/60 via-[#252d3b]/80 to-[#1e2234]/60 blur-lg opacity-70 pointer-events-none" />
      <div className="flex flex-col items-center justify-center py-6 px-2">
        <div className="text-center text-xs sm:text-sm text-gray-400 font-medium backdrop-blur rounded-lg px-2 py-1.5 max-w-[97vw]">
          © {new Date().getFullYear()}
          <span className="text-white font-semibold"> Mostafa Gaber Ahmed</span>
          . Built with
          <span className="text-[#5593f7] font-semibold"> React</span>,
          <span className="text-[#5593f7] font-semibold"> TypeScript</span>, and{" "}
          <span className="font-semibold bg-gradient-to-r from-[#4fd1c5] via-[#5593f7] to-[#6d28d9] bg-clip-text text-transparent">
            Tailwind CSS
          </span>
          .
        </div>
      </div>
    </footer>
  );
}

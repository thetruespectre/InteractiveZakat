export default function Tile({ children }) {
  return (
    <div className="p-3 shadow-md rounded-lg border-solid w-full mt-6 border border-slate-200 grid grid-cols-2">
      {children}
    </div>
  );
}

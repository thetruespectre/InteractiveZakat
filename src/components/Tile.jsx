export default function Tile({ children }) {
  return (
    <div className="p-3 shadow-md rounded-lg border-solid w-4/5 mt-6 ml-1 border border-slate-200 grid grid-cols-2">
      {children}
    </div>
  );
}

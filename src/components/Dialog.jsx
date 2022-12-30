export default function Dialog({ children }) {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-lg bg-white p-4 shadow-lg">{children}</div>
    </div>
  );
}

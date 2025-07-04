export default function Layout({ children }) {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My API Page</h1>
      {children}
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Vendor Dashboard</h1>
      <ul className="space-y-2">
        <li className="bg-white p-4 rounded shadow">🌱 Plant-Based Manufacturer</li>
        <li className="bg-white p-4 rounded shadow">📦 Packaging Broker</li>
        <li className="bg-white p-4 rounded shadow">📣 Advertising Agency</li>
        <li className="bg-white p-4 rounded shadow">🎪 ExpoWest Tradeshow</li>
      </ul>
    </div>
  );
}

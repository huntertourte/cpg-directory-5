export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="bg-gray-100 p-4 rounded shadow">
          <input type="email" placeholder="Email" className="w-full mb-2 p-2 border" />
          <input type="password" placeholder="Password" className="w-full mb-4 p-2 border" />
          <button className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
        </form>
      </div>
    </div>
  );
}

import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <main className="main">
      <Navbar />
      <Sidebar />
    </main>
  );
}
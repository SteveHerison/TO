import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <main className="w-full min-h-screen grid grid-rows-[80px_1fr_1fr_80px]">
        <Header />

        <div className="h-full w-full xl:grid-cols-[1fr_700px] lg:grid-cols-[1fr_500px] grid grid-cols-1">
          <h1>Pagina Principal</h1>
          <div>oi</div>
        </div>

        <Footer />
      </main>
    </>
  );
}

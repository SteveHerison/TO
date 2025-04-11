import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <main className="w-full h-full flex flex-col">
        <Header />
        <h1>Pagina Principal</h1>
        <div className="h-[700px]"></div>
        <div className="h-[700px]"></div>
        <div className="h-[700px]"></div>
        <Footer />
      </main>
    </>
  );
}

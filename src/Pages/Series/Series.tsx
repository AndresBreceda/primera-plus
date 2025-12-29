import { Footer } from "../../Footer";
import { Header } from "../../Header";

export default function Series() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header showBack />

      <main className="flex-1 flex justify-center pt-10 px-4">
        <h1 className="text-3xl font-bold">
          Series
        </h1>
      </main>

      <Footer />
    </div>
  );
}

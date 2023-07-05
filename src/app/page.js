import Header from "@/components/Header";
import Feed from "@/components/Feed";
import UploadModal from "@/components/UploadModal";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Header />
      <Feed />
      <UploadModal />
    </main>
  );
}

import Sidebar from "@/components/Sidebar";

export default function Page() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-page text-primary">
      <Sidebar />
      <main className="flex-1 flex flex-col relative h-full">
        {/* Placeholder Main Content */}
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted text-[14px]">Select a template to view its structure</p>
        </div>
      </main>
    </div>
  );
}

import CalendarApp from "@/components/Calendar";

export default function DashboardGeralPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-40 w-full bg-white p-2 flex items-center border rounded-lg">
        <h1>Mapa para se localizar e entender as cores</h1>
      </div>
      <CalendarApp />
    </div>
  );
}

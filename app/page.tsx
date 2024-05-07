import SideBar from "@/components/ui/SideBar";
import AttendeeCategory from "@/components/ui/Category";
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/LButton";
import { Spinner } from "@/components/ui/Spinner";

export default function Home() {
  const router = useRouter()

  return (
    <div>
      <SideBar />

      <Button
        variant="contained"
        label={
          <div className="flex items-center gap-3">
            Create New Event
          </div>
        }
        onClick={() => router.push("/events/create-event")}
      />

      <AttendeeCategory />

      <Spinner />
    </div>
  );
}

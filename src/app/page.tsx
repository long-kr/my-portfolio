import HomeLayout from "@/components/layout/HomeLayout";
import SideBar from "@/components/layout/SideBar";

export default function Home() {
  return (
    <HomeLayout bgColor="#DDDDDD">
      <SideBar />
      <div className="col-span-2">
        <div className="bg-black h-screen">World</div>
      </div>
    </HomeLayout>
  );
}

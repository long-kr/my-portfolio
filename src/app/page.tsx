import HomeLayout from "@/components/layout/HomeLayout";

export default function Home() {
  return (
    <HomeLayout>
      <div className="col-span-1">
        <div className="container h-screen">Hello</div>
      </div>
      <div className="col-span-2">
        <div className="bg-black h-screen">World</div>
      </div>
    </HomeLayout>
  );
}

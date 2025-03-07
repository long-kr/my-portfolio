import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

const SideBarHeader = ({ image }: { image: string | StaticImport }) => {
  return (
    <header className="p-12">
      <Image
        src={image}
        alt="avatar"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </header>
  );
};

export default SideBarHeader;

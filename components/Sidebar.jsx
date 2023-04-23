import Image from "next/image";
import Logo from "../public/assets/img/logo.svg";
import useTienda from "../hooks/useTienda";
import Categoria from "./Categoria";

const Sidebar = () => {
  const { categorias } = useTienda();
  return (
    <aside className="md:w-4/12 lg:w-3/12 border border-red-200">
      <Image
        className="mx-auto block py-10"
        src={Logo}
        alt="store food reference brand"
        priority={true}
      />
      <nav>
        <ul>
          {categorias?.map((cat) => (
            <Categoria key={cat.id} categoria={cat} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

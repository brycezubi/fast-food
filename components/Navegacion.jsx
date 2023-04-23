import Link from "next/link";
import { useRouter } from "next/router";

export const links = [
  { id: 1, paso: 1, url: "/", name: "productos" },
  { id: 2, paso: 2, url: "/resumen", name: "resumen" },
  { id: 3, paso: 3, url: "/total", name: "total" },
];

const Navegacion = () => {
  const router = useRouter()
 
  const calcularBarra = () => {
    let valor;

    if (router.pathname === '/') {
      valor = 10;
    }

    if (router.pathname === '/resumen') {
      valor = 50;
    }
    if (router.pathname === '/total') {
      valor = 100;
    }
    return valor;
  };

  return (
    <>
      <nav className="container w-11/12 xl:w-full max-w-7xl mx-auto mt-8 ">
        <ul className="flex justify-between px-4">
          {links?.map((link) => (
            <Link
              className={`${router.pathname === link.url ? 'text-red-500' : 'text-black'} uppercase font-semibold md:text-lg`}
              key={link.id}
              href={link.url}
              
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="container w-11/12 max-w-7xl mx-auto h-3 bg-red-200 rounded-full mt-2">
        <div style={{width:`${calcularBarra()}%`}}
        className="bg-amber-400 h-3 rounded-full transition-all"></div>
      </div>
    </>
  );
};

export default Navegacion;

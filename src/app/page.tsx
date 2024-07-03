import Image from "next/image";

import {Input} from "@/components/ui/input";
import {api} from "@/api";

export default async function HomePage() {
  // CODIGO, funcionalidades, logica
  const photos = await api.photos.list();

  // RETURN => JSX, programacion declarativa, estructura de la pagina, vista, elementos visuales
  return (
    <>
      <h1>Home Page</h1>
      <Input placeholder="Search" type="search" />

      <ul style={{listStyle: "none", padding: 0}}>
        {photos.map((photo) => (
          <li key={photo.id} style={{marginBottom: "20px"}}>
            <Image
              alt={photo.alt_description!}
              height={photo.height}
              src={photo.urls.raw}
              style={{width: "20%", height: "auto"}}
              width={photo.width}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

"use server";

import HomePageClient from "./HomePageClient";

import {api} from "@/api";

export default async function HomePage() {
  // CODIGO, funcionalidades, logica
  const photos = await api.photos.list();

  return <HomePageClient photos={photos} />;
}

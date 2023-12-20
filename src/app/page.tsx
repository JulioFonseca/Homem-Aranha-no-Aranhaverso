import styles from "./page.module.scss";

import HeroesList from "@/components/HeroesList";
import { IHeroData } from "@/interfaces/heroes";

async function getHeroesData(): Promise<{ data: IHeroData[] }> {
  const res = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`);

  if (!res.ok) {
    console.error("Erro na resposta da API:", res.status, res.statusText, process.env.DOMAIN_ORIGIN);
    throw new Error("Falha ao buscar heróis na API");
  }

  return res.json();
}

console.log("process.env.DOMAIN_ORIGIN", process.env.DOMAIN_ORIGIN);

export default async function Home() {
  // const res = await getHeroesData();

  return (
    <main className={styles.main}>
      <HeroesList heroes={[]} />
    </main>
  );
}

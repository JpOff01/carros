import IconSedans from "./assets/icon-sedans.svg"
import IconSuvs from "./assets/icon-suvs.svg"
import IconLuxury from "./assets/icon-luxury.svg"

export default function App() {
  return (
    <main className="min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justify-center items-center">
      <section className="lg:flex">
        <div className="bg-orange p-12 rounded-t-lg">
          <img src={IconSedans} alt="icone dos carros sedan" className="mb-7"/>
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
          <p className="font-lexend mb-7 text-offwhitebg">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a href="https://www.webmotors.com.br/sedans" className="font-lexend bg-offwhitebg px-10 block py-3 w-fit rounded-3xl text-orange" target="_blank">Ver mais</a>
        </div>

        <div className="bg-green p-12">
          <img src={IconSuvs} alt="icone dos carros SUV" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">SUVs</h2>
          <p className="font-lexend mb-7 text-offwhitebg">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a href="https://www.webmotors.com.br/suvs" className="font-lexend bg-offwhitebg px-10 block py-3 w-fit rounded-3xl text-green" target="_blank">Ver mais</a>
        </div>

        <div className="bg-dark-green p-12 rounded-b-lg">
          <img src={IconLuxury} alt="icone dos carros de luxo" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxuosos</h2>
          <p className="font-lexend mb-7 text-offwhitebg">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a href="https://www.webmotors.com.br/carros-de-luxo" className="font-lexend bg-offwhitebg px-10 block py-3 w-fit rounded-3xl text-dark-green" target="_blank">Ver mais</a>
        </div>
      </section>
    </main>
  )
}
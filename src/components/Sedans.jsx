import IconSedans from "../assets/icon-sedans.svg"

function Sedans() {
  return (
        <div className="bg-orange p-12 max-lg:rounded-t-lg lg:rounded-l-lg">
            <img src={IconSedans} alt="icone dos carros sedan" className="mb-7"/>
            <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
            <p className="font-lexend mb-7 text-offwhitebg lg:mb-20">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
            <a href="https://www.webmotors.com.br/sedans" className="font-lexend bg-offwhitebg px-10 block py-3 w-fit rounded-3xl text-orange border-2 border-offwhitebg hover:bg-orange hover:text-offwhitebg" target="_blank">Ver mais</a>
        </div>
  )
}

export default Sedans
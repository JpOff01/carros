import IconLuxury from "../assets/icon-luxury.svg"

function Luxuosos() {
  return (
        <div className="bg-dark-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg">
            <img src={IconLuxury} alt="icone dos carros de luxo" className="mb-7" />
            <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxuosos</h2>
            <p className="font-lexend mb-7 text-offwhitebg lg:mb-20">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
            <a href="https://www.webmotors.com.br/carros-de-luxo" className="font-lexend bg-offwhitebg px-10 block py-3 w-fit rounded-3xl text-dark-green border-2 border-offwhitebg hover:bg-dark-green hover:text-offwhitebg" target="_blank">Ver mais</a>
        </div>
  )
}

export default Luxuosos
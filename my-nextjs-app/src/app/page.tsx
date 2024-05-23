export default function Home() {
  return (
    <main className="flex flex-col items-center p-10">
      <h1 className="text-6xl md:text-8xl font-bold mb-5 text-white p-5">
        Price Heatmaps
      </h1>
      <p className="text-xl max-w-[750px] mx-auto leading-10 text-white mt-5 mb-8 text-justify">
        Estou entusiasmado em apresentar o meu mais recente projeto, desenvolvido em conjunto com a DevScope, como parte da cadeira de projeto.
        Este projeto destina-se a explorar e implementar tecnologia de heatmaps, oferecendo capacidades poderosas de visualização e análise de dados.
      </p>
      <p className="text-xl max-w-[750px] mx-auto leading-10 text-white mt-5 mb-8 text-center">
        Realizado por: Fernando Lopes Nº22892<br></br>
        Github: <a href="https://github.com/PV22892/HeatMapFinal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">https://github.com/PV22892/HeatMapFinal</a>
      </p>
      <a href="/heatmap" className="px-6 py-3.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Heatmap
      </a>
    </main>
  );
}

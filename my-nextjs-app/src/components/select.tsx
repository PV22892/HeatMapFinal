function HeatmapSelector() {
  return (
    <div className="flex items-center rtl:space-x-reverse w-full">
      <form className="w-full">
        <label htmlFor="map-type" className="block mb-2 text-xl text-gray-900 dark:text-white font-bold">Tipo de Heatmap:</label>
        <select id="map-type" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="position" defaultValue={'position'}>Position Heatmap</option>
          <option value="price">Price Heatmap</option>
          <option value="point">Data Point Heatmap</option>
        </select>
      </form>
    </div>
  );
};

function DataTypeSelector() {
  return (
    <div className="flex items-center rtl:space-x-reverse w-full">
      <form className="w-full">
        <label htmlFor="data-type" className="block mb-2 text-xl text-gray-900 dark:text-white font-bold">Tipo de Imóvel:</label>
        <select id="data-type" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="venda" defaultValue={'venda'}>Venda</option>
          <option value="arrendar">Arrendar</option>
        </select>
      </form>
    </div>
  );
};

// Export HeatmapSelector as the default export
export default HeatmapSelector;

// Export DataTypeSelector as a named export
export { DataTypeSelector };
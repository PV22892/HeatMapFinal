function HeatmapSelector() {
  return (
    <div style={{ padding: '5px' }}>
      <label htmlFor="map-type">Type of Heatmap:</label>
      <select id="map-type" style={{ border: '1px solid black', borderRadius: '5px', padding: '5px' }}>
        <option value="position" defaultValue={'position'}>Position Heatmap</option>
        <option value="price">Price Heatmap</option>
        <option value="point">Data Point Heatmap</option>
      </select>
    </div>
  );
};

function DataTypeSelector() {
  return (
    <div style={{ padding: '5px' }}>
      <label htmlFor="data-type">Type of Data:</label>
      <select id="data-type" style={{ border: '1px solid black', borderRadius: '5px', padding: '5px' }}>
        <option value="venda" defaultValue={'venda'}>Venda</option>
        <option value="arrendar">Arrendar</option>
      </select>
    </div>
  );
}

// Export HeatmapSelector as the default export
export default HeatmapSelector;

// Export DataTypeSelector as a named export
export { DataTypeSelector };
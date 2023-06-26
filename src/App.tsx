import { PriceBox } from "@/components"

function App() {
const radioData = [
  { value: "value 1", title: "Title 1", subtitle: "Subtitle 1" },
  {
    value: "value 2",
    title: "Title 2",
    subtitle: "Subtitle 2",
    textBanner: "-3% de juros: Melhor opção de parcelamento",
  },
  { value: "value 3", title: "Title 3", subtitle: "Subtitle 3" },
];
  return (
    <div style={{ display: "inline-flex", flexDirection: "column" }}>
      <PriceBox data={radioData} />
    </div>
  );
}

export default App

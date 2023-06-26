import { PriceBox } from "@/components"

function App() {
const radioData = [
  {
    value: "value 1",
    title: "2x R$ 15.300,00",
    subtitle: "Total: R$ 30.600,00",
  },
  {
    value: "value 2",
    title: "3x R$ 10.196,66",
    subtitle: "Total: R$ 30.620,00",
    textBanner: "-3% de juros: Melhor opção de parcelamento",
  },
  {
    value: "value 3",
    title: "4x R$ 7.725,00",
    subtitle: "Total: R$ 30.900,00",
  },
];
  return (
    <div style={{ display: "inline-flex", flexDirection: "column" }}>
      <PriceBox data={radioData} />
    </div>
  );
}

export default App

import { PriceBox } from "@/components"
import { Container } from "@mui/material";

function App() {
const radioData = [
  {
    value: "value 1",
    title: "2x R$ 15.300,00",
    subtitle: "Total: R$ 30.600,00",
  },
  {
    value: "value 3",
    title: "4x R$ 7.725,00",
    subtitle: "Total: R$ 30.900,00",
  },
];
  return (
    <>
      <Container>
        <PriceBox data={radioData} titleLabel="Pix" />
      </Container>

      <Container>
        <PriceBox data={radioData} titleLabel="Pix Parcelado" />
      </Container>
    </>
  );
}

export default App

import { Button, Image, Table } from "@mantine/core";

const data = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=022",
    price: "₱2,211,129.12",
    change: "+13.68%",
  },
  {
    name: "Etherium",
    symbol: "ETH",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022",
    price: "₱149.559.73",
    change: "+10.62%",
  },
  {
    name: "Cardano",
    symbol: "ADA",
    logo: "https://cryptologos.cc/logos/cardano-ada-logo.svg?v=022",
    price: "₱49.58",
    change: "+10.69%",
  },
  {
    name: "Solana",
    symbol: "SOL",
    logo: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=022",
    price: "₱4,960.14",
    change: "+10.52%",
  },
  {
    name: "Polygon",
    symbol: "MATIC",
    logo: "https://cryptologos.cc/logos/polygon-matic-logo.svg?v=022",
    price: "₱81.90",
    change: "+10.38%",
  },
];

export default function CryptoPrices() {
  const rows = data.map((crypto, index) => (
    <tr key={crypto.name}>
      <td>{index + 1}</td>
      <td>
        <span style={{ display: "flex", alignItems: "center" }}>
          <Image src={crypto.logo} height="1.5rem" />
          <span style={{ margin: "0 .75rem" }}>{crypto.name}</span>
          <span style={{ color: "#777" }}>{crypto.symbol}</span>
        </span>
      </td>
      <td>{crypto.price}</td>
      <td style={{ color: "green" }}>{crypto.change}</td>
      <td style={{ textAlign: "end" }}>
        <Button size="xs" variant="gradient">
          Buy
        </Button>
      </td>
    </tr>
  ));

  // return new Error("");

  return (
    <Table verticalSpacing="lg" highlightOnHover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Change</th>
          <th style={{ textAlign: "end" }}>Trade</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

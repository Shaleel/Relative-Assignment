import "./App.css";
import Card from "./Components/Card/Card.tsx";
import Bitcoin_Icon from "./assets/icons/Bitcoin.svg";
import Ethereum_Icon from "./assets/icons/Ethereum.svg";
import Binance_Icon from "./assets/icons/Binance.svg";
import Solana_Icon from "./assets/icons/Solana.svg";
import SHIBAINU from "./assets/icons/SHIBAINU.svg";
import AssetsIcon from "./assets/icons/activity.svg";
export class Coin {
  title: string;
  price: number;
  rate: number;
  tvl: number;
  icon: string;
  group: Coin[] = [];
  constructor(
    _title: string,
    _price: number,
    _rate: number,
    _tvl: number,
    _icon: string
  ) {
    this.title = _title;
    this.price = _price;
    this.rate = _rate;
    this.tvl = _tvl;
    this.icon = _icon;
  }

  addGroup(group: Coin[]) {
    this.group = group;
  }
}

const SHIB = new Coin(
  "Shiba Inu (SHIB)",
  0.000000001948,
  -8.1,
  60000,
  SHIBAINU
);
const BUSD = new Coin("Binance USD (BUSD)", 1.0, 0.26, 60000, Binance_Icon);
const ETH = new Coin("Ethereum (ETH)", 1466.45, -11.93, 60000, Ethereum_Icon);
const SOL = new Coin("Solana (SOL)", 32.83, -12.32, 60000, Solana_Icon);
const BTC = new Coin("Bitcoin (BTC)", 31812.8, 10, 60000, Bitcoin_Icon);

SHIB.addGroup([SOL, ETH, BUSD]);
BUSD.addGroup([SOL, ETH, BUSD]);
ETH.addGroup([SOL, BTC, BUSD]);
SOL.addGroup([BTC, ETH, BUSD]);
BTC.addGroup([SOL, ETH, BUSD]);

function App() {
  const CoinList: Coin[] = [BTC, SOL, ETH, BUSD, SHIB];
  return (
    <div className="App">
      <div className="heading">
        <img alt="trending-assets" src={AssetsIcon} /> Trending Assets
      </div>
      <div className="card-list-wrapper">
        {CoinList.map((coin: Coin, idx) => (
          <Card key={idx} {...coin} />
        ))}
      </div>
    </div>
  );
}

export default App;

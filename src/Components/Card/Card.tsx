import React from "react";
import "./Card.css";
import { Coin } from "../../App";

const gradientClass = (title: string) => {
  switch (title) {
    case "Bitcoin (BTC)":
      return "btc";
    case "Solana (SOL)":
      return "sol";
    case "Ethereum (ETH)":
      return "eth";
    case "Binance USD (BUSD)":
      return "busd";
    case "Shiba Inu (SHIB)":
      return "shib";
    default:
      break;
  }
};

function Card({ icon, title, price, tvl, group, rate }: Coin) {
  return (
    <div className="card">
      <div className={"card-icon " + gradientClass(title)}>
        <img src={icon} alt="title" />
      </div>
      <div className="card-content">
        <p className="muted">{title}</p>
        <div className="field">
          $
          {price >= 1
            ? Number(price.toFixed(2)).toLocaleString("fullwide")
            : price.toFixed(11).toLocaleString()}
          <span className={`rate ${rate > 0 ? "up" : "down"}`}>
            {`${rate > 0 ? "+" : ""}${rate}%`}
          </span>
        </div>
        <p className="muted">Price</p>

        <div className="field">${tvl.toLocaleString()}</div>
        <p className="muted">TVL</p>
        <div className="field pairs">
          {group.map((coin: Coin, idx: number) => (
            <img
              className="pair-icon"
              alt={coin.title}
              src={coin.icon}
              key={idx}
            />
          ))}
        </div>
        <p className="muted">Popular Pairs</p>
      </div>
    </div>
  );
}

export default Card;

import React, { useState } from "react";
import { Computer } from "@bitcoin-computer/lib";
import ArtworkForm from "./component/artworks/artworkForm";
import Artworks from "./component/artworks/artworks";
import WalletInfo from "./component/wallet/walletInfo";
import Navbar from "./component/navbar/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RequireAuth } from "./common/RequireAuth";
import Login from "./auth/Login";

function App() {
  const [config] = useState({
    chain: "LTC",
    // network: "testnet",
    // url: "https://node.bitcoincomputer.io",
    // to run locally, change network and url:
    network: "regtest",
    url: "https://5575-2401-4900-1ca3-75bd-99d6-13ba-5d4e-9dfc.in.ngrok.io",
  });
  // travel upgrade inside soda birth essence junk merit never twenty system opinion
  const [computer, setComputer] = useState(
    new Computer({
      ...config,
      mnemonic: localStorage.getItem("BIP_39_KEY"),
    })
  );

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<RequireAuth redirectTo="/auth/login" />}
          >
            <Route exact path="/" element={<Navbar />} />
          </Route>
          <Route
            exact
            path="/art/artworkform"
            element={<ArtworkForm computer={computer} />}
          />
          <Route
            path="/art/artworks"
            element={<Artworks computer={computer} />}
          />
          <Route
            path="/wallet/walletinfo"
            element={<WalletInfo computer={computer} />}
          />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      {/*// {
      //   <div>
      //     <Navbar />
      //     <div className="mt-20">
      //       <WalletInfo className="mt-20" computer={computer} />
      //       <button
      //         type="submit"
      //         onClick={() => setComputer(new Computer(config))}
      //       >
      //         Generate New Wallet
      //       </button>
      //       <ArtworkForm computer={computer} />
      //       <Artworks computer={computer} />
      //     </div>
      //   </div>
      // }*/}
    </div>
  );
}

export default App;

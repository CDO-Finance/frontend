import { useState } from "react";
import { Header } from "../../layouts/header";
import { Navigation } from "../../layouts/navigation";
import { PageContainer } from "../../components/pageContainer";
import { InfoContainer } from "../../components/infoContainer";
import { Info } from "../../components/info";
import { Button } from "../../components/button";
import { Popup } from "../../components/popup";
import { Heading } from "../../components/heading";
import "./index.scss";

interface IData {
  imgSrc: string;
  pool: string;
  total: string;
  balance: string;
}

const DUMMY_DATA: IData[] = [
  {
    imgSrc: "/images/icons/bnb.svg",
    pool: "BNB",
    total: "2,779,040.29 BNB",
    balance: "N/A flexBNB N/A BNB",
  },
  {
    imgSrc: "/images/icons/busd.png",
    pool: "BUSD",
    total: "579,526,490.71 BUSD",
    balance: "N/A flexBUSD N/A BUSD",
  },
  {
    imgSrc: "/images/icons/btcb.jpg",
    pool: "BTCB (Binance BTC) ",
    total: "579,526,490.71 BTCB",
    balance: "N/A flexBTCB, N/A BTCB",
  },
];

export function LiquidityPools() {
  const [state, setState] = useState({
    showPopup: false,
    action: "Depositing",
    pool: "BNB",
    imgSrc: "/images/icons/bnb.svg",
  });

  const onSubmit = () => {};

  return (
    <div className="liquidityPools">
      <Header />
      <div className="liquidityPoolsContainer">
        <Navigation />
        <PageContainer>
          <InfoContainer>
						<Info title="Total Pool Info">
							<div className="infoAmount">$1,339,795,174.76</div>
							<div className="infoText">total deposits</div>
						</Info>
						<Info title="Your Info">
							<div className="infoAmount">$1,029.78</div>
							<div className="infoText">total deposits</div>
						</Info>
          </InfoContainer>
					<Heading title="Available Lending Pools" />
          <div className="liquidityPoolsTableWrap">
            <div className="liquidityPoolsTable">
              <div className="liquidityPoolsTableHead">
                <div className="liquidityPoolsTableHeadItem">Pools</div>
                <div className="liquidityPoolsTableHeadItem">Total Supply</div>
                <div className="liquidityPoolsTableHeadItem">Your Balance</div>
                <div className="liquidityPoolsTableHeadItem"></div>
              </div>
              {DUMMY_DATA.map((data, i) => {
                return (
                  <div key={ i } className="liquidityPoolsTableRow">
                    <div className="liquidityPoolsTableRowItem">
                      <img src={data.imgSrc} alt="bnb" />
                      <span>{data.pool}</span>
                    </div>
                    <div className="liquidityPoolsTableRowItem">
                      {data.total}
                    </div>
                    <div className="liquidityPoolsTableRowItem">
                      {data.balance}
                    </div>
                    <div className="liquidityPoolsTableRowItem">
                      <Button
                        children="Withdraw"
                        onClick={() =>
                          setState({
                            showPopup: true,
                            action: "Withdrawing",
                            imgSrc: data.imgSrc,
                            pool: data.pool,
                          })
                        }
                      />
                      <Button
                        children="Deposit"
                        onClick={() =>
                          setState({
                            showPopup: true,
                            action: "Depositing",
                            imgSrc: data.imgSrc,
                            pool: data.pool,
                          })
                        }
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </PageContainer>
      </div>
      {state.showPopup && (
        <Popup
          action={state.action}
          pool={state.pool}
          imgSrc={state.imgSrc}
          onSubmit={onSubmit}
          onClose={() => setState({ ...state, showPopup: false })}
        />
      )}
    </div>
  );
}

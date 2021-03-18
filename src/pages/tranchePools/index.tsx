import { Header } from "../../layouts/header";
import { Navigation } from "../../layouts/navigation";
import { PageContainer } from "../../components/pageContainer";
import "./index.scss";

export function TranchePools() {
  return (
    <div className="tranchePools">
      <Header />
      <div className="trachePoolsContainer">
        <Navigation />
        <PageContainer>
          <div className="shippingpackage">
            <img
              src="/images/shipping-package-colour 1.svg"
              alt=""
              className="shippingImage"
            />
          </div>
          <div className="stay_tuned">Stay Tuned!</div>
        </PageContainer>
      </div>
    </div>
  );
}

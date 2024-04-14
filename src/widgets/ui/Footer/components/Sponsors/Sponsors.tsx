import { useBemCN } from "shared"
import { ReactComponent as SkolkovoLogo } from "shared/assets/icons/skolkovo-logo.svg"
import { ReactComponent as FundLogoIcon } from "shared/assets/icons/fund-logo.svg"
import './style.scss'

export const Sponsors = () => {
  const sponsorsBlock = useBemCN('sponsors');

  return (
    <div
      className={sponsorsBlock()}
    >
      <div className={sponsorsBlock('innovation')}>
        <FundLogoIcon />
      </div>
      <div className={sponsorsBlock('skolkovo')}>
        <SkolkovoLogo />
      </div>
    </div>
  )
}
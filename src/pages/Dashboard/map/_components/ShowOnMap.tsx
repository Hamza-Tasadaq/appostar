import { useMapState } from 'pages/Dashboard/map/index'
import { useState } from 'react'
import { Tooltip } from 'reactstrap'

interface ShowOnMapProps {
  position: number
}

const ShowOnMap = ({ position }: ShowOnMapProps) => {
  const { openPopup } = useMapState()
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggleTooltip = () => {
    setTooltipOpen(!tooltipOpen);
  };
  return (
    <>
      <li onClick={() => {
        openPopup(0)
      }} id={`mapToolTip${position}`}>
        <i className='ri ri-map-pin-line fs-5'></i>
      </li>
      <Tooltip
        isOpen={tooltipOpen}
        target={`mapToolTip${position}`}
        toggle={toggleTooltip}
        placement="top"
        innerClassName='tooltip-bg-primary'
        autohide={false}
      >
        Show on map
      </Tooltip>
    </>
  )
}

export default ShowOnMap
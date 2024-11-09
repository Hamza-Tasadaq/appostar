import { Card } from 'reactstrap'

const MenuList = () => {
    return (
        <Card>
            <nav id="navbar-examplenested" className="navbar navbar-dark flex-column">
                <nav className="nav nav-pills flex-column p-3 w-100">
                    <a className="nav-link" href="#item-1"><i className="ri-dashboard-2-line align-middle me-2 fs-16"></i> <span>Dashboards</span></a>
                    <nav className="nav nav-pills flex-column">
                        <a className="nav-link" href="#item-1-1"><i className="ri-subtract-fill align-middle me-2 fs-15"></i> <span>Ecommerce</span></a>
                        <a className="nav-link" href="#item-1-2"><i className="ri-subtract-fill align-middle me-2 fs-15"></i> <span>Analytics</span></a>
                    </nav>
                    <a className="nav-link active" href="#item-2"><i className="ri-pencil-ruler-2-line align-middle me-2 fs-16"></i> <span>Base UI</span></a>
                    <a className="nav-link" href="#item-3"><i className="ri-apps-2-line align-middle me-2 fs-16"></i> <span>Apps</span></a>
                    <nav className="nav nav-pills flex-column">
                        <a className="nav-link" href="#item-3-1"><i className="ri-subtract-fill align-middle me-2 fs-15"></i> <span>Chat</span></a>
                        <a className="nav-link" href="#item-3-2"><i className="ri-subtract-fill align-middle me-2 fs-15"></i> <span>Email</span></a>
                    </nav>
                </nav>
            </nav>
        </Card>
    )
}

export default MenuList
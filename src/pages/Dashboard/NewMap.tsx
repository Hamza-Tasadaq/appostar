import React, { createContext, ReactNode, useContext, useState } from 'react';
import Map from 'Components/profile/map/map';
import { Col, Container, Row } from 'reactstrap';
import Filters from 'Components/profile/map/Filters';


// Define the shape of the shared state context
interface SharedStateContextType {
    addressCords: number[];
    setAddressCords: React.Dispatch<React.SetStateAction<number[]>>;


    address: string;
    setAddress: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with an initial value of undefined
const SharedStateContext = createContext<SharedStateContextType | undefined>(undefined);

// Define the provider props type
interface SharedStateProviderProps {
    children: ReactNode; // Accept any valid React children elements
}

// Create a provider component
export const SharedStateProvider = ({ children }: SharedStateProviderProps) => {
    const [addressCords, setAddressCords] = useState<number[]>([]);
    const [address, setAddress] = useState<string>("");

    return (
        <SharedStateContext.Provider value={{ addressCords, setAddressCords, address, setAddress }}>
            {children}
        </SharedStateContext.Provider>
    );
};



// Custom hook to use the shared state
export const useMapState = () => {
    const context = useContext(SharedStateContext);
    if (!context) {
        throw new Error('useMapState must be used within a SharedStateProvider');
    }
    return context;
};


const NewMap = () => {
    return (
        <React.Fragment>
            <SharedStateProvider>
                <div className="page-content no-padding-x overflow-x-hidden-md  padding-top-large-sm">
                    <Container fluid className='no-padding-x overflow-x-hidden-md '
                        style={{ height: "calc(100dvh - 164px)" }}
                    >
                        <Row className='h-100'>
                            <Col xxl={3}>
                                <Filters />
                            </Col>
                            <Col xxl={9}>
                                <Map />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </SharedStateProvider>
        </React.Fragment>
    )
}

export default NewMap
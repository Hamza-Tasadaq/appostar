import React from 'react'
import { Button, Card, CardBody } from 'reactstrap'

const PricingTable = () => {
    return (
        <Card>
            <CardBody>

                <table className="table table-nowrap">
                    <thead>
                        <tr>
                            <th scope="col" className=''>SubTotal</th>
                            <th scope="col" className='text-center'>VAT</th>
                            <th scope="col" className='text-center'>Shipping</th>
                            <th scope="col" className='text-center'>Discount</th>
                            <th scope="col" className='text-center'>Grand Total</th>
                            <th scope="col" className=''>
                                <Button color='light' className='btn-icon rounded-circle '>
                                    <i className=' bx bxs-file-pdf fs-4'></i>
                                </Button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-left'>155,00€</td>
                            <td className='text-center'>33,00€ </td>
                            <td className='text-center'>11,00€ </td>
                            <td className='text-center'>9,00€ </td>
                            <td className='text-center'>190,00€</td>
                            <td></td>
                        </tr>
                        <tr className='text-center'>
                            <Button>View more</Button>
                        </tr>
                    </tbody>
                </table>
            </CardBody>
        </Card>
    )
}

export default PricingTable
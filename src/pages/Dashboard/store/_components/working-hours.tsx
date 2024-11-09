import classNames from 'classnames';
import { Card, CardBody, CardHeader } from 'reactstrap'

const WorkingHours = () => {
    const workingHours = [
        { day: "Monday", time: "9 AM - 5 PM" },
        { day: "Tuesday", time: "9 AM - 5 PM" },
        { day: "Wednesday", time: "9 AM - 5 PM" },
        { day: "Thursday", time: "9 AM - 5 PM" },
        { day: "Friday", time: "9 AM - 5 PM" },
        { day: "Saturday", time: "10 AM - 4 PM" },
        { day: "Sunday", time: "Closed" }
    ];

    return (

        <Card className='comapny-details-card working-hours'>
            <CardHeader>
                <h1>Working Hours</h1>
            </CardHeader>
            <CardBody>
                <ul className='list-unstyled working-hours-list'>
                    {
                        workingHours?.map((workingHour, index) =>
                            <li className='d-flex align-items-center m-0 pb-1 pt-1 justify-content-between' key={workingHour?.day}>
                                <dd className={classNames({ active: index === 5 })}>{workingHour?.day}</dd>
                                <dt className={classNames({ active: index === 5 })}>{workingHour?.time}</dt>
                            </li>)
                    }
                </ul>
            </CardBody>
        </Card>
    )
}

export default WorkingHours
import { useState } from 'react'
import Dropzone from 'react-dropzone';
import { Button, Card, CardBody, CardHeader, Col, Input, Row } from 'reactstrap'

const AddReview = () => {
    const [selectedFiles, setselectedFiles] = useState([]);
    // const [files, setFiles] = useState<any>([]);
    function handleAcceptedFiles(files: any) {
        files.map((file: any) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size),
            })
        );
        setselectedFiles(files);
    }
    /**
     * Formats the size
     */
    function formatBytes(bytes: any, decimals = 2) {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    }


    return (
        <Card className='comapny-details-card'>
            <CardHeader>
                <h1>Add Review</h1>
            </CardHeader>
            <CardBody>
                <form>
                    <Row className='gy-3'>
                        <Col md={6}>
                            <div>
                                <div className="form-icon">
                                    <Input type="email" className="form-control form-control-icon" id="iconInput" placeholder="example@gmail.com" />
                                    <i className=" ri-user-3-line ri fs-4 text-primary"></i>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>
                                <div className="form-icon">
                                    <Input type="email" className="form-control form-control-icon" id="iconInput" placeholder="example@gmail.com" />
                                    <i className=" ri-mail-send-line ri fs-4 text-primary"></i>
                                </div>
                            </div>
                        </Col>
                        <Col className='col-12'>
                            <div>
                                <textarea className="form-control" id="exampleFormControlTextarea5" placeholder='Your Review' rows={3}></textarea>
                            </div>
                        </Col>

                        <Col className='col-12'>
                            <Dropzone
                                onDrop={(acceptedFiles: any) => {
                                    handleAcceptedFiles(acceptedFiles);
                                }}
                            >
                                {({ getRootProps, getInputProps }) => (
                                    <div className="dropzone dz-clickable">
                                        <div
                                            className="dz-message needsclick"
                                            {...getRootProps()}
                                        >
                                            <div className="mb-3">
                                                <i className="display-4 text-primary ri-upload-cloud-2-fill" />
                                            </div>
                                            <h4>Drop files here or click to upload.</h4>
                                        </div>
                                    </div>
                                )}
                            </Dropzone>
                        </Col>
                        <Col className='col-12' >
                            <Button color='primary'>
                                Submit Review
                                <i className='ri  ri-send-plane-line ms-2'></i>
                            </Button>
                        </Col>
                    </Row>
                </form>
            </CardBody>
        </Card>
    )
}

export default AddReview
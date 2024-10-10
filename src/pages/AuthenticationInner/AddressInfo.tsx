import React, { Suspense, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row, Form, FormFeedback, Input } from 'reactstrap';

//formik
import { useFormik } from 'formik';
import * as Yup from 'yup';

import AuthSlider from './authCarousel';
import { useQuery } from '@tanstack/react-query';
import { validateVatCode } from './actions';
import { queryClient } from 'index';
import { capitalizeFirstLetterOfEachWord } from 'utils';
const InvalidVatCodeModal = React.lazy(() => import('pages/AuthenticationInner/Components/InvalidVatCodeModal'));


const AddressInfo = () => {
    document.title = "User Address Info";

    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [isManualEntry, setIsManualEntry] = useState(false);
    const [showForm, setShowForm] = useState(false)
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            companyName: '',
            vatCode: '',
            address: '',
        },
        validationSchema:
            Yup.object({
                companyName: Yup.string().required("Please Enter Your Company Name"),
                vatCode: Yup.string().required("Please Enter Your Vat Code"),
                address: Yup.string().required("Please Enter Your Address"),
            }),
        onSubmit: (values) => {
            console.log("values", values)
        }
    });

    const { vatCode } = formik.values
    const [enabled, setEnabled] = useState(false);

    // Use the query
    const { data, isLoading, isFetching } = useQuery(
        {
            queryKey: ['validate-vat-code', vatCode],
            queryFn: () => validateVatCode(vatCode),
            enabled,
        }
    );

    useEffect(() => {
        if (!isFetching && data) {
            if (data?.city && data?.companyName && data?.country && data?.fullAddress && data?.zipCode) {
                formik.setFieldValue("address", data?.fullAddress)
                formik.setFieldValue("companyName", data?.companyName)

                setShowForm(true)
            } else {
                setShowConfirmationModal(true)
            }
        }
        if (!isFetching && !isLoading) {
            setEnabled(false)
        }

        if (isFetching) {
            setEnabled(true)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, isLoading, isFetching])


    const handleValidateVatCode = async (value: string) => {
        if (!value) {
            formik.setFieldError("vatCode", "Please Enter Your Vat Code")
            return;
        }
        setEnabled((enabled) => !enabled)
        queryClient.invalidateQueries({ queryKey: ['validate-vat-code', value], exact: true }); // Invalidate the previous query
    }

    return (
        <React.Fragment>
            <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
                <div className="bg-overlay"></div>
                <div className="auth-page-content overflow-hidden pt-lg-5">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <Card className="overflow-hidden m-0 galaxy-border-none card-bg-fill">
                                    <Row className="justify-content-center g-0">
                                        <AuthSlider />
                                        <Col lg={6}>
                                            <div className="p-lg-5 p-4">
                                                <div>
                                                    <h5 className="text-primary">Register Account</h5>
                                                    <p className="text-muted">Get your Free Velzon account now.</p>
                                                </div>

                                                <div className="mt-4">
                                                    <Form
                                                        onSubmit={(e) => {
                                                            e.preventDefault();
                                                            formik.handleSubmit();
                                                            return false;
                                                        }}
                                                        className="needs-validation" action="#">

                                                        <>
                                                            <div className="mb-3">
                                                                <label htmlFor="vatCode" className="form-label">Vat Code <span className="text-danger">*</span></label>
                                                                <Input type="text" className="form-control" id="vatCode"
                                                                    placeholder="LU26375245"
                                                                    name="vatCode"
                                                                    value={capitalizeFirstLetterOfEachWord(formik.values.vatCode)}
                                                                    onBlur={formik.handleBlur}
                                                                    onChange={formik.handleChange}
                                                                    disabled={!isManualEntry && !!data?.companyName?.length}
                                                                    invalid={formik.errors.vatCode && formik.touched.vatCode ? true : false}
                                                                />
                                                                {formik.errors.vatCode && formik.touched.vatCode ? (
                                                                    <FormFeedback type="invalid">{formik.errors.vatCode}</FormFeedback>
                                                                ) : null}
                                                            </div>


                                                            {
                                                                showForm &&
                                                                <>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="companyName" className="form-label">Company Name <span className="text-danger">*</span></label>
                                                                        <Input type="text" className="form-control" id="companyName" placeholder="Cocoon Web Tech"
                                                                            name="companyName"
                                                                            onChange={formik.handleChange}
                                                                            onBlur={formik.handleBlur}
                                                                            value={capitalizeFirstLetterOfEachWord(formik.values.companyName) || ""}
                                                                            invalid={
                                                                                formik.touched.companyName && formik.errors.companyName ? true : false
                                                                            }
                                                                            disabled={!isManualEntry && !!data?.companyName?.length}
                                                                        />
                                                                        {formik.touched.companyName && formik.errors.companyName ? (
                                                                            <FormFeedback type="invalid">{formik.errors.companyName}</FormFeedback>
                                                                        ) : null}
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="address" className="form-label">Address <span className="text-danger">*</span></label>
                                                                        <Input type="text" className="form-control" id="address" placeholder="via rubens 15, 20148, Milano, MI"
                                                                            name="address"
                                                                            value={capitalizeFirstLetterOfEachWord(formik.values.address)}
                                                                            onBlur={formik.handleBlur}
                                                                            onChange={formik.handleChange}
                                                                            invalid={formik.errors.address && formik.touched.address ? true : false}
                                                                            disabled={!isManualEntry && !!data?.fullAddress?.length}
                                                                        />
                                                                        {formik.errors.address && formik.touched.address ? (
                                                                            <FormFeedback type="invalid">{formik.errors.address}</FormFeedback>
                                                                        ) : null}
                                                                    </div>
                                                                </>
                                                            }
                                                        </>

                                                        {
                                                            !showForm &&

                                                            <button type='button' onClick={() => {
                                                                handleValidateVatCode(formik.values.vatCode)
                                                            }}
                                                                disabled={!formik.values.vatCode}
                                                                className='btn w-100 btn-success mt-2'>
                                                                {
                                                                    isFetching || isLoading
                                                                        ? <>
                                                                            <span
                                                                                className="spinner-border spinner-border-sm"
                                                                                role="status"
                                                                                aria-hidden="true">
                                                                            </span>
                                                                        </> :
                                                                        "Verify"
                                                                }
                                                            </button>
                                                        }
                                                        {
                                                            showForm &&
                                                            <div className="d-flex gap-4 justify-content-between mt-4">
                                                                <button className="btn btn-success w-100" disabled={!formik.values?.companyName && !formik.values?.address} type="submit">Sign Up</button>
                                                            </div>
                                                        }
                                                        {
                                                            !!data?.companyName?.length &&
                                                            <div className="d-flex gap-4 justify-content-between mt-2">
                                                                <button type="button" className="btn btn-danger w-100"
                                                                    onClick={() => {
                                                                        formik.setFieldValue("vatCode", "")
                                                                        formik.setFieldValue("address", "")
                                                                        formik.setFieldValue("companyName", "")
                                                                        setIsManualEntry(true)
                                                                    }}
                                                                >Is not your company? Add it Manually?</button>
                                                            </div>
                                                        }
                                                    </Form>
                                                </div>

                                                <div className="mt-5 text-center">
                                                    <p className="mb-0">Already have an account ? <Link to="/signin" className="fw-semibold text-primary text-decoration-underline"> Signin</Link> </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>

                        </Row>
                    </Container>
                </div>

                <footer className="footer galaxy-border-none">
                    <Container>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center">
                                    <p className="mb-0">&copy; {new Date().getFullYear()} Appostar. Crafted with <i className="mdi mdi-heart text-danger"></i> by Cocoon Web Tech srl</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </footer>
            </div>

            {
                showConfirmationModal && <Suspense fallback={<></>}>
                    <InvalidVatCodeModal open={showConfirmationModal} setOpen={setShowConfirmationModal} setShowForm={setShowForm} />
                </Suspense>
            }
        </React.Fragment>
    );
};

export default AddressInfo;
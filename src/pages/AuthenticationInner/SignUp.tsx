import React, { Suspense, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Col, Container, Row, Form, FormFeedback, Input, Button, Label } from 'reactstrap';

//formik
import { useFormik } from 'formik';
import * as Yup from 'yup';

import AuthSlider from './authCarousel';

const PrivacyModal = React.lazy(() => import('pages/AuthenticationInner/Components/PrivacyModal'));
const TermsModal = React.lazy(() => import('pages/AuthenticationInner/Components/TermsModal'));

const SignUp = () => {
    document.title = "SignUp";

    const navigate = useNavigate()

    const [passwordShow, setPasswordShow] = useState<boolean>(false);
    const [confirmPasswordShow, setConfirmPasswordShow] = useState<boolean>(false);

    const [termsModal, setTermsModal] = useState<boolean>(false);
    const [privacyModal, setPrivacyModal] = useState<boolean>(false);

    const [isAgreeWithTerms, setIsAgreeWithTerms] = useState(false)
    const [isAgreeWithPrivacy, setIsAgreeWithPrivacy] = useState(false)

    const formik = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,
        initialValues: {
            email: '',
            echo: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email")
                .email("Please include an @ in the email address"),
            echo: Yup.string().required("Please Enter Echo"),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .matches(RegExp('(.*[a-z].*)'), 'At least lowercase letter')
                .matches(RegExp('(.*[A-Z].*)'), 'At least uppercase letter')
                .matches(RegExp('(.*[0-9].*)'), 'At least one number')
                .required("Please Enter Passward"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), undefined], 'Passwords must match') // Ensure password match
                .required('Please Confirm Your Password')
        }),
        onSubmit: (values) => {
            console.log("values", values)
            navigate("/twostep-authentication")
        }
    });

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
                                                                <label htmlFor="useremail" className="form-label">Email <span className="text-danger">*</span></label>
                                                                <Input type="email" className="form-control" id="useremail" placeholder="Enter email address"
                                                                    name="email"
                                                                    value={formik.values.email}
                                                                    onBlur={formik.handleBlur}
                                                                    onChange={formik.handleChange}
                                                                    invalid={formik.errors.email && formik.touched.email ? true : false}
                                                                />
                                                                {formik.errors.email && formik.touched.email ? (
                                                                    <FormFeedback type="invalid">{formik.errors.email}</FormFeedback>
                                                                ) : null}
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="echo" className="form-label">Echo <span className="text-danger">*</span></label>
                                                                <Input className="form-control" id="echo" placeholder="Enter your echo"
                                                                    name="echo"
                                                                    value={formik.values.echo}
                                                                    onBlur={formik.handleBlur}
                                                                    onChange={formik.handleChange}
                                                                    invalid={formik.errors.echo && formik.touched.echo ? true : false}
                                                                />
                                                                {formik.errors.echo && formik.touched.echo ? (
                                                                    <FormFeedback type="invalid">{formik.errors.echo}</FormFeedback>
                                                                ) : null}
                                                            </div>
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="password-input">Password</label>
                                                                <div className="position-relative auth-pass-inputgroup">
                                                                    <Input
                                                                        type={passwordShow ? "text" : "password"}
                                                                        className="form-control pe-5 password-input"
                                                                        placeholder="Enter password"
                                                                        id="password-input"
                                                                        name="password"
                                                                        value={formik.values.password}
                                                                        onBlur={formik.handleBlur}
                                                                        onChange={formik.handleChange}
                                                                        invalid={formik.errors.password && formik.touched.password ? true : false}
                                                                    />
                                                                    {formik.errors.password && formik.touched.password ? (
                                                                        <FormFeedback type="invalid">{formik.errors.password}</FormFeedback>
                                                                    ) : null}
                                                                    <Button color="link" onClick={() => setPasswordShow(!passwordShow)} className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button"
                                                                        id="password-addon"><i className="ri-eye-fill align-middle"></i></Button>
                                                                </div>
                                                            </div>
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="confirm-password-input">Confirm Password</label>
                                                                <div className="position-relative auth-pass-inputgroup">
                                                                    <Input
                                                                        type={confirmPasswordShow ? "text" : "password"}
                                                                        className="form-control pe-5 password-input"
                                                                        placeholder="Enter confirm password"
                                                                        id="confirm-password-input"
                                                                        name="confirmPassword"
                                                                        value={formik.values.confirmPassword}
                                                                        onBlur={formik.handleBlur}
                                                                        onChange={formik.handleChange}
                                                                        invalid={formik.errors.confirmPassword && formik.touched.confirmPassword ? true : false}
                                                                    />
                                                                    {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                                                                        <FormFeedback type="invalid">{formik.errors.confirmPassword}</FormFeedback>
                                                                    ) : null}
                                                                    <Button color="link" onClick={() => setConfirmPasswordShow(!confirmPasswordShow)} className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button"
                                                                        id="password-addon"><i className="ri-eye-fill align-middle"></i></Button>
                                                                </div>
                                                            </div>

                                                        </>
                                                        <div className="mb-4">
                                                            <div>
                                                                <Input
                                                                    checked={isAgreeWithTerms}
                                                                    onChange={(e) => {
                                                                        if (e?.target?.checked) {
                                                                            setTermsModal((termsModal) => !termsModal)
                                                                        }
                                                                    }}
                                                                    type='checkbox' />
                                                                <Label className="ms-2 fs-12 text-muted fst-italic d-inline-flex gap-1 align-items-baseline">By registering you agree to Appoostar <button type='button' onClick={() => setTermsModal((termsModal) => !termsModal)} className="btn p-0 text-primary text-decoration-underline fst-normal fw-medium">Terms of Use</button></Label>
                                                            </div>
                                                            <div>
                                                                <Input checked={isAgreeWithPrivacy}
                                                                    onChange={(e) => {
                                                                        if (e?.target?.checked) {
                                                                            setPrivacyModal((privacyModal) => !privacyModal)
                                                                        }
                                                                    }}
                                                                    type='checkbox' />
                                                                <Label className="ms-2 fs-12 text-muted fst-italic d-inline-flex gap-1 align-items-baseline">By registering you agree to Appoostar <button type='button' onClick={() => setPrivacyModal((privacyModal) => !privacyModal)} className="btn p-0 text-primary text-decoration-underline fst-normal fw-medium">Privacy Policy</button></Label>
                                                            </div>
                                                        </div>

                                                        <div id="password-contain" className="p-3 bg-light mb-2 rounded">
                                                            <h5 className="fs-13">Password must contain:</h5>
                                                            <p id="pass-length" className="invalid fs-12 mb-2">Minimum <b>8 characters</b></p>
                                                            <p id="pass-lower" className="invalid fs-12 mb-2">At <b>lowercase</b> letter (a-z)</p>
                                                            <p id="pass-upper" className="invalid fs-12 mb-2">At least <b>uppercase</b> letter (A-Z)</p>
                                                            <p id="pass-number" className="invalid fs-12 mb-0">A least <b>number</b> (0-9)</p>
                                                        </div>

                                                        <div className="d-flex gap-4 justify-content-between mt-4">
                                                            {/* {currentStep > 1 && (
                                                                <button className="btn btn-primary w-100" onClick={handlePreviousStep}>Previous</button>
                                                            )} */}
                                                            {/* {currentStep < 1 ? (
                                                                <button className="btn btn-success w-100"  onClick={handleNextStep}>Next</button>
                                                            ) : ( */}
                                                            <button className="btn btn-success w-100" disabled={!isAgreeWithPrivacy || !isAgreeWithTerms} type="submit">Next</button>
                                                            {/* )} */}
                                                        </div>
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
            {termsModal && (
                <Suspense fallback={<></>}>
                    <TermsModal setIsAgreeWithTerms={setIsAgreeWithTerms} open={termsModal} setOpen={setTermsModal} />
                </Suspense>
            )}
            {privacyModal && (
                <Suspense fallback={<></>}>
                    <PrivacyModal setIsAgreeWithPrivacy={setIsAgreeWithPrivacy} open={privacyModal} setOpen={setPrivacyModal} />
                </Suspense>)}
        </React.Fragment>
    );
};

export default SignUp;




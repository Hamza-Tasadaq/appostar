import * as Yup from "yup";
import { useFormik } from 'formik';
import React from 'react'
import { Button, Form, FormFeedback, Input, Label } from "reactstrap";

const Password = () => {

    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: ""
        },
        validationSchema: Yup.object({
            currentPassword: Yup.string().required("Please Enter Your Current Password"),
            newPassword: Yup.string().required("Please Enter Your New Password"),
            confirmNewPassword: Yup.string().required("Please Confirm Your New Password"),
        }),
        onSubmit: (values) => {
            console.log("values", values)
        }
    });
    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault();
                validation.handleSubmit();
                return false;
            }}
            action="#">
            <div className="mb-3">
                <Label htmlFor="currentPassword" className="form-label">Current Password</Label>
                <Input type="text" className="form-control" id="currentPassword" placeholder="Enter your current password"
                    name="currentPassword"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.currentPassword || ""}
                    invalid={
                        validation.touched.currentPassword && validation.errors.currentPassword ? true : false
                    }
                />
                {validation.touched.currentPassword && validation.errors.currentPassword ? (
                    <FormFeedback type="invalid">{validation.errors.currentPassword}</FormFeedback>
                ) : null}
            </div>
            <div className="mb-3">
                <Label htmlFor="newPassword" className="form-label">New Password</Label>
                <Input type="text" className="form-control" id="newPassword" placeholder="Enter your new password"
                    name="newPassword"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.newPassword || ""}
                    invalid={
                        validation.touched.newPassword && validation.errors.newPassword ? true : false
                    }
                />
                {validation.touched.newPassword && validation.errors.newPassword ? (
                    <FormFeedback type="invalid">{validation.errors.newPassword}</FormFeedback>
                ) : null}
            </div>
            <div className="mb-3">
                <Label htmlFor="confirmNewPassword" className="form-label">Confirm New Password</Label>
                <Input type="text" className="form-control" id="confirmNewPassword" placeholder="Confirm your new password"
                    name="confirmNewPassword"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.confirmNewPassword || ""}
                    invalid={
                        validation.touched.confirmNewPassword && validation.errors.confirmNewPassword ? true : false
                    }
                />
                {validation.touched.confirmNewPassword && validation.errors.confirmNewPassword ? (
                    <FormFeedback type="invalid">{validation.errors.confirmNewPassword}</FormFeedback>
                ) : null}
            </div>

            <div className="mt-4">
                <Button color="primary" className="w-100" type="submit">Update</Button>
            </div>

        </Form>
    )
}

export default Password
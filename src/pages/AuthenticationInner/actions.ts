import axios from "axios"
import { VALIDATE_VAT_CODE } from "helpers/url_helper"

export const validateVatCode = async (vatNumber: string) => {
    const data: {
        success: boolean
        error: {
            code: number
            type: string
            info: string
        }
    } | {
        valid: boolean
        database: string
        format_valid: boolean
        query: string
        country_code: string
        vat_number: string
        company_name: string
        company_address: string
    } = await axios.get(`${VALIDATE_VAT_CODE}&vat_number=${vatNumber}&format=1`)

    if ("valid" in data) {
        if (data?.valid) {
            const addressData = await getInfoFromAddress(data?.company_address)
            if (addressData) {
                const { zipCode, city, fullAddress } = addressData


                return { zipCode, city, fullAddress, country: data?.country_code, companyName: data?.company_name }
            }
        }

    }
    return { zipCode: "", city: "", fullAddress: "", country: "", companyName: "" }
}

export const getInfoFromAddress = async (address?: string) => {
    if (!address) {
        return {
            zipCode: "",
            city: "",
            fullAddress: ""
        }
    }
    const apiKey = process.env.REACT_APP_PUBLIC_GOOGLE_API_KEY; // Use your environment variable
    const url = `${process.env.REACT_APP_PUBLIC_GOOGLE_API}?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const data = await axios.get(url)
        // @ts-ignore
        const results = data?.results?.[0]
        const addressComponents = results?.address_components


        let zipCode: string = '';
        let city: string = '';
        let fullAddress: string = results?.formatted_address; // Get the full formatted address
        addressComponents?.forEach((component: any) => {
            if (component.types.includes('postal_code')) {
                zipCode = component.long_name; // Get the postal code
            }
            if (component.types.includes('locality')) {
                city = component.long_name; // Get the city name
            }
        });


        return {
            zipCode,
            city,
            fullAddress
        }
    } catch (error) {
        console.log({ error })
    }

}
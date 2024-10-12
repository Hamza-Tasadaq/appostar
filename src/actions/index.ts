import axios from "axios";

export const getAddressFromCordinates = async (latitude: number, longitude: number) => {
    const apiKey = process.env.REACT_APP_PUBLIC_GOOGLE_API_KEY; // Use your environment variable
    const url = `${process.env.REACT_APP_PUBLIC_GOOGLE_API}?latlng=${latitude},${longitude}&key=${apiKey}`;

    try {
        const data = await axios.get(url)
        // @ts-ignore
        const results = data?.results;
        if (results.length > 0) {
            return results?.[0]?.formatted_address
        }

        return ""
    } catch (error) {
        console.log({ error })
    }
}
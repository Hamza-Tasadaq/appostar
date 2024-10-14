import axios from "axios";

export const getAddressFromCordinates = async (latitude: number, longitude: number) => {
    const url = `${"https://nominatim.openstreetmap.org"}/reverse?lat=${latitude}&lon=${longitude}&format=json`;

    try {
        const data = await axios.get(url)
        // @ts-ignore
        return data?.display_name
    } catch (error) {
        console.log({ error })
    }
}
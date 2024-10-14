import axios from "axios";

export const getAddressFromCordinates = async (latitude: number, longitude: number) => {
    const url = `${"https://nominatim.openstreetmap.org"}/reverse?lat=${latitude}&lon=${longitude}&format=json`;

    try {
        const data = await axios.get(url)
        console.log(data)
        // @ts-ignore
        // const results = data?.results;
        // if (results.length > 0) {
        //     return results?.[0]?.formatted_address
        // }

        return data?.display_name
    } catch (error) {
        console.log({ error })
    }
}
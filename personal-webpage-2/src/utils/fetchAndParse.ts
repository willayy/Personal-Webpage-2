export const baseUrl = process.env.PUBLIC_SITE_URL

export const fetchAndParse = async (url: string) => {
    return await fetch(url).then(res => {
            if (res.ok) {
                return res.json()
            }
        }
    )
}
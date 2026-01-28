import fs from 'fs';
import path from 'path';

export const baseUrl = process.env.PUBLIC_SITE_URL

export const fetchAndParse = async (url: string) => {
    // During build time, read from filesystem instead of fetching
    if (process.env.NODE_ENV === 'production' || !baseUrl) {
        try {
            // Extract the path part from the URL (e.g., "/data/education.json")
            const urlPath = url.replace(baseUrl || '', '').replace(/^\//, '');
            const filePath = path.join(process.cwd(), 'public', urlPath);
            const fileContents = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(fileContents);
        } catch (error) {
            console.error('Error reading file:', error);
            // Fallback to fetch if file reading fails
            return await fetch(url).then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`)
            })
        }
    }
    
    // In development mode, use fetch
    return await fetch(url).then(res => {
            if (res.ok) {
                return res.json()
            }
            throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`)
        }
    )
}
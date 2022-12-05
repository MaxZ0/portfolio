import { cdnUrl } from "./env.js";

export function readUrl() {
    const urlString = window.location.search;
    if(urlString) {
        return (urlString.slice(1)); 
    }
    return undefined;
}
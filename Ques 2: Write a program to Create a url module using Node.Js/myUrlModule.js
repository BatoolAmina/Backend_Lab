// myUrlModule.js

const { URL } = require('url');

// Function to parse a URL and return its components
function parseUrl(urlString) {
    try {
        const parsedUrl = new URL(urlString);
        return {
            href: parsedUrl.href,
            protocol: parsedUrl.protocol,
            host: parsedUrl.host,
            hostname: parsedUrl.hostname,
            port: parsedUrl.port,
            pathname: parsedUrl.pathname,
            search: parsedUrl.search,
            searchParams: Object.fromEntries(parsedUrl.searchParams),
            hash: parsedUrl.hash
        };
    } catch (error) {
        console.error('Invalid URL:', error.message);
        return null;
    }
}

// Function to format a URL from its components
function formatUrl({ protocol, host, pathname, searchParams = {} }) {
    try {
        const url = new URL(pathname, `${protocol}//${host}`);
        Object.entries(searchParams).forEach(([key, value]) => {
            url.searchParams.append(key, value);
        });
        return url.href;
    } catch (error) {
        console.error('Error formatting URL:', error.message);
        return null;
    }
}

// Function to resolve a base URL with a relative path
function resolveUrl(base, relative) {
    try {
        const resolvedUrl = new URL(relative, base);
        return resolvedUrl.href;
    } catch (error) {
        console.error('Error resolving URL:', error.message);
        return null;
    }
}

// Exporting each function
module.exports = {
    parseUrl,
    formatUrl,
    resolveUrl
};

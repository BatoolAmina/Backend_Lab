// app.js

const myUrlModule = require('./myUrlModule');

const urlString = 'https://example.com:8000/path/to/resource?query=123&lang=en#section';

// Parsing the URL
const parsedUrl = myUrlModule.parseUrl(urlString);
console.log('Parsed URL:', parsedUrl);

// Formatting a URL from components
const urlComponents = {
    protocol: 'https:',
    host: 'example.com',
    pathname: '/new/path',
    searchParams: { query: '456', lang: 'fr' }
};
const formattedUrl = myUrlModule.formatUrl(urlComponents);
console.log('Formatted URL:', formattedUrl);

// Resolving a relative URL
const baseUrl = 'https://example.com/base/';
const relativePath = 'extra/path';
const resolvedUrl = myUrlModule.resolveUrl(baseUrl, relativePath);
console.log('Resolved URL:', resolvedUrl);

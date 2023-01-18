const server = require('../config.json').server;

export const POST = async ({ url,body }) => {
    try {
        const res = await fetch(server + url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        
    return res.json();
    } catch(error) {
        return {
            error: error,
        }
    }
}

export const GET = async ({ url }) => {
    try {
        const res = await fetch(server + url, {
            method: 'GET',
        });
        return res.json();
    } catch(error) {
        return {
            error: error,
        }
    }
}
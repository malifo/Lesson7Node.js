const https = require('https');

function handleApiResponse(error, data) {
    if (error) {
        console.error("שגיאה בקבלת הנתונים מהשרת:", error);
        return;
    }
    
    console.log("--- הסבר על ה-API ---");
    console.log("השתמשנו ב-API ציבורי (JokeAPI) השולח בקשת GET ומחזיר בדיחת תכנות.");
    console.log("התשובה שהתקבלה מהשרת:");
    console.log(data);
}

function fetchExternalData(callback) {
    const url = "https://v2.jokeapi.dev/joke/Programming?type=single";

    https.get(url, (res) => {
        let rawData = '';

        res.on('data', (chunk) => {
            rawData += chunk;
        });

        res.on('end', () => {
            try {
                const parsedData = JSON.parse(rawData);
                callback(null, parsedData.joke);
            } catch (e) {
                callback(e, null);
            }
        });

    }).on('error', (err) => {
        callback(err, null);
    });
}

console.log("שולח בקשה ל-API החיצוני...");
fetchExternalData(handleApiResponse);
const fs = require('fs/promises'); 
const path = require('path');     

async function printFilesContent(directoryPath) {
    try {
        const items = await fs.readdir(directoryPath);
        console.log(`נמצאו ${items.length} פריטים בתיקייה. מתחיל לקרוא קבצים:\n`);

        for (const item of items) {
            const fullPath = path.join(directoryPath, item);

            const stats = await fs.stat(fullPath);

            if (stats.isFile()) {
                console.log(`=== תוכן הקובץ: ${item} ===`);
                
                const content = await fs.readFile(fullPath, 'utf8');
                console.log(content);
                
                console.log("====================================\n");
            }
        }
    } catch (error) {
        console.error("אירעה שגיאה במהלך קריאת הקבצים:", error);
    }
}

printFilesContent(__dirname);
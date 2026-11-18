function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function runSleepTest() {
    const startTime = Date.now();
    console.log(`זמן התחלה: ${new Date(startTime).toLocaleTimeString()}`);
    
    console.log("מכניס את התוכנית למצב שינה למשך 3 שניות (3000 מילישניות)...");
    
    await sleep(3000);
    
    const endTime = Date.now();
    console.log(`זמן סיום: ${new Date(endTime).toLocaleTimeString()}`);
    
    const elapsedSeconds = (endTime - startTime) / 1000;
    console.log(`בדקנו ואכן הייתה המתנה של כ-${elapsedSeconds} שניות בדיוק כפי שהוגדר.`);
}

runSleepTest();
const fs = require('fs');

console.log("1");

setTimeout(() => {
    console.log("2");
    console.log("3");

    const intervalId = setInterval(() => {
        console.log("4");
        console.log("5");
        console.log("6");
        
        clearInterval(intervalId);

        fs.writeFile('test.txt', '7', (err) => {
            if (err) throw err;
            
            fs.readFile('test.txt', 'utf8', (err, data) => {
                if (err) throw err;
                console.log(data); 

                console.log("8");
            });
        });

    }, 1000);

}, 1000);
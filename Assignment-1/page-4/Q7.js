let number = window.prompt('Enter an integer: ');
        for(let i = 1; i <= 12; i++) 
        {
            result = i * number;
            document.write(`${number} * ${i} = ${result}`);
        }
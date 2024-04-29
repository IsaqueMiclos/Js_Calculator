//Dinamic display function

function dinamicDisplayPort (value) {
    const display = document.getElementById("calculator-display")
    
    if (display.textContent.length <= 12) {
        if (display.textContent == 0){
            if(typeof(value) == "number" || value == '-') {
                display.textContent = value
            }
        } else {
            if (typeof(value) == "number") {
                display.textContent += value
            } 
            else if (value == '.') {
                if (display.textContent.includes(value)) {
                    let lastPositionElement = display.textContent[(display.textContent.length - 1)];
                    let opperationsElements = ['--','*','/','%','+']
                    for (let i = 0; i < 10; i++) {
                        if (lastPositionElement == i) {
                            let countOfPoints = [null]

                            for (let y = 0; y < display.textContent.length; y++) {
                                if (display.textContent[y] == '.') {
                                    countOfPoints.push('.')
                                }
                            }

                            for (let x = 0; x < opperationsElements.length; x++) {
                                if(display.textContent.includes(opperationsElements[x]) && countOfPoints.length < 3) {
                                    display.textContent += value
                                    break
                                }
                            }
                            break
                        } 
                    }
                } else {
                    let lastPositionElement = display.textContent[(display.textContent.length - 1)];
                    for (let i = 0; i < 10; i++) {
                        if (lastPositionElement == i) {
                            display.textContent += value
                            break
                        }
                    } 
                }
                
            } 
            else {
                switch (value) {
                    case '¬':
                        if (!display.textContent.includes('¬') && !display.textContent.includes('%') && !display.textContent.includes('/') && !display.textContent.includes('*') && !display.textContent.includes('+')){
                            display.textContent += '¬'
                        }
                        break;
                    case '%':
                        if (!display.textContent.includes('¬') && !display.textContent.includes('%') && !display.textContent.includes('/') && !display.textContent.includes('*') && !display.textContent.includes('+')){
                            display.textContent += '%'
                        }
                        break;
                    case '/':
                        if (!display.textContent.includes('¬') && !display.textContent.includes('%') && !display.textContent.includes('/') && !display.textContent.includes('*') && !display.textContent.includes('+')){
                            display.textContent += '/'
                        }
                        break;
                    case '*':
                        if (!display.textContent.includes('¬') && !display.textContent.includes('%') && !display.textContent.includes('/') && !display.textContent.includes('*') && !display.textContent.includes('+')){
                            display.textContent += '*'
                        }
                        break;
                    case '+':
                        if (!display.textContent.includes('¬') && !display.textContent.includes('%') && !display.textContent.includes('/') && !display.textContent.includes('*') && !display.textContent.includes('+')){
                            display.textContent += '+'
                        }
                        break;
                }
            }
        }
    }
}


//calculator heart

var calculatorHeart = {
    display: document.getElementById("calculator-display"),
    sum: function(value1,value2) {
        this.display.innerText = `${Number(value1) + Number(value2)}`
    },
    subtraction: function(value1,value2) {
        this.display.innerText = `${value1 - value2}`
    },
    multiply: function(value1,value2) {
        this.display.innerText = `${value1 * value2}`
    },
    division: function(value1,value2) {
        if (value1 != 0 && value2 != 0)
        this.display.innerText = `${value1 / value2}`
    },
    percentage: function(value1,value2) {
        this.display.innerText = `${value1 * (value2 / 100)}`
    },
    ac: function() {
        this.display.innerText = `0`
    }
}

//equals button

function equals(){
    let display = document.getElementById('calculator-display');
    let numbers;

    for (let i = 0; i < display.textContent.length; i++) {
        switch(display.textContent[i]) {
            case '¬':
                numbers = display.textContent.split('¬')
                calculatorHeart.subtraction(numbers[0],numbers[1]);
                break
            case '+':
                numbers = display.textContent.split('+')
                calculatorHeart.sum(numbers[0],numbers[1])
                break
            case '/':
                numbers = display.textContent.split('/')
                calculatorHeart.division(numbers[0],numbers[1])
                break
            case '%':
                numbers = display.textContent.split('%')
                calculatorHeart.percentage(numbers[0],numbers[1])
                break
            case '*':
                numbers = display.textContent.split('*')
                calculatorHeart.multiply(numbers[0],numbers[1])
                break
        }
    }
}
module.exports = function toReadable (number) {
    const numbers_0_to_9 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const numbers_10_to_19 = ['ten', 'eleven', 'tvelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['' ,'','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let numberToArr = number.toString(10).split('');
    let result = '';

    if (number === 0) return 'zero';

    if (numberToArr.length === 1) {
        numbers_0_to_9.forEach((elem, index) => {
            if (index === parseInt(numberToArr[0])) result = elem;
        })
    }
    if (number >=10 && number < 20) {
        numbers_10_to_19.forEach((elem, index) => {
            if (index === parseInt(numberToArr[1])) result = elem;
        })
    }
    if (number >= 20 && number < 100){
        dozens.forEach((elem, index) => {
            if(index === parseInt(numberToArr[0])) {
                result += elem;
                numbers_0_to_9.forEach((units, index) => {
                    if (index === parseInt(numberToArr[1]) && parseInt(numberToArr[1]) != 0) result += ' ' + units;
                })
            };
            
        })
    }

    if (number >= 100 && number < 1000){
        numbers_0_to_9.forEach((hudreds, index) => {
            if(index === parseInt(numberToArr[0])) {
                result += hudreds + ' hundred';
                dozens.forEach((elem, index) => {
                    if(index === parseInt(numberToArr[1])) {
                        result += ' ' + elem;
                        numbers_0_to_9.forEach((units, index) => {
                            if (index === parseInt(numberToArr[2]) && parseInt(numberToArr[2]) != 0) result += ' ' + units;
                        })
                    };
                    
                })
            }
        })
        
    }
    return result;    

}

function abbreviatePhrase(phrase) {
    return phrase.split(' ').map(word => word[0].toUpperCase()).join('');
}
function stringStatistics(inputString) {
    const lettersCount = inputString.replace(/[^a-zA-Z]/g, '').length;
    const digitsCount = inputString.replace(/\D/g, '').length;
    const otherSymbolsCount = inputString.length - lettersCount - digitsCount;
    console.log(`Літер: ${lettersCount}, Цифр: ${digitsCount}, Інших символів: ${otherSymbolsCount}`);
}
function convertToText(number) {
    const units = ['', 'один', 'два', 'три', 'чотири', 'п\'ять', 'шість', 'сім', 'вісім', 'дев\'ять'];
    const teens = ['десять', 'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', 'п\'ятнадцять', 'шістнадцять', 'сімнадцять', 'вісімнадцять', 'дев\'ятнадцять'];
    const tens = ['', '', 'двадцять', 'тридцять', 'сорок', 'п\'ятдесят', 'шістдесят', 'сімдесят', 'вісімдесят', 'дев\'яносто'];
    if (number < 10) {
        return units[number];
    } else if (number < 20) {
        return teens[number - 10];
    } else {
        return tens[Math.floor(number / 10)] + (number % 10 !== 0 ? ' ' + units[number % 10] : '');
    }
}
function swapCaseAndUnderscore(inputString) {
    return inputString.replace(/[A-Za-z0-9]/g, (match) => {
        if (/[A-Z]/.test(match)) return match.toLowerCase();
        if (/[a-z]/.test(match)) return match.toUpperCase();
        if (/[0-9]/.test(match)) return '_';
    });
}
function parseURL(url) {
    const urlObject = new URL(url);
    console.log(`протокол: ${urlObject.protocol.replace(':', '')}, домен: ${urlObject.hostname}, шлях: ${urlObject.pathname}`);
}

console.log(abbreviatePhrase('cascading style sheets')); 
console.log(abbreviatePhrase('об\'єктно-орієнтоване програмування')); 
stringStatistics('Hello123!'); 
console.log(convertToText(61)); 
console.log(convertToText(99)); 
console.log(convertToText(8)); 
console.log(swapCaseAndUnderscore('AbCdEf123'));
parseURL("https://itstep.org/ua/about");
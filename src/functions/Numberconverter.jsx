const anyToDecimal = (num, base) => {
    let [integer, fraction = ''] = num.toString().split('.');
    
    return parseInt(integer, base) + (integer[0] !== '-' || -1) * fraction
        .split('')
        .reduceRight((r, a) => (r + parseInt(a, base)) / base, 0);
}

const binaryTo = (binary, base) => {

    if(!isBinary(binary)) {
        return false;
    }

    let decimal = anyToDecimal(binary, 2);

    return decimalTo(decimal, base);
}

const decimalTo = (decimal, base) => {

    if(!isDecimal(decimal)) {
        return false;
    }

    if (decimal < 0)
    {
        decimal = 0xFFFFFFFF + decimal + 1;
    }

    return anyToDecimal(decimal, 10).toString(base).toUpperCase();
}

const octalTo = (octal, base) => {

    if(!isOctal(octal)) {
        return false
    }

    let decimal = anyToDecimal(octal, 8);

    return decimalTo(decimal, base);
}

const hexadecimalTo = (hexadecimal, base) => {

    if(!isHexadecimal(hexadecimal)) {
        return false;
    }
    
    let decimal = anyToDecimal(hexadecimal, 16);

    return decimalTo(decimal, base);
}

const isBinary = (binary) => {
    const reg = /^[01.]+$/;

    return reg.test(binary);
}


const isDecimal = (decimal) => {
    const reg = /^[0-9.]+$/;

    return reg.test(decimal);
}

const isOctal = (octal) => {
    const reg = /^[0-7.]+$/;

    return reg.test(octal);
}

const isHexadecimal = (hexadecimal) => {
    const reg = /^[0-9a-fA-F.]+$/;

    return reg.test(hexadecimal);
}

const baseToName = (num, c = 0) => {

    num = parseInt(num);
    c = parseInt(c);

    let val = (num === 2) ? 'Binary' : (num === 8) ? 'Octal' : (num === 10) ? 'Decimal' : 'Hexadecimal';
    
    return( (c === 0) ? val : (c === 1) ? val.toUpperCase() : val.toLowerCase() );
}

export {
    isBinary,
    isDecimal,
    isOctal,
    isHexadecimal,
    binaryTo,
    decimalTo,
    octalTo,
    hexadecimalTo,
    baseToName
}
const objectIsEmpty = (obj) => {
    if(obj === undefined || obj === null) obj = {};
    return Object.keys(obj).length === 0;
};

const serializedURL = (obj) => {
    // Restructure object into a pair of [key,value]
    let entries = Object.entries(obj);

    // Serialize URL
    if(entries.length > 0) {
        return entries.map(e => e.join('=')).join('&');
    }

    return '';
};

const sha256hash = (string) => {
    return CryptoJS.SHA256(string).toString(CryptoJS.enc.Hex);
};

const createRequestHash = (requestParam) => {
    let createdHash = null;
    let serializedParam = '';

    const apiSecretKey = process.env.REACT_APP_API_SECRET_KEY;

    if(requestParam.hasOwnProperty('hash')) {
        delete requestParam.hash;
    } 

    // Sort all params
    requestParam = Object.keys(requestParam).sort().reduce(
        (obj, key) => { 
            obj[key] = requestParam[key]; 
            return obj;
        }, 
        {}
    );

    serializedParam = serializedURL(requestParam);

    // Prepend and append with api secret key, then hash with SHA 256 algorithm
    createdHash = sha256hash(apiSecretKey + serializedParam + apiSecretKey);

    return createdHash;
};

const getFormattedDatetime = (dateString = null, dateFormat = 'Y-m-d H:i:s', use12Hour = true) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    let d = null;

    if(dateString === null) {
        d = new Date();
    } else {
        d = new Date(dateString);
    }

    let hour = d.getHours();
    let amPm = '';

    if(use12Hour) {
        if(hour >= 12) {
            amPm = ' PM';
            hour -= 12;
        } else {
            amPm = ' AM';
        }
    }

    return dateFormat.replace('H', ('0' + hour).slice(-2))
                .replace('i', ('0' + d.getMinutes()).slice(-2))
                .replace('s', ('0' + d.getSeconds()).slice(-2)) 
                .replace('Y', d.getFullYear())
                .replace('y', d.getFullYear().toString().slice(-2))
                .replace('m', ('0' + (d.getMonth() + 1)).slice(-2))
                .replace('M', months[d.getMonth()])
                .replace('d', ('0' + d.getDate()).slice(-2))
                + amPm;

    // return `${d.getFullYear()}-${('0' + d.getMonth()).slice(-2)}-${('0' + d.getDate()).slice(-2)} ${('0' + d.getHours()).slice(-2)}:${('0' + d.getMinutes()).slice(-2)}:${('0' + d.getSeconds()).slice(-2)}`;
};

const getTimestamp = (dateString = null) => {
    let d = null;

    if(dateString === null) {
        d = new Date();
    } else {
        d = new Date(dateString);
    }

    return d.getTime();
};

const dateAddition = (dateString, durationInSeconds) => {
    let d = getTimestamp(dateString);

    d += (durationInSeconds * 1000);

    return getFormattedDatetime(d);
} 

const responseFormat = (errorCode, message, data = {}) => {
    return {
        errorCode,
        message,
        data: data
    };
};

const numberFormatting = (number) => {
    return  `Rp${parseInt(number).toLocaleString('id-ID')}`;
};

const copyLink = () => {
    return navigator.clipboard.writeText(window.location.href).then(function() {
        return responseFormat(0, 'Successfully copied link to clipboard!');
    }, function(err) {
        return responseFormat(-1, 'Copy link failed!', err);
    });
};

const capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}

const lcFirst = (str) => {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

const convertKeyToWords = (words) => {
    let splittedWords = words.split('-');

    for(let i=0;i<splittedWords.length;i++) {
        splittedWords[i] = splittedWords[i].charAt(0).toUpperCase() + splittedWords[i].slice(1);
    }

    return splittedWords.join(' ');
};

const constructMinuteString = (qty, portion) => {
    const hour = Math.floor((qty * portion) / 60);
    const minute = (qty * portion) % 60;

    if( hour >= 1 ) return `${hour} jam ${minute > 0 ? `${minute} menit` : ''}`;

    return `${minute} menit`;
};

const convertQueryToObj = (query) => {
    let params = query.replace('?', '').split('&');
    let arrReturn = {};

    for(let index in params) {
        let item = params[index];
        item = item.split('=');

        arrReturn[item[0]] = item[1];
    }

    return arrReturn;
};

export {
    objectIsEmpty,
    serializedURL,
    createRequestHash,
    getFormattedDatetime,
    responseFormat,
    numberFormatting,
    copyLink,
    capitalize,
    lcFirst,
    convertKeyToWords,
    constructMinuteString,
    convertQueryToObj,
    getTimestamp,
    dateAddition
};
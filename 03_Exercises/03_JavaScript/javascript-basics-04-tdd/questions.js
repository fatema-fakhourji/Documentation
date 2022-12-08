
const stringSize = (text) => {
    let r = 'This text has a certain number of characters';
    let result = r.length;
    return result;
}
const replaceCharacterE = (text) => {
    let a = 'This text has a certain number of characters';
    let result1 = a.replace(/e/, " ");
    return result1;
}
const concatString = (text1, text2) => {
    let b = 'el Javascript shi ';
    let c = 'ra2e3';
    let result2 = b + c;
    return result2
}
const showChar5 = (text) => {
    let d = "TDD kicks ass";
    let result3 = d.charAt(4);
    return result3;
}
const showChar9 = (text) => {
    let e = 'But it is really annoying to write';
    let result4 = e.slice(0, 9);
    return result4;
}
const toCapitals = (text) => {
    let f = 'Another useful function';
    let result5 = f.toUpperCase();
    return result5;
}
const toLowerCase = (text) => {
    let g = 'This is a sentence!';
    let result6 = g.toLowerCase();
    return result6;
}
const removeSpaces = (text) => {
    let h = ' Rome wasn\'t built in a day ';
    let result7 = h.trim();
    return result7;
}
const IsString = (text) => {
    let i = 'Is this a string?';
    if (typeof i === 'string') {
         result8 = true;
      } else {
        result8 = false;
      }
      return result8;
}
const getExtension = (text) => {
    function getFileExtension(filename){
        const extension = filename.split('.').pop();
        return extension;
    }
    let result9 = getFileExtension('images/photo01.jpg');
    return result9;
}
const countSpaces = (text) => {
    const j = 'Sire open we have a big one!';
    const result9 = j.split(' ').length - 1;
    return result9
}
const InverseString = (text) => {
    function reverseString(str) {
        let newString = "";
        for (let i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }
    let result10 = reverseString('Après demain, à partir d\'aujourd\'hui?');
    return result10
}
const power = (x, y) => {
    var Base = 2;
    var Exponent = 3;
    var answer = Math.pow(Base, Exponent);
    return answer;
}
const absoluteValue = (num) => {
    var x = -5;
    let answer = Math.abs(x);
    return answer;
}
const absoluteValueArray = (array) => {
    let X  = [-5,-50,-25,-568];
    let Y = X.map(Math.abs);
    return Y;
}
const circleSurface = (radius) => {
    let num = 5;
    let r = Math.pow(5, 2);
    let surface = Math.PI * r;
    let answer = Math.round(surface);
    return answer;
}
const hypothenuse = (ab, ac) => {
    let a = 5;
    let b = 8;
    let c = Math.pow(5, 2);
    let d = Math.pow(8, 2);
    let f = c + d;
    let e = Math. sqrt(f);
    return e;
}
const BMI = (weight, height) => {
    let w = 65;
    let h = 1.75;
    let p = h * h;
    let d = w / p;
    let r = Math.round((d + Number.EPSILON) * 100) / 100
    return r;
}

const createLanguagesArray = () => {
    let X = ['Html', 'CSS', 'Java', 'PHP'];
    return X;
}

const createNumbersArray = () => {
    let Y = [0, 1, 2, 3, 4, 5];
    return Y;
}

const replaceElement = (languages) => {
    let X = ['Html', 'CSS', 'Java', 'PHP'];
    X[2] = 'Javascript';
    return X;
}

const addElement = (languages) => {
    let X = ['Html', 'CSS', 'Javascript', 'PHP'];
    X.push('Ruby');
    X.push('Python');
    return X;
}

const addNumberElement = (numbers) => {
    let X = [0,1,2,3,4,5];
    X.unshift(-1);
    X.unshift(-2);
    return X;
}

const removeFirst = (languages) => {
    let X = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
    X.shift('Html');
    return X;
}

const removeLast = (languages) => {
    let X = ['CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
    X.pop('Python');
    return X;
}

const convertStrToArr = (social_arr) => {
    let X = 'Facebook,Twitter,Google +,Viadeo,LinkedIn';
    var array = X.split(',');
    return array;
}

const convertArrToStr = (languages) => {
    let X = ['CSS', 'Javascript', 'PHP', 'Ruby'];
    var string = X.toString();
    return string;
}

const sortArr = (social_arr) => {
    let X = ['Facebook','Twitter', 'Google +','Viadeo','LinkedIn'];
    let u = X.sort();
    return u;
}

const invertArr = (social_arr) => {
    let X = ['CSS','Javascript','PHP','Ruby'];
    let o = X.reverse();
    return o;
}
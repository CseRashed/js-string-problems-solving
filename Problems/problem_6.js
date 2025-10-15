// Check Palindrome

const str= "madam";
let revStr= "";
for(let i =str.length -1; i>=0; i--){
    revStr += str[i]
}
if(str.toLocaleLowerCase() === revStr.toLocaleLowerCase()){
    console.log(`${str}: This String is Palindrome `)
}else{
    console.log(` ${str}: This String is not Palindrom `)
}
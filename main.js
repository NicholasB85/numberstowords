// set array needed for the words
const ones = ["one","two","three","four","five","six","seven","eight","nine",];
const teen = [" ","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
const tens = [" ","ten","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"];
const hundreds = [" ","one hundred", "two hundred","three hundred","four hundred","five hundred","six hundred","seven hundred","eight hundred","nine hundred"];
const thous =[" ","one thousand","two thousand","three thousand","four thousand","five thousand","six thousand","seven thousand","eight thousand","nine thousand"];

function convert(){
    let numbers = " ";
    for (let th = 0; th < thous.length; th++){
    for (let h = 0; h < hundreds.length; h++) {
        for(let t = 0; t < tens.length; t++) {
            for(let o = 0; o < ones.length; o++){
               if(t===1 && o !==0){
                   numbers +=hundreds[h] +" "+teen[o] + " " + "<br>";
               }else
                numbers += " "+ thous[th]+" " + hundreds[h] + " " + tens[t] + " " + ones[o]+ "<br>";
            }
        }
    }
}


    return numbers;
}
document.write(convert());
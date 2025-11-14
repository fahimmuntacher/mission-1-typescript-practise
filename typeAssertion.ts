let type : any;

type = 21;
(type as number)

const kgToGram = (input : string | number | undefined) => {
        if(typeof input === "string"){
            return "This is string"
        }else if(typeof input === "number"){
            return input * 20;
        }
}

const result1 = kgToGram(2) as number;
console.log(result1);
const result2 = kgToGram("2 kg") as string;
console.log(result2);
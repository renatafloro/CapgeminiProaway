function ola(text: string): string;
function ola(text: number): string;

function ola(text: any): any{
    return `Ola ${text}`
}

console.log(ola("tudo bem?"))
console.log(ola(200))
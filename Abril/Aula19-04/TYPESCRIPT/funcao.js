"use strict";
function soma(n1, n2) {
    return n1 + n2;
    function soma(n1, n2) {
        try {
            if ((n1 == 0) || (n2 == 0)) {
                throw "parâmetros não informado";
            }
            return n1 + n2;
        }
        catch (err) {
            console.log("passou aqui");
            return err;
        }
    }
}

interface IEmployee{
    empCode: number;
    empName: string;
    getSalary:(salario: number)=> number;
    getManagerName(nome: string): string;
}

class Empregado implements IEmployee{
    empCode: number;
    empName: string;
    empFone: string;
    constructor(empCode: number, empName: string, empFone:string){
        this.empCode = empCode;
        this.empName = empName;
        this.empFone = empFone;
    }

    getSalary(salario: number): number{
        return salario;
    }

    getManagerName(nome: string): string {
        return nome;
    }

    salvar(): boolean{
        return true;
    }

    alterar(objeto: string): boolean{
        return true;
    }

    consultar(): string[]{
        let x: string[]=[];
        return x;
    }

    consultarPorId(id: number): string{
        return 'maria';
    }

    excluir(id: number): void{
        //
    }
}
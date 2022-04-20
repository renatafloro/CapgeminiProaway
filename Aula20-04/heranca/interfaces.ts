interface IEmployee{
    empCode: number;
    empName: string;
    getSalary(salario: number): number;
    getManagerName(nome: string): string;
}

interface IDao{
    salvar():boolean;
    alterar(objeto: string): boolean;
    consultar():string[];
    consultarPorId(id: number): string;
    excluir(id:number):void;
}

export{IEmployee, IDao}
interface ICreateClientDTO{
    name: string;
    birthday: string;
    cpf: string;
    cell: string;
    email: string;
    address: string;
    observation?: string;
}

export { ICreateClientDTO }
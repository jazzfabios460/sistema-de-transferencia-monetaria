export type userAuthType = {
    token:string,
    usuario:{
        email:string,
        nome:string,
        id:string,
        conta:[
            {
                id:string,
                debito:[],
                deposito:[],
                id_transacao:[],
                id_usuario:string,
                saldo:number
            }
        ]
    }
}

export type usersType = {
    id:string,
    saldo: number,
    id_usuario: string,
    id_transacao: [],
    usuario: {
        nome: string,
        email: string
    }
}

export type transacoesTypes = {
    id: string,
    id_conta_pagador: [
        string
    ],
    id_conta_recebidor: [
        string
    ],
    valorDaTransacao: number,
    data: Date,
    contaCreditada: [
        {
            id: string,
            saldo:number,
            id_usuario: string,
            id_transacao: [],
            usuario: {
                id: string,
                email: string,
                nome: string
            }
        }
    ],
    contaDebitada: [
        {
            id: string,
            saldo:number,
            id_usuario: string,
            id_transacao: [],
            usuario: {
                id: string,
                email: string,
                nome: string
            }
        }
    ]
}
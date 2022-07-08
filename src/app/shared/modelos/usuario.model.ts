export class UsuarioModel{
    _id       ?: string;
    correo    ?: string;
    password  ?: string;
    status    ?: string;
    dateUp    ?: Date;
    rolId     ?: string;
    empleadoId?: string;
    jwtoken   ?: string;

    constructor(){}
}
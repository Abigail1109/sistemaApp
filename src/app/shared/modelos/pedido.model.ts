export class PedidoModel{
    _id         ?: string;
    estatus     ?: string;
    tipoCobro   ?: string;
    subTotal    ?: number;
    descuento   ?: number;
    iva         ?: number;
    total       ?: number;
    clienteId   ?: string;
    usuarioId   ?: string;
    mesaId      ?: string;
    tipoPedido  ?: string;

    constructor(){}
}
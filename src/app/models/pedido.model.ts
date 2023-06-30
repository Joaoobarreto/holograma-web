import { Holograma } from "./holograma.model";
import { Usuario } from "./usuario.model";

export class Pedido {
  usuario: Usuario | undefined;
  hologramas: Holograma[] | undefined;
  data: string| undefined;
  previsaoEntrega: string | undefined;
  status: string | undefined;
  valor: number | undefined
  usuarioId: number | undefined;
}

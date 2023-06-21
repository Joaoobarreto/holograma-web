import { Usuario } from "./usuario.model";

export class Orcamento {
  usuario: Usuario | undefined;
  arquivo: {
    id: string | undefined;
    nome: string | undefined;
  } | undefined;
  data: string | undefined;
  prazoResposta: string | undefined;
}

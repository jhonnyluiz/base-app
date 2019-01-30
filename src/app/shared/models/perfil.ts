import { Funcao } from './funcao';
import { Sistema } from './sistema';

export class Perfil {
    constructor(
        public sistema?: Sistema,
        public codigoPerfil?: string,
        public descricaoPerfil?: string,
        public nomeRole?: string,
        public nomeFormInicial?: string,
        public codigoUsuarioBD?: string,
        public funcoes?: Funcao[],
    ) {}
}

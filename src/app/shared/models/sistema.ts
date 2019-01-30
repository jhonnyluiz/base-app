import { Perfil } from './perfil';

export class Sistema {
    constructor(
        public codigoSistema: string,
        public nomeSistema: string,
        public posicaoMenu?: string,
        public origemSistema?: string,
        public perfis?: Perfil[]
    ) {}
}

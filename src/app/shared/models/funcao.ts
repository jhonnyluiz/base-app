export class Funcao {
    constructor(
        public codigoFuncao: string,
        public descricaoFuncao: string,
        public descricaoMensagem: string,
        public dataCriacao: string,
        public funcoesCodigoModulo: string,
        public funcoesCodigoSistema: string,
        public separador: string,
        public tipo: string,
        public ordem: number,
        public tamanho: number,
        public versao: number,
        public ativo: number,
        public funcao: Funcao
    ) {}
}

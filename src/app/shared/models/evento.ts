export class Evento {
    constructor(
        public acao?: string,
        public msg?: {
            tipo: string,
            msg: string
        }
    ) {}
}

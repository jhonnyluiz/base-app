export class Pagina<T> {
    constructor(
        public content?: T[],
        public pageable?: {
            sort: {},
            pageSize: number,
            pageNumber: number,
            offset: number,
            paged: boolean,
            unpaged: boolean,
        },
        public totalPages?: number,
        public totalElements?: number,
        public last?: boolean,
        public first?: boolean,
        public sort?: {
            orderBy?: string,
            direction?: string,
        },
        public numberOfElements?: number,
        public size: number = 10,
        public number: number = 0,
        public empty?: boolean
    ) {}
}

export class ItemMenu {
    constructor(
        public titulo: string,
        public icon?: string,
        public role?: string,
        public routePath?: string,
        public subMenu?: ItemMenu[],
        public opened?: boolean
    ) {}
}

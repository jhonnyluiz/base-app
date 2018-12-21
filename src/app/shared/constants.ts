import { ItemMenu } from "./models/item-menu";
import { ConfigMenu } from './models/config-menu';
import { MenuHeader } from './models/menu-header';

const MENU_PERFIL = {
    titulo: 'Jhonny',
    icon: 'account_circle',
    subMenu: [
        {
            titulo: 'Perfil',
            icon: 'account_circle',
            routePath: 'perfil'
        },
        {
            titulo: 'Configurações',
            icon: 'settings',
            routePath: 'perfil/config'
        }
    ]
}

export const MENU_PRINCIPAL: ItemMenu[] = [
    {
        titulo: 'Dashboard',
        icon: 'dashboard',
        routePath: 'dashboard'
    },
    {
        titulo: 'Sistemas',
        icon: 'dvr',
        role: 'ROLE_SISTEMAS_SAS',
        subMenu: [
            {
                titulo: 'Listar Todos',
                routePath: 'sistema/list'
            },
            {
                titulo: 'Cadastro',
                routePath: 'sistema/new'
            }
        ]
    }
]

export const MENU_HEADER: MenuHeader = {
    toolbar: MENU_PRINCIPAL,
    perfil: MENU_PERFIL
}

export const CONFIG_MENU: ConfigMenu = {
    opened: true,
    over: 'side',
    expandHeight: '42px',
    collapseHeight: '42px',
    displayMode: 'flat',
}
import { Routes } from '@angular/router';
import { Login } from './components/layout/login/login';
import { Principal } from './components/layout/principal/principal';
import { Carroslist } from './components/carros/carroslist/carroslist';
import { Carrosdatails } from './components/carros/carrosdatails/carrosdatails';
import { Marcasdatails } from './components/marcas/marcasdatails/marcasdatails';
import { Marcaslist } from './components/marcas/marcaslist/marcaslist';

export const routes: Routes = [
    {path: "" , redirectTo:"login", pathMatch:"full"},
    {path:"login", component :Login },
    {path: "admin", component : Principal, children:[
        {path:"carros",component:Carroslist},
        {path:"carros/new",component: Carrosdatails},
        {path:"carros/edit/:id",component:Carrosdatails},
        {path:"marcas",component:Marcaslist},
        {path:"marcas/new",component: Marcasdatails},
        {path:"maras/edit/:id",component:Marcasdatails}
    ]}
];

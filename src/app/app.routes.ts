import { Routes } from '@angular/router';
import { EventosComponent } from './components/eventos/eventos.component';
import { DetalhaEventoComponent } from './components/detalha-evento/detalha-evento.component';
import { IncluiEventoComponent } from './components/inclui-evento/inclui-evento.component';

export const routes: Routes = [
    {
        path: '',
        component: EventosComponent
    },
    {
        path: 'eventos',
        component: EventosComponent
    },
    {
        path: 'incluirEvento',
        component: IncluiEventoComponent
    },
    {
        path: 'eventos/detalhe/:id',
        component: DetalhaEventoComponent
    }
];

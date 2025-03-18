import { Routes } from '@angular/router';
import { EventosComponent } from './components/eventos/eventos.component';
import { DetalhaEventoComponent } from './components/detalha-evento/detalha-evento.component';

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
        path: 'eventos/detalhe/:id',
        component: DetalhaEventoComponent

    }
];

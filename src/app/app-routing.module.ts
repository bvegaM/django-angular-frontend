import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DireccionComponent} from './direccion/direccion.component'
import { PersonaComponent } from './persona/persona.component';
import { PersonaAddComponent} from './persona/persona-add/persona-add.component';
import { DireccionAddComponent} from './direccion/direccion-add/direccion-add.component'

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'direccion',
                children: [
                    {
                        path: '',
                        component: DireccionComponent,
                    },
                    {
                        path: 'add',
                        component: DireccionAddComponent,
                    }
                ]
            },
            {
                path: 'persona',
                children: [
                    {
                        path: '',
                        component: PersonaComponent,
                    },
                    {
                        path: 'add',
                        component: PersonaAddComponent,
                    }
                ]
                
            }
        ]
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule { }
export const routedComponents: any[] = [
    MainComponent,
];

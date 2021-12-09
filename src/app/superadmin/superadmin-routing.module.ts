import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AformularioComponent } from './pages/aformulario/aformulario.component';
import { CformularioComponent } from './pages/cformulario/cformulario.component';
import { CseguridadComponent } from './pages/cseguridad/cseguridad.component';
import { CusuariosComponent } from './pages/cusuarios/cusuarios.component';
import { ExportarComponent } from './pages/exportar/exportar.component';
import { HomeComponent } from './pages/home/home.component';
import { InformeComponent } from './pages/informe/informe.component';
import { PanelComponent } from './pages/panel/panel.component';
import { PapeleraComponent } from './pages/papelera/papelera.component';
import { RolesComponent } from './pages/roles/roles.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'panel',
        component: PanelComponent
      },
      {
        path:'roles',
        component: RolesComponent
      },
      {
        path:'usuarios',
        component:UsuariosComponent
      },
      {
        path:'cusuarios',
        component:CusuariosComponent
      },
      {
        path:'editusuarios/:id',
        component:CusuariosComponent
      },
      {
        path:'cseguridad',
        component:CseguridadComponent
      },
      {
        path:'exportar',
        component:ExportarComponent
      },
      {
        path:'cformulario',
        component:CformularioComponent
      },
      {
        path:'aformulario',
        component:AformularioComponent
      },
      {
        path:'papelera',
        component:PapeleraComponent
      },
      {
        path:'informes',
        component:InformeComponent
      },
      {
        path:'**',
        redirectTo:'panel'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }

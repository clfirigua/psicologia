import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperadminRoutingModule } from './superadmin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { PrimengModule } from '../primeng/primeng.module';
import { AformularioComponent } from './pages/aformulario/aformulario.component';
import { CformularioComponent } from './pages/cformulario/cformulario.component';
import { CseguridadComponent } from './pages/cseguridad/cseguridad.component';
import { ExportarComponent } from './pages/exportar/exportar.component';
import { InformeComponent } from './pages/informe/informe.component';
import { PanelComponent } from './pages/panel/panel.component';
import { PapeleraComponent } from './pages/papelera/papelera.component';
import { RolesComponent } from './pages/roles/roles.component';
import { CusuariosComponent } from './pages/cusuarios/cusuarios.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    UsuariosComponent,
    AformularioComponent,
    CformularioComponent,
    CseguridadComponent,
    ExportarComponent,
    InformeComponent,
    PanelComponent,
    PapeleraComponent,
    RolesComponent,
    CusuariosComponent
  ],
  imports: [
    CommonModule,
    SuperadminRoutingModule,
    PrimengModule,
    FormsModule
  ]
})
export class SuperadminModule { }

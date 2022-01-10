import { CadastroComponent } from './../cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CadastroComponent,
    children: [
      /* {
        path: 'cadastromedico',
        component: CadastroMedicoComponent
      }, */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }

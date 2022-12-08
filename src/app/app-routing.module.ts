import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day004Component } from './pages/day004/day004.component';
import { Day005Component } from './pages/day005/day005.component';
import { Day007ComponentInteractionComponent } from './pages/day007-component-interaction/day007-component-interaction.component';
import { Day008ComponentInteractionComponent } from './pages/day008-component-interaction/day008-component-interaction.component';
import { Day010ViewchildViewchildrenComponent } from './pages/day010-viewchild-viewchildren/day010-viewchild-viewchildren.component';
import { HelloComponent } from './pages/hello/hello.component';
import { AngularMaterialModule } from './share/angular-material/angular-material.module';

const routes: Routes = [
  {
    path: 'day-001',
    component: HelloComponent
  },
  {
    path: 'day-004',
    component: Day004Component
  },
  {
    path: 'day-005',
    component: Day005Component
  },
  {
    path: 'day-007',
    component: Day007ComponentInteractionComponent
  },
  {
    path: 'day-008',
    component: Day008ComponentInteractionComponent
  },
  {
    path: 'day-010',
    component: Day010ViewchildViewchildrenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    AngularMaterialModule
  ]
})
export class AppRoutingModule { }

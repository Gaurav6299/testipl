import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ipl2024Component } from './ipl2024/ipl2024.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
        children: [
          {
            path: 'ipl-2024',
            component: Ipl2024Component,
          },
          {
            path: 'slw',
            component: Ipl2024Component,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

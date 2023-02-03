import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeUsuarioComponent } from './components/home-usuario/home-usuario.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path:'login', component:LoginComponent },
  { path:'home', component:HomeUsuarioComponent },
  { path:'', redirectTo:'home', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
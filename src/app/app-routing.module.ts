import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { TopicComponent } from './components/topic/topic.component';
import { LoginComponent } from './components/login/login.component';
import { CheckboxRequiredValidator } from '@angular/forms';
import { CadastrarLoginComponent } from './components/cadastrar-login/cadastrar-login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'post/:id',
    component: DetailComponent
  },
  {
    path: 'topic',
    component: TopicComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastrar-login',
    component: CadastrarLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

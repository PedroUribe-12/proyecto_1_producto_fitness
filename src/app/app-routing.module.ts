import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { PaginaNoEncontradaComponent } from './pages/pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  
  {
    path:'',
    redirectTo: 'pagina_principal',
    pathMatch: 'full'
  },
  {
    path:'pagina_principal',
    component: PaginaPrincipalComponent
  },
  {
    path:'contactanos',
    component: ContactanosComponent
  },
  {
    path:'empleados',
    component: EmpleadosComponent
  },
  {
    path:'productos',
    component: ProductosComponent
  },
  {
    path:'sobre-nosotros',
    component: SobreNosotrosComponent
  },
  {
    path:'**',
    component: PaginaNoEncontradaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

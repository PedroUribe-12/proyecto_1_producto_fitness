import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { NutricionComponent } from './pages/nutricion/nutricion.component';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';

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
    path:'nutricion',
    component: NutricionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

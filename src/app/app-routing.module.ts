import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

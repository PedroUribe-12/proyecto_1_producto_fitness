import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { FooterComponent } from './footer/footer.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NutricionComponent } from './pages/nutricion/nutricion.component';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    FooterComponent,
    EmpleadosComponent,
    ContactanosComponent,
    SobreNosotrosComponent,
    ProductosComponent,
    NutricionComponent,
    PaginaPrincipalComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

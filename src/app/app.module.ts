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
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { PaginaNoEncontradaComponent } from './pages/pagina-no-encontrada/pagina-no-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    FooterComponent,
    EmpleadosComponent,
    ContactanosComponent,
    SobreNosotrosComponent,
    ProductosComponent,
    PaginaPrincipalComponent,
    PaginaNoEncontradaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./modules/core/core.module";
import { TranslocoRootModule } from './transloco-root.module';
import { HttpClientModule } from '@angular/common/http';
import { ShareModule } from './modules/share/share.module';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    TranslocoRootModule,
    HttpClientModule,

    CoreModule,
    ShareModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// Ngxs modules (devs included)
import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CreateFormComponent } from './components/create-form/create-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxsModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

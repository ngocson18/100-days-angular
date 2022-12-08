import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelloComponent } from './pages/hello/hello.component';
import { Day004Component } from './pages/day004/day004.component';
import { Day005Component } from './pages/day005/day005.component';
import { Day007ComponentInteractionComponent } from './pages/day007-component-interaction/day007-component-interaction.component';
import { Day008ComponentInteractionComponent } from './pages/day008-component-interaction/day008-component-interaction.component';
import { DetailComponent } from './pages/day008-component-interaction/detail/detail.component';
import { Day010ViewchildViewchildrenComponent } from './pages/day010-viewchild-viewchildren/day010-viewchild-viewchildren.component';
import { ChildrenComponent } from './pages/day010-viewchild-viewchildren/children/children.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    Day004Component,
    Day005Component,
    Day007ComponentInteractionComponent,
    Day008ComponentInteractionComponent,
    DetailComponent,
    Day010ViewchildViewchildrenComponent,
    ChildrenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

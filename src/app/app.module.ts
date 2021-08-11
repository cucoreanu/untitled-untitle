import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserItemComponent} from './user-item/user-item.component';
import {UserContainerComponent} from './user-container/user-container.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { UserPostComponent } from './user-post/user-post.component';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    UserContainerComponent,
    UserPostComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

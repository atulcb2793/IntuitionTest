import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BackendService } from './shared/data.service';
import { Task1Component } from './task1/task1.component';
import { TextFilterPipe } from './task1/text-filter.pipe';
import { Task2Component } from './task2/task2.component';
import { SortByPipe } from './task3/sortBy.pipe';
import { Task3Component } from './task3/task3.component';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    TextFilterPipe,
    HeaderComponent,
    SortByPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [BackendService],
  bootstrap: [AppComponent],
})
export class AppModule {}

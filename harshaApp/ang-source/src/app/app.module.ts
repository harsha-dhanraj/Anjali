import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FirstPartComponent } from './components/first-part/first-part.component';
import { SecodPartComponent } from './components/secod-part/secod-part.component';
import{ RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DeviceService } from'./services/device.service';
const appRoutes: Routes = [
  { path: '', component:AppComponent},
  { path: 'add', component : FirstPartComponent},
  { path: 'show', component : SecodPartComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    FirstPartComponent,
    SecodPartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],

  
  providers: [DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

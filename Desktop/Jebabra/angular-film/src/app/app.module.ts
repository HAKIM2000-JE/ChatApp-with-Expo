import { HttpService } from 'src/app/services/http.service';
import { BannerComponent } from './banner/banner.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormStyle } from '@angular/common';
import { GaugeModule } from 'angular-gauge';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http' 

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs'
import {MatIconModule} from '@angular/material/icon'
import {MatSelectModule} from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';

import { HttpHeaderInterceptor } from './interceptors/http-params.interceptor';
import { DetailsComponent } from './components/details/details.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { FavorisComponent } from './favoris/favoris.component';
import { AuthComponent } from './auth/auth.component'




@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    BannerComponent,
    DetailsComponent,
    FavorisComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    NgxPaginationModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    HttpClientModule,
    
    GaugeModule.forRoot()
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Example1Component} from './example1/example1.component';
import { Example2Component} from './example2/example2.component';
import { Example3Component} from './example3/example3.component';
import { HeaderComponent } from './header/header.component';

const appRoots: Routes = [
  { path:'exam1', component:Example1Component },
  { path:'exam2', component:Example2Component },
  { path:'exam3', component:Example3Component },
  { path:'', redirectTo:Example1Component, pathMatch:'full' },
]

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(appRoots) 
    ],

  declarations: [ 
    AppComponent, 
    HelloComponent,
    Example1Component,
    Example2Component ,
    Example3Component,
    HeaderComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { ErrorHandler , NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes , RouterModule } from "@angular/router";

import { MatComponentsModule } from "./modules/mat-components.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AppErrorHandler } from "./errors/app-error-handler";
import { NotFoundComponent } from "./errors/components/not-found/not-found.component";
import { NoAccessComponent } from "./errors/components/no-access/no-access.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
    { path : "" , component: HomeComponent } ,
    { path : "home" , component: HomeComponent } ,

    { path : "no-access" , component: NoAccessComponent } ,
    { path : "**" , component: NotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent ,
        NoAccessComponent ,
        NotFoundComponent ,
        HomeComponent ,
    ] ,
    imports: [
        BrowserModule ,
        AppRoutingModule ,
        BrowserAnimationsModule ,
        RouterModule.forRoot(routes) ,
        ReactiveFormsModule ,
        FormsModule ,
        MatComponentsModule
    ] ,
    exports: [
        RouterModule
    ] ,
    providers: [
        { provide: ErrorHandler , useClass: AppErrorHandler }
    ] ,
    bootstrap: [AppComponent]
})

export class AppModule { 
    
}

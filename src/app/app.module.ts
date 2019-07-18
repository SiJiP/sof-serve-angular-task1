import { HttpClientModule } from "@angular/common/http"
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule,  ReactiveFormsModule  } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FormComponent } from "./form/form.component";
import { HomeComponent } from "./home/home.component";
import { ThirdPageComponent } from "./third-page/third-page.component";
import { FormValidationComponent } from "./form-validation/form-validation.component";
import { SalaryPipe } from './form-validation/salary.pipe';
import { HoverButtonDirective } from './hover-button.directive';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "ToDoList", component: FormComponent },
  { path: "thirdPage", component: ThirdPageComponent },
  { path: "Registaration", component: FormValidationComponent },
  { path: "httpTrain", component: PostsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    ThirdPageComponent,
    FormValidationComponent,
    SalaryPipe,
    HoverButtonDirective,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

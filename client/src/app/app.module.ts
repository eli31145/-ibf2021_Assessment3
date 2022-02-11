import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { RouterModule, Routes } from '@angular/router';
import { RecipeService } from './recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  //confirm that no need '/' in front of recipe & add
  {path:'', component:RecipeListComponent},
  {path:'recipe/:recipeId', component:RecipeDetailComponent},
  {path:'add', component: RecipeAddComponent},
  {path:'**', redirectTo:'/', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeAddComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeSummary } from '../models';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeSummary[] = []

  constructor(private router: Router, private recipeSvc: RecipeService) { }

  ngOnInit(): void {
    this.recipeSvc.getAllRecipes()
      .then(r => this.recipes = r)
/*     this.recipeSvc.getAllRecipes()
      .then(recipes =>{
        this.recipes = recipes.map(
          (recipe:{id:any, name:any}) => ({id: recipe.id, name: recipe.name} as Recipe)
        )
      }) */
  }

  toAdd(){
    this.router.navigate(['/add']);
  }

}

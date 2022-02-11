import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "./models";




@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) {}

  recipes: Recipe[] = []

  getAllRecipes(): Promise<Recipe[]> {
    //.toArray cannot work since recipes is not a table
    return this.recipes.toArray()
      .then(recipe => recipe.map(
        r=> ({id: r.id, name: r.name} as Recipe)
      ))

/*       return this.recipes.forEach(recipe => recipe.map(
        r=> ({id: r.id, name: r.name} as Recipe)
      )) */
  }



}


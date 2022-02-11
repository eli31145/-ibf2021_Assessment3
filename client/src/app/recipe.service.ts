import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recipe, RecipeSummary } from "./models";
import { lastValueFrom } from "rxjs";

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) {}

  recipes: RecipeSummary[] = []
  //recipe: Recipe

  getAllRecipes(): Promise<RecipeSummary[]> {
    //.toArray cannot work since recipes is not a table
    return lastValueFrom(this.http.get<RecipeSummary[]>(`http://localhost:8080/api/recipes`))
  }

  getRecipe(recipeId: string): Promise<Recipe> {
    return lastValueFrom(this.http.get<Recipe>(`http://localhost:8080/api/recipe/${recipeId}`))
  }

}


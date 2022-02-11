import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Recipe, RecipeSummary } from "./models";
import { lastValueFrom } from "rxjs";




@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) {}

  recipes: RecipeSummary[] = []
  //recipe: Recipe

  getAllRecipes(): Promise<RecipeSummary[]> {
    //.toArray cannot work since recipes is not a table
    const headers = new HttpHeaders()
    .set('Accept', 'application/json')
    return lastValueFrom(this.http.get<RecipeSummary[]>(`/api/recipes`))
  }

  getRecipe(recipeId: string): Promise<Recipe> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
    return lastValueFrom(this.http.get<Recipe>(`/api/recipe/${recipeId}`))
  }

  postRecipe(r: Recipe): Promise<any> {

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')

      return lastValueFrom(
        this.http.post(`/api/recipe`, JSON.stringify(r))
      )

  }

}


import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../models';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe!: Recipe
  recipeId!: string

  constructor(private activatedRoute: ActivatedRoute, private recipeSvc: RecipeService) { }

  ngOnInit(): void {
    this.recipeId = this.activatedRoute.snapshot.params['recipeId']
    this.recipeSvc.getRecipe(this.recipeId)
      .then(r => this.recipe = r as Recipe)
      .catch((error)=>{
        alert('No recipe found with this id')
      })
  }

}

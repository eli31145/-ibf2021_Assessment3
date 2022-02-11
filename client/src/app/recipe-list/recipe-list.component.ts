import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../models';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = []

  constructor(private router: Router, private recipeSvc: RecipeService) { }

  ngOnInit(): void {
    this.recipeSvc.getAllRecipes()
      .then(r => this.recipes = r)
  }

  toAdd(){
    this.router.navigate(['/add']);
  }

}

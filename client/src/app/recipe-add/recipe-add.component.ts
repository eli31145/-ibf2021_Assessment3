import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {

  recipeForm!: FormGroup;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }

  onAddIngredient(){
    const control = new FormControl(null, [Validators.required, Validators.minLength(3), Validators.min(1)])
    (<FormArray>this.recipeForm.get('ingredients').push(control))
  }
}

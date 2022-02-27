import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../models';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {

  recipeForm!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder,
    private recipeSvc: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.recipeForm = this.createForm()
  }

  private createForm(): FormGroup {
    return this.fb.group({
      title: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      ingredients: this.fb.array([
        new FormControl('', [Validators.required, Validators.minLength(3), Validators.min(1)])]),
      instruction: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      image: this.fb.control('', Validators.required)
    })
  }



  onAddIngredient(){
    const control = new FormControl('', [Validators.required, Validators.minLength(3)]);
    (<FormArray>this.recipeForm.get('ingredients')).push(control);
  }

  deleteInput(i: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(i);
  }

  get controls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }


  onSubmit(){
    const r: Recipe = this.recipeForm.value as Recipe
    console.log('>>>Recipe Added', r);
    this.recipeSvc.postRecipe(r)
      .then(result => {
        this.recipeForm.reset();
        console.info('>>> result', result);
        alert('Recipe Saved');
        this.router.navigate([''])
      })
      .catch(error=>{
        alert('An error occured')
        console.error('>>>Error', error)
      })

  }
}

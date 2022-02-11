package ibf2021.assessment.csf.server.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ibf2021.assessment.csf.server.models.Recipe;
import ibf2021.assessment.csf.server.services.RecipeService;
import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonObjectBuilder;
import jakarta.json.JsonString;
import jakarta.json.JsonValue;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;


/* Write your request hander in this file */

@RestController
@RequestMapping(path="/api/recipe", produces=MediaType.APPLICATION_JSON_VALUE)
public class RecipeRestController{

    @Autowired
    private RecipeService recipeSvc;

    @CrossOrigin
    @GetMapping(path="{recipeId}")
    //no path since direct get mapping
    public ResponseEntity<String> getRecipeById(@PathVariable String recipeId){
        Optional<Recipe> recipe = recipeSvc.getRecipeById(recipeId);
        Recipe r;

        if (recipe.isPresent()){
            r = recipe.get();    
        } else {
            return ResponseEntity.notFound().build();
        }

        JsonObjectBuilder jOb = Json.createObjectBuilder()
            .add("title", r.getTitle())
            .add("image", r.getImage())
            .add("ingredients", (r.getIngredients().toString()))
            .add("instruction", r.getInstruction());
            
            JsonObject jO = jOb.build();
            return ResponseEntity.ok(jO.toString());
    }






}
package ibf2021.assessment.csf.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.http.MediaType;

import ibf2021.assessment.csf.server.models.Recipe;
import ibf2021.assessment.csf.server.services.RecipeService;
import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonArrayBuilder;

/* Write your request hander in this file */


@RestController
@RequestMapping(path="/api/recipes", produces=MediaType.APPLICATION_JSON_VALUE)
public class RecipesRestController{

    @Autowired
    private RecipeService recipeSvc;

    @CrossOrigin
    @GetMapping
    //no path since direct get mapping
    public ResponseEntity<String> getAllRecipes(){
        List<Recipe> recipeList = recipeSvc.getAllRecipes();

        JsonArrayBuilder jABuilder = Json.createArrayBuilder();
        recipeList.stream().forEach(recipe ->
        jABuilder.add(
            Json.createObjectBuilder()
                .add("id", recipe.getId())
                .add("title", recipe.getTitle())
        ));

        JsonArray jArr = jABuilder.build();
        //print statement check jArr contains recipes
        
        return ResponseEntity.ok(jArr.toString());
    }






}
package ibf2021.assessment.csf.server.models;

import org.springframework.beans.factory.annotation.Autowired;

import ibf2021.assessment.csf.server.services.RecipeService;
import jakarta.json.Json;
import jakarta.json.JsonObject;

public class methods {
    
    @Autowired
    private RecipeService recipeSvc;

    String id;
    String title;

    public String getId() { return this.id; }
	public void setId(String id) { this.id = id; }

	public String getTitle() { return this.title; }
	public void setTitle(String title) { this.title = title; }

    public JsonObject toJson() {
		return Json.createObjectBuilder()
			.add("id", id)
			.add("title", title)
			.build();
            
	}
}

export interface RecipeSummary {
  id: string
  title: string
}

export interface Recipe extends RecipeSummary{
	image: string
	instruction: string
  //JS no LinkedList<String>. Consider saving as array and use for loop for html
	ingredients: String[]
}

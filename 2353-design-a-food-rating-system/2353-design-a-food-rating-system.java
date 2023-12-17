import java.util.*;

class Food {
    String food;
    String cuisine;
    int rating;

    public Food(String f, String c, int r) {
        this.food = f;
        this.cuisine = c;
        this.rating = r;
    }
}

public class FoodRatings {
    private static Map<String, Food> foodMap;
    private static Map<String, PriorityQueue<Food>> cuisineMap;

    public FoodRatings(String[] foods, String[] cuisines, int[] ratings) {
        foodMap = new HashMap<>();
        cuisineMap = new HashMap<>();
        int n = foods.length;
        for (int i = 0; i < n; i++) {
            Food food = new Food(foods[i], cuisines[i], ratings[i]);
            foodMap.put(foods[i], food);
            if (cuisineMap.containsKey(cuisines[i])) {
                cuisineMap.get(cuisines[i]).add(food);
            } else {
                PriorityQueue<Food> pq = new PriorityQueue<>(Comparator.comparing((Food a) -> a.rating).reversed().thenComparing(a -> a.food));
                pq.add(food);
                cuisineMap.put(cuisines[i], pq);
            }
        }
    }

    public void changeRating(String foodName, int newRating) {
        Food food = foodMap.get(foodName);
        cuisineMap.get(food.cuisine).remove(food);        
        food.rating = newRating;
        cuisineMap.get(food.cuisine).add(food);
    }

    public String highestRated(String cuisine) {
        return cuisineMap.get(cuisine).peek().food;
    }
}

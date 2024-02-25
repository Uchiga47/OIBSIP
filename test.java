import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 1. Create a new HashMap of type String for keys and Integer for values.
        Map<String, Integer> map = new LinkedHashMap<>();

        // 2. Add key-value pairs to the HashMap.
        map.put("Apple", 10);
        map.put("Banana", 20);
        map.put("Cherry", 30);
       

        // 3. Print the entire HashMap.
        System.out.println(map);

        // 4. Get the value for the key "Banana" and print it.
        System.out.println(map.get("Banana"));

        // 5. Check if the key "Durian" exists in the HashMap and print the result.
        System.out.println(map.containsKey("Durian"));

        // 6. Get the value for the key "Durian". If the key doesn't exist, put a default value of 0 and print it.
        int durianValue = map.getOrDefault("Durian", 0);
        System.out.println(durianValue);

        // 7. Print the set of keys in the HashMap.
        Set<String> keys = map.keySet();
        System.out.println(keys);

        // 8. Print the collection of values in the HashMap.
        Collection<Integer> values = map.values();
        System.out.println(values);

        // 9. Remove the key "Banana" and its associated value from the HashMap.
        map.remove("Banana");
        System.out.println(map);

        // 10. Replace the value for the key "Cherry" with 35 and print the updated HashMap.
        map.replace("Cherry", 35);
        map.compute("Apple", (key, value) -> value + 0);

        // 4. Add Durian with a value of 5.
        map.put("Durian", 5);
        map.replaceAll((key, value) -> value + 0);
        map.compute("Apple", (key, value) -> value + 5);
       
        System.out.println(map);

        // 11. Use replaceAll to add 5 to each value in the HashMap and print the updated HashMap.
        map.replaceAll((key, value) -> value + 0);
        map.compute("Apple", (key, value) -> value + 5);
         map.compute("Apple", (key, value) -> value + 5);
        System.out.println(map);

        // 12. Use compute to add 10 to the value for the key "Apple" and print the updated HashMap.
         map.put("Elderberry", 50);
         map.compute("Apple", (key, value) -> value + 10);
        System.out.println(map);
        

        // 13. Merge the following HashMap with the original one: "Durian" -> 40, "Elderberry" -> 50.



        // 14. Clear the HashMap and print it.
        map.clear();
        System.out.println(map);
    }
}

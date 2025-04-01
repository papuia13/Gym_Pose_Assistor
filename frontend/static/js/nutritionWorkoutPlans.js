const NutritionPlans = {
    Underweight: `
        <h2>Nutrition Plan for Underweight Individuals</h2>
        <p><strong>Focus:</strong> Muscle gain with Mizo-inspired cuisine</p>
        <p><strong>Calories:</strong> 2,800–3,500 kcal/day | <strong>Macros:</strong> 30% Protein, 40% Carbs, 30% Fats</p>
        <ul class="tips">
            <li>Eat every 3–4 hours to maintain calorie surplus</li>
            <li>Include Mizo fermented foods (bekang, sa-um) for gut health</li>
            <li>Hydrate with herbal teas + 3L water/day</li>
        </ul>
        <table>
            <tr><th>Day</th><th>Meal Time</th><th>Meal Description</th><th>Key Nutrients</th><th>Portion</th></tr>
            <tr><td>Monday</td><td>Breakfast</td><td>Whole eggs, toast with avocado, milk with chia seeds</td><td>Protein, Healthy fats</td><td>3 eggs, 2 slices, 250ml</td></tr>
            <tr><td>Tuesday</td><td>Lunch</td><td>Chicken bekang (fermented paste) curry, rice, bamboo shoot salad</td><td>Iron, Probiotics</td><td>200g chicken, 1 cup rice</td></tr>
            <tr><td>Wednesday</td><td>Snack</td><td>Banana with peanut butter, protein shake</td><td>Potassium, Protein</td><td>2 bananas, 30g PB, 300ml</td></tr>
            <tr><td>Thursday</td><td>Dinner</td><td>Grilled fish with Dal, roasted potatoes</td><td>Omega-3, Fiber</td><td>250g fish, 1 cup dal</td></tr>
            <tr><td>Friday</td><td>Breakfast</td><td>Oatmeal with nuts, dried fruits, Mizo honey</td><td>Complex carbs</td><td>1 cup oats, 30g nuts</td></tr>
            <tr><td>Saturday</td><td>Lunch</td><td>Lentils, chapati, curd, bamboo shoot salad</td><td>Plant protein</td><td>1 cup lentils, 2 chapati</td></tr>
            <tr><td>Sunday</td><td>Dinner</td><td>Mizo veggie curry with pork, sticky rice</td><td>B Vitamins</td><td>150g pork, 1 cup rice</td></tr>
        </table>
    `,
    NormalWeight: `
        <h2>Nutrition Plan for Normal Weight Individuals</h2>
        <p><strong>Focus:</strong> Maintenance with balanced Mizo flavors</p>
        <p><strong>Calories:</strong> 2,000–2,400 kcal/day | <strong>Macros:</strong> 25% Protein, 50% Carbs, 25% Fats</p>
        <ul class="tips">
            <li>3 meals + 2 snacks daily</li>
            <li>Use Mizo superfoods: wild honey, bamboo shoots</li>
            <li>Herbal infusions + 2.5L water</li>
        </ul>
        <table>
            <tr><th>Day</th><th>Meal Time</th><th>Meal Description</th><th>Key Nutrients</th><th>Portion</th></tr>
            <tr><td>Monday</td><td>Breakfast</td><td>Oats with fruits and Mizo wild honey</td><td>Fiber, Antioxidants</td><td>3/4 cup oats, 1 fruit</td></tr>
            <tr><td>Tuesday</td><td>Lunch</td><td>Grilled chicken with Mizo herbs salad</td><td>Lean protein</td><td>150g chicken</td></tr>
            <tr><td>Wednesday</td><td>Snack</td><td>Fruit salad with roasted Mizo seeds</td><td>Vitamins, Minerals</td><td>1 cup fruits, 20g seeds</td></tr>
            <tr><td>Thursday</td><td>Dinner</td><td>Veg stir-fry with tofu and Mizo spices</td><td>Plant protein</td><td>200g veggies, 100g tofu</td></tr>
            <tr><td>Friday</td><td>Breakfast</td><td>Poha with veggies and Mizo chili</td><td>Complex carbs</td><td>1 cup poha</td></tr>
            <tr><td>Saturday</td><td>Lunch</td><td>Rajma with Mizo twist, rice, salad</td><td>Fiber, Iron</td><td>3/4 cup rajma, 3/4 cup rice</td></tr>
            <tr><td>Sunday</td><td>Dinner</td><td>Chicken soup with Mizo herbs and bread</td><td>Hydration, Protein</td><td>1 bowl soup, 1 slice</td></tr>
        </table>
    `,
    Overweight: `
        <h2>Nutrition Plan for Overweight Individuals</h2>
        <p><strong>Focus:</strong> Weight loss with light Mizo meals</p>
        <p><strong>Calories:</strong> 1,500–1,800 kcal/day | <strong>Macros:</strong> 30% Protein, 40% Carbs, 30% Fats</p>
        <ul class="tips">
            <li>Use smaller plates for portion control</li>
            <li>Steam/grill instead of frying</li>
            <li>Hmarcha chili boosts metabolism</li>
        </ul>
        <table>
            <tr><th>Day</th><th>Meal Time</th><th>Meal Description</th><th>Key Nutrients</th><th>Portion</th></tr>
            <tr><td>Monday</td><td>Breakfast</td><td>Fruit smoothie with oats and Mizo herbs</td><td>Fiber, Vitamins</td><td>1 cup smoothie</td></tr>
            <tr><td>Tuesday</td><td>Lunch</td><td>Grilled veggies with quinoa and Mizo dressing</td><td>Low-calorie, Fiber</td><td>1 cup veggies, 1/2 cup quinoa</td></tr>
            <tr><td>Wednesday</td><td>Snack</td><td>Mixed seeds and low-fat Mizo yogurt</td><td>Probiotics, Healthy fats</td><td>20g seeds, 150g yogurt</td></tr>
            <tr><td>Thursday</td><td>Dinner</td><td>Baked fish with steamed Mizo greens</td><td>Omega-3, Iron</td><td>150g fish, 1 cup greens</td></tr>
            <tr><td>Friday</td><td>Breakfast</td><td>Low-fat yogurt with chia and Mizo honey</td><td>Calcium, Fiber</td><td>200g yogurt, 1 tbsp chia</td></tr>
            <tr><td>Saturday</td><td>Lunch</td><td>Dal soup with whole wheat bread</td><td>Plant protein</td><td>1 bowl soup, 1 slice</td></tr>
            <tr><td>Sunday</td><td>Dinner</td><td>Veggie stir-fry with tofu and Mizo spices</td><td>Low-calorie</td><td>150g veggies, 80g tofu</td></tr>
        </table>
    `,
    Obese: `
        <h2>Nutrition Plan for Obese Individuals</h2>
        <p><strong>Focus:</strong> Significant weight reduction with gentle Mizo flavors</p>
        <p><strong>Calories:</strong> 1,200–1,500 kcal/day | <strong>Macros:</strong> 35% Protein, 35% Carbs, 30% Fats</p>
        <ul class="tips">
            <li>Chew food thoroughly</li>
            <li>Anthurium leaves for detox</li>
            <li>Avoid sugary drinks</li>
        </ul>
        <table>
            <tr><th>Day</th><th>Meal Time</th><th>Meal Description</th><th>Key Nutrients</th><th>Portion</th></tr>
            <tr><td>Monday</td><td>Breakfast</td><td>Green smoothie with spinach, banana, Mizo herbs</td><td>Fiber, Iron</td><td>1 cup smoothie</td></tr>
            <tr><td>Tuesday</td><td>Lunch</td><td>Veggie salad with olive oil and Mizo chili dressing</td><td>Low-calorie</td><td>2 cups veggies</td></tr>
            <tr><td>Wednesday</td><td>Snack</td><td>Fresh fruit or Mizo bamboo shoot sticks</td><td>Vitamins</td><td>1 medium fruit</td></tr>
            <tr><td>Thursday</td><td>Dinner</td><td>Grilled chicken with steamed Mizo greens</td><td>Lean protein</td><td>120g chicken, 1 cup greens</td></tr>
            <tr><td>Friday</td><td>Breakfast</td><td>Oats with fresh fruits and Mizo honey</td><td>Fiber</td><td>1/2 cup oats, 1 fruit</td></tr>
            <tr><td>Saturday</td><td>Lunch</td><td>Soup with whole grains and Mizo spices</td><td>Hydration</td><td>1 bowl soup</td></tr>
            <tr><td>Sunday</td><td>Dinner</td><td>Baked tofu with roasted Mizo veggies</td><td>Plant protein</td><td>100g tofu, 1 cup veggies</td></tr>
        </table>
    `
};

const WorkoutPlans = {
    Underweight: `
        <h2>Workout Plan for Underweight Individuals</h2>
        <p><strong>Goal:</strong> Build muscle mass | <strong>Frequency:</strong> 5 days/week</p>
        <ul class="tips">
            <li>Progressive overload principle</li>
            <li>Rest 60 sec between sets</li>
            <li>Consume protein within 30min post-workout</li>
        </ul>
        <table>
            <tr><th>Day</th><th>Exercise</th><th>Details</th><th>Duration</th></tr>
            <tr><td>Monday</td><td>Upper body strength</td><td>Biceps curls (12kg), tricep dips, shoulder press - 3 sets × 12 reps</td><td>45 min</td></tr>
            <tr><td>Tuesday</td><td>Lower body strength</td><td>Barbell squats (20kg), lunges, calf raises - 3 × 12</td><td>45 min</td></tr>
            <tr><td>Thursday</td><td>Full-body workout</td><td>Deadlifts (25kg), bench press, rows - 3 × 10</td><td>50 min</td></tr>
            <tr><td>Saturday</td><td>Core workout</td><td>Weighted planks (10kg), leg raises, Russian twists - 3 × 15</td><td>30 min</td></tr>
            <tr><td>Sunday</td><td>Light cardio</td><td>Cycling at 65% max heart rate</td><td>30 min</td></tr>
        </table>
    `,
    NormalWeight: `
        <h2>Workout Plan for Normal Weight Individuals</h2>
        <p><strong>Goal:</strong> Maintain fitness | <strong>Frequency:</strong> 4-5 days/week</p>
        <ul class="tips">
            <li>Mix cardio and strength</li>
            <li>Yoga for flexibility</li>
            <li>Listen to body signals</li>
        </ul>
        <table>
            <tr><th>Day</th><th>Exercise</th><th>Details</th><th>Duration</th></tr>
            <tr><td>Monday</td><td>Cardio</td><td>Running at 6min/km pace</td><td>30 min</td></tr>
            <tr><td>Tuesday</td><td>Upper body</td><td>Push-ups (3×15), pull-ups (3×8), dumbbell curls (8kg)</td><td>40 min</td></tr>
            <tr><td>Thursday</td><td>Lower body</td><td>Squats (bodyweight 3×20), step-ups, leg press (40kg)</td><td>40 min</td></tr>
            <tr><td>Saturday</td><td>Core</td><td>Crunches (3×25), side planks (1min), bicycle kicks</td><td>30 min</td></tr>
            <tr><td>Sunday</td><td>Yoga</td><td>Sun salutations ×10, warrior poses</td><td>40 min</td></tr>
        </table>
    `,
    Overweight: `
        <h2>Workout Plan for Overweight Individuals</h2>
        <p><strong>Goal:</strong> Fat loss | <strong>Frequency:</strong> 4 days/week</p>
        <ul class="tips">
            <li>Low-impact to protect joints</li>
            <li>Walk 10k steps daily</li>
            <li>Hydrate during workouts</li>
        </ul>
        <table>
            <tr><th>Day</th><th>Exercise</th><th>Details</th><th>Duration</th></tr>
            <tr><td>Monday</td><td>Low-impact cardio</td><td>Stationary cycling at moderate pace</td><td>40 min</td></tr>
            <tr><td>Tuesday</td><td>Full-body strength</td><td>Bodyweight squats (3×15), wall push-ups (3×12)</td><td>35 min</td></tr>
            <tr><td>Thursday</td><td>Yoga</td><td>Chair yoga with stretching</td><td>30 min</td></tr>
            <tr><td>Saturday</td><td>Resistance band</td><td>Band rows (3×15), leg lifts (3×12)</td><td>30 min</td></tr>
        </table>
    `,
    Obese: `
        <h2>Workout Plan for Obese Individuals</h2>
        <p><strong>Goal:</strong> Mobility | <strong>Frequency:</strong> 3-4 days/week</p>
        <ul class="tips">
            <li>Seated exercises initially</li>
            <li>Focus on breathing</li>
            <li>5% intensity increase weekly</li>
        </ul>
        <table>
            <tr><th>Day</th><th>Exercise</th><th>Details</th><th>Duration</th></tr>
            <tr><td>Monday</td><td>Walking</td><td>Slow pace (2km/h) with breaks</td><td>20 min</td></tr>
            <tr><td>Tuesday</td><td>Chair exercises</td><td>Seated leg lifts (2×10), arm circles</td><td>25 min</td></tr>
            <tr><td>Thursday</td><td>Breathing</td><td>Diaphragmatic breathing exercises</td><td>15 min</td></tr>
            <tr><td>Saturday</td><td>Water aerobics</td><td>Gentle pool movements</td><td>20 min</td></tr>
        </table>
    `
};
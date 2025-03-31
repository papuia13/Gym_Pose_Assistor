function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('bmi-result').innerText = "Please enter valid weight and height.";
        return;
    }

    const bmi = weight / ((height / 100) ** 2);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "NormalWeight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById('bmi-result').innerText = `Your BMI is: ${bmi.toFixed(2)} (${category})`;
    localStorage.setItem('bmi', bmi.toFixed(2));
    localStorage.setItem('bmiCategory', category);

    // Enable the buttons for nutrition and workout plans
    document.getElementById('nutrition-plan-btn').disabled = false;
    document.getElementById('workout-plan-btn').disabled = false;
}

function getNutritionPlan() {
    const bmi = localStorage.getItem('bmi');
    const category = localStorage.getItem('bmiCategory');

    if (!bmi || !category || bmi === "null" || category === "null") {
        document.getElementById('nutrition-plan-result').innerText = "BMI value is required. Please calculate your BMI first.";
        return;
    }

    // Display the appropriate nutrition plan
    document.getElementById('nutrition-plan-result').innerHTML = NutritionPlans[category] || "No plan available for this category.";
}


function getWorkoutPlan() {
    const bmi = localStorage.getItem('bmi');
    const category = localStorage.getItem('bmiCategory');

    if (!bmi || !category || bmi === "null" || category === "null") {
        document.getElementById('workout-plan-result').innerText = "BMI value is required. Please calculate your BMI first.";
        return;
    }

    // Display the appropriate workout plan
    document.getElementById('workout-plan-result').innerHTML = WorkoutPlans[category] || "No plan available for this category.";
}

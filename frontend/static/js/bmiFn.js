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
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById('bmi-result').innerText = `Your BMI is: ${bmi.toFixed(2)} (${category})`;
    localStorage.setItem('bmi', bmi.toFixed(2));
    localStorage.setItem('bmiCategory', category);
}

function getNutritionPlan() {
    const bmi = localStorage.getItem('bmi');
    const category = localStorage.getItem('bmiCategory');
    let plan = "";
        
    if (!bmi || !category) {
        plan = "Please calculate your BMI first.";
    } else {
        switch (category) {
            case "Underweight":
                plan = "Your nutrition plan should include high-calorie foods like nuts, dried fruits, and whole grains.";
                break;
            case "Normal weight":
                plan = "Your nutrition plan should include a balanced diet with a mix of proteins, carbohydrates, and fats.";
                break;
            case "Overweight":
                plan = "Your nutrition plan should focus on low-calorie, nutrient-dense foods like vegetables, fruits, and lean proteins.";
                break;
            case "Obese":
                plan = "Your nutrition plan should focus on reducing calorie intake and increasing physical activity. Consult a dietitian for a personalized plan.";
                break;
        }
    }

    document.getElementById('nutrition-plan-result').innerText = plan;
}

function getWorkoutPlan() {
    const bmi = localStorage.getItem('bmi');
    const category = localStorage.getItem('bmiCategory');
    let plan = "";
        
    if (!bmi || !category) {
        plan = "Please calculate your BMI first.";
    } else {
        switch (category) {
            case "Underweight":
                plan = "Your workout plan should focus on strength training to build muscle mass.";
                break;
            case "Normal weight":
                plan = "Your workout plan should include a mix of cardio and strength training exercises.";
                break;
            case "Overweight":
                plan = "Your workout plan should focus on cardio exercises to burn calories and strength training to build muscle.";
                break;
            case "Obese":
                plan = "Your workout plan should focus on low-impact cardio exercises and gradually increase intensity. Consult a fitness trainer for a personalized plan.";
                break;
        }
    }

    document.getElementById('workout-plan-result').innerText = plan;
}
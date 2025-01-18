let currentStep = 0;
const steps = document.querySelectorAll(".step");

function updateSteps() {
    steps.forEach((step, index) => {
        if (index <= currentStep) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    });
}

function changeStep(stepChange) {
    if (currentStep + stepChange >= 0 && currentStep + stepChange < steps.length) {
        currentStep += stepChange;
        updateSteps();
    }
}

// Initialize first step
updateSteps();
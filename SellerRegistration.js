let currentStep = 1;

function nextStep(stepNumber) {
    // Hide current step
    const currentStepElement = document.getElementById(`step-${currentStep}`);
    currentStepElement.style.display = 'none';

    // Show next step
    const nextStepElement = document.getElementById(`step-${stepNumber}`);
    nextStepElement.style.display = 'block';

    // Update the progress bar
    currentStep = stepNumber;
    updateProgressBar();
}

function previousStep(stepNumber) {
    // Hide current step
    const currentStepElement = document.getElementById(`step-${currentStep}`);
    currentStepElement.style.display = 'none';

    // Show previous step
    const previousStepElement = document.getElementById(`step-${stepNumber}`);
    previousStepElement.style.display = 'block';

    // Update the progress bar
    currentStep = stepNumber;
    updateProgressBar();
}

function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    progressBar.value = (currentStep - 1) * (100 / 5); // 5 steps in total
}

function handleVerification() {
    const verificationCode = document.getElementById('verification-code').value;
    const submitButton = document.getElementById('submit-btn');
    const loadingSpinner = document.getElementById('loading-spinner');

    if (verificationCode === "123456") { // Simulating correct verification code
        loadingSpinner.style.display = 'none';
        submitButton.disabled = false;
        alert("Verification successful! You can now proceed.");
    } else {
        loadingSpinner.style.display = 'none';
        alert("Incorrect verification code. Please try again.");
    }
}

// Initially show Step 1 when the page loads
document.addEventListener('DOMContentLoaded', () => {
    nextStep(1);
});
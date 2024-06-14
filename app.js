function leasingCalc() {
   // Get the output fields - leasing details
   const [totalCost, downPayment, monthlyInstallment, interestRate] =
      document.getElementsByClassName('output');

   const carTypeSelect = document.getElementById('carType');
   const leasePeriodSelect = document.getElementById('leasePeriod');
   const carValueInput = document.getElementById('carValue');
   const carValueSlider = document.getElementById('carValueSlider');
   const downPaymentInput = document.getElementById('downPayment');
   const downPaymentSlider = document.getElementById('downPaymentSlider');

   carTypeSelect.addEventListener('change', updateInterestRate);
   // Dynamicly change the text input value based on the slider and vice versa
   carValueSlider.addEventListener('input', () => {
      carValueInput.value = carValueSlider.value;
      validateInputs();
   });
   carValueInput.addEventListener('input', () => {
      carValueSlider.value = carValueInput.value;
      validateInputs();
   });
   downPaymentSlider.addEventListener('input', () => {
      downPaymentInput.value = downPaymentSlider.value;
      validateInputs();
   });
   downPaymentInput.addEventListener('input', () => {
      downPaymentSlider.value = downPaymentInput.value;
      validateInputs();
   function updateInterestRate() {
      const carType = carTypeSelect.value;
      let interestR;
      if (carType === 'brandNew') interestR = 2.99;
      if (carType === 'used') interestR = 3.7;
      interestRate.textContent = interestR;

      return interestR;
   }

   // Validation of the input fields
   function validateInputs() {
      const carVal = Number(carValueInput.value);
      const downPayment = Number(downPaymentInput.value);
      const carValError = document.getElementById('carValueError');
      const downPaymentError = document.getElementById('downPaymentError');

      if (carVal < 10000 || carVal > 200000) {
         carValError.style.display = 'block';
      } else {
         carValError.style.display = 'none';
      }

      if (downPayment < 10 || downPayment > 50) {
         downPaymentError.style.display = 'block';
      } else {
         downPaymentError.style.display = 'none';
      }
   }
   });
}

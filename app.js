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

   // Dynamicly change the text input value based on the slider and vice versa
   carValueSlider.addEventListener('input', () => {
      carValueInput.value = carValueSlider.value;
   });
   carValueInput.addEventListener('input', () => {
      carValueSlider.value = carValueInput.value;
   });
   downPaymentSlider.addEventListener('input', () => {
      downPaymentInput.value = downPaymentSlider.value;
   });
   downPaymentInput.addEventListener('input', () => {
      downPaymentSlider.value = downPaymentInput.value;
   });
}

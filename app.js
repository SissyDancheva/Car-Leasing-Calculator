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
   leasePeriodSelect.addEventListener('change', calcTotalLeasing);

   // Dynamicly change the text input value based on the slider and vice versa
   carValueSlider.addEventListener('input', () => {
      carValueInput.value = carValueSlider.value;
      validateInputs();
      calcDownPayment();
   });
   carValueInput.addEventListener('input', () => {
      carValueSlider.value = carValueInput.value;
      validateInputs();
      calcTotalLeasing();
   });
   downPaymentSlider.addEventListener('input', () => {
      downPaymentInput.value = downPaymentSlider.value;
      validateInputs();
      calcTotalLeasing();
   });
   downPaymentInput.addEventListener('input', () => {
      downPaymentSlider.value = downPaymentInput.value;
      validateInputs();
      calcTotalLeasing();
   });

   function calcDownPayment() {
      const carVal = Number(carValueInput.value);
      const downPaymentPercent = Number(downPaymentInput.value) / 100;
      const downPaymentResult = (carVal * downPaymentPercent).toFixed(2);
      downPayment.textContent = downPaymentResult;
      
      return downPaymentResult;
   }

   function calcMonthlyInstallment() {
      const carVal = Number(carValueInput.value);
      const downPaymentRes = calcDownPayment();
      const principal = carVal - downPaymentRes;
      const leasePeriod = Number(leasePeriodSelect.value);
      const annualInterestRate = updateInterestRate();
      const monthlyInterestRate = annualInterestRate / 100 / 12;

      const monthlyPayment =
         (principal *
            (monthlyInterestRate *
               Math.pow(1 + monthlyInterestRate, leasePeriod))) /
         (Math.pow(1 + monthlyInterestRate, leasePeriod) - 1);

      monthlyInstallment.textContent = monthlyPayment.toFixed(2);
      return monthlyPayment;
   }

   function calcTotalLeasing() {
      const monthPayment = calcMonthlyInstallment();
      const leasePeriod = Number(leasePeriodSelect.value);
      const downPay = calcDownPayment();

      const totalLeasingCost = monthPayment * leasePeriod + Number(downPay);
      totalCost.textContent = totalLeasingCost.toFixed(2);
      return totalLeasingCost;
   }
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

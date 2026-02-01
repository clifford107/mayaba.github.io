<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
const sheetURL ="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5tSY_u68l0MtB0ZCG7TZvHRzzqdTMSfWbARqiIQ6V_UKdoIWUloMF3nTMEvr7s2Ed1vspt9vDeuVc/pub?gid=1732160294&single=true&output=csv";
fetch(sheetURL)
  .then(res => res.text())
  .then(data => {
    const rows = data.split('\n').slice(1);
    let income = 0;
    let expenses = 0;
    rows.forEach(row => {
      const cols = row.split(',');
      const type = cols[1];
      const amount = parseFloat(cols[3]);
      if (type === "Income") income += amount;
      if (type === "Expense") expenses += amount;
    });
    document.getElementById("income").innerText = "ZMW " + income.toFixed(2);
    document.getElementById("expenses").innerText = "ZMW " + expenses.toFixed(2);
    document.getElementById("savings").innerText = "ZMW " + (income - expenses).toFixed(2);
    new Chart(document.getElementById('financeChart'), {
      type: 'doughnut',
      data: {
        labels: ['Income', 'Expenses'],
        datasets: [{
          data: [income, expenses]
        }]
      }
    });
  });
</script>

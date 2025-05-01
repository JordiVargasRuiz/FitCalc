<script>
  import { onMount } from 'svelte';
  import { Chart, BarElement, Tooltip, Legend, Title, CategoryScale, LinearScale, BarController, LineElement, LineController, PointElement } from 'chart.js';
  import Navbar from './Navbar.svelte';
  import Footer from './Footer.svelte';

  Chart.register(BarElement, Tooltip, Legend, Title, CategoryScale, LinearScale, BarController, LineElement, LineController, PointElement);

  let weight = '';
  let height = '';
  let imc = null;
  let category = '';
  let recommendation = '';
  let history = [];
  let chart;
  let progressChart;

  function validateInputs() {
    if (weight <= 0 || weight > 200) {
      alert('Por favor ingresa un peso válido (entre 1 y 200 kg).');
      return false;
    }
    if (height <= 0 || height > 2.30) {
      alert('Por favor ingresa una altura válida (entre 0.1 y 2.30 metros).');
      return false;
    }
    return true;
  }

  function calculateIMC() {
    if (validateInputs() && weight && height) {
      const bmi = weight / (height * height);
      imc = bmi.toFixed(2);

      if (bmi < 18.5) {
        category = 'Bajo peso';
        recommendation = 'Aumenta tu ingesta calórica con alimentos nutritivos y consulta a un nutricionista.';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal';
        recommendation = 'Mantén un estilo de vida saludable con dieta equilibrada y ejercicio regular.';
      } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Sobrepeso';
        recommendation = 'Controla tus porciones, mantén actividad física y evita alimentos ultraprocesados.';
      } else {
        category = 'Obesidad';
        recommendation = 'Busca asesoría profesional para un plan de pérdida de peso sostenible.';
      }

      const newEntry = { imc, category, recommendation, date: new Date().toLocaleString() };
      history = [newEntry, ...history];
      updateCharts();
    }
  }

  // Actualización conjunta de ambos gráficos
  function updateCharts() {
    if (chart) {
      chart.data.datasets[0].data = [18.5, 24.9, 29.9, 50];
      chart.update();
    } else {
      updateChart();
    }

    if (progressChart) {
      progressChart.data.labels = history.map(entry => entry.date);
      progressChart.data.datasets[0].data = history.map(entry => parseFloat(entry.imc));
      progressChart.update();
    } else {
      updateProgressChart();
    }
  }

  // Función para actualizar el gráfico de barras (IMC por categorías)
  function updateChart() {
    const ctx = document.getElementById('imcBarChart').getContext('2d');

    chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Bajo peso', 'Normal', 'Sobrepeso', 'Obesidad'],
        datasets: [{
          data: [18.5, 24.9, 29.9, 50],
          backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(255, 206, 86, 0.7)', 'rgba(153, 102, 255, 0.7)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)', 'rgba(153, 102, 255, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return tooltipItem.label + ": " + tooltipItem.raw.toFixed(2);
              }
            }
          }
        },
        scales: {
          x: {
            ticks: {
              callback: function (value) {
                return value.toFixed ? value.toFixed(2) : value;
              }
            }
          }
        }
      }
    });
  }

  function updateProgressChart() {
    const ctx = document.getElementById('imcProgressChart').getContext('2d');

    progressChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: history.map(entry => entry.date),
        datasets: [{
          label: 'IMC',
          data: history.map(entry => parseFloat(entry.imc)),
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Evolución del IMC'
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `IMC: ${tooltipItem.raw.toFixed(2)}`;
              }
            }
          }
        },
        scales: {
          x: {
            type: 'category',
            title: {
              display: true,
              text: 'Fecha'
            }
          },
          y: {
            title: {
              display: true,
              text: 'IMC'
            },
            min: 10,
            max: 50
          }
        }
      }
    });
  }

  // Funciones de estadísticas
  function averageIMC() {
    const sum = history.reduce((acc, entry) => acc + parseFloat(entry.imc), 0);
    return (sum / history.length).toFixed(2);
  }

  function minIMC() {
    const min = Math.min(...history.map(entry => parseFloat(entry.imc)));
    return min.toFixed(2);
  }

  function maxIMC() {
    const max = Math.max(...history.map(entry => parseFloat(entry.imc)));
    return max.toFixed(2);
  }

  // Limpiar historial
  function clearHistory() {
    history = [];
    updateCharts();
  }

  onMount(() => {
    updateChart();
    updateProgressChart();
  });
</script>


<div class="container">
  <!-- Contenedor de la calculadora de IMC -->
  <div class="calculator">
    <h2>Calculadora de IMC</h2>
    <div class="input-group">
      <label for="weight">Peso (kg):</label>
      <input type="number" id="weight" bind:value={weight} placeholder="Ingresa tu peso en kg" min="1" max="200" />
    </div>
    <div class="input-group">
      <label for="height">Altura (m):</label>
      <input type="number" id="height" bind:value={height} placeholder="Ingresa tu altura en metros" min="0.1" max="2.30" step="0.01" />
    </div>
    <button on:click={calculateIMC}>Calcular IMC</button>

    {#if imc !== null}
    {/if}

    <canvas id="imcBarChart" width="400" height="300"></canvas>
  </div>

  <!-- Contenedor del historial de IMC -->
  <div class="history">
    <div class="history-header">
      <h3>Historial</h3>
      <button on:click={clearHistory} class="clear-btn">Limpiar</button>
    </div>
    
    <!-- Información sobre IMC -->
    <div class="imc-info">
      <p><strong>¿Qué es el IMC?</strong></p>
      <p>El Índice de Masa Corporal (IMC) es una medida que se utiliza para evaluar si una persona tiene un peso adecuado en relación con su altura. Se calcula dividiendo el peso en kilogramos entre la altura en metros al cuadrado. </p>
      <p><strong>Las categorías de IMC son:</strong></p>
      <ul>
        <li><strong>Bajo peso:</strong> IMC inferior a 18.5</li>
        <li><strong>Peso normal:</strong> IMC entre 18.5 y 24.9</li>
        <li><strong>Sobrepeso:</strong> IMC entre 25 y 29.9</li>
        <li><strong>Obesidad:</strong> IMC superior a 30</li>
      </ul>
    </div>

{#if history.length > 0}
  <div class="history-container">
    <ul>
      {#each history as entry}
        <li>
          <strong>Tu IMC es:</strong> {entry.imc} ({entry.category})<br />
          <strong>Recomendación:</strong> {entry.recommendation} <br />
          <em>{entry.date}</em>
        </li>
      {/each}
    </ul>
  </div>
{:else}
  <p class="no-history">Sin cálculos aún.</p>
{/if}
  </div>

  <!-- Contenedor de estadísticas e IMC por evolución -->
  <div class="statistics">
    <h3>Estadísticas</h3>
    {#if history.length > 0}
      <ul>
        <li><strong>Promedio IMC:</strong> {averageIMC()}</li>
        <li><strong>IMC más bajo:</strong> {minIMC()}</li>
        <li><strong>IMC más alto:</strong> {maxIMC()}</li>
      </ul>
    {:else}
      <p>No hay datos para mostrar estadísticas.</p>
    {/if}
    <canvas id="imcProgressChart" width="400" height="200"></canvas>
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    padding: 40px;
    font-family: 'Roboto', sans-serif;
    flex-wrap: wrap;
  }

  .calculator, .history, .statistics {
    background: #fff;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.1);
    width: 400px;
    max-width: 100%;
  }

  .input-group {
    margin-bottom: 15px;
  }

  .input-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  .input-group input {
    width: 100%;
    padding: 8px;
    border-radius: 6px;
    border: 1px solid #ccc;
  }

  button {
    padding: 10px 15px;
    background-color: #1976d2;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  .history-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .clear-btn {
    background-color: #f44336;
  }

  .imc-info {
    background-color: #f3f3f3;
    padding: 10px;
    margin-top: 15px;
    border-radius: 6px;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  li {
    margin-bottom: 10px;
  }

  .no-history {
    font-style: italic;
    color: #888;
  }

  .statistics ul {
    list-style-type: none;
    padding-left: 0;
  }

.history-container {
  background-color: white;
  padding: 20px;
  border-radius: 6px;
  max-height: 130px;
  overflow-y: auto;
}

.history-container ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.history-container li {
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}

.history-container li:last-child {
  border-bottom: none;
}

</style>

<script>
  import Navbar from './components/Navbar.svelte';
  import Footer from './components/Footer.svelte';
  import ImcCalculator from './components/ImcCalculator.svelte';
  import Background from './components/Background.svelte';
</script>

<main>
  <!-- Fondo de la página -->
  <Background imageUrl="/bg.png" />
  
  <!-- Barra de navegación -->
  <Navbar />
  
  <!-- Contenedor de bienvenida -->
  <div class="welcome-container">
    <h1><i class="fas fa-star"></i> Bienvenido a FitCalc</h1>
  </div>
  
  <!-- Calculadora IMC -->
  <ImcCalculator class="imc-calculator" />
  
  <!-- Pie de página -->
  <Footer />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    position: relative;
  }

  .welcome-container {
    text-align: center;
    margin-bottom: 1px; /* Reduce el espacio debajo del mensaje */
	margin-top: 1px;
  }

  h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 5px; /* Reduce el espacio debajo del título */
    font-weight: bold;
  }

  i {
    margin-right: 10px;
    font-size: 3rem; /* Ajusta el tamaño del ícono */
    color: #FFD700; /* Color dorado para el ícono */
  }

  .imc-calculator {
    margin-top: 1px; /* Ajusta el espacio entre el welcome y la calculadora */
  }
</style>

<script>
  import Navbar from './components/Navbar.svelte';
  import Footer from './components/Footer.svelte';
  import ImcCalculator from './components/ImcCalculator.svelte';
  import Background from './components/Background.svelte';
</script>

<main>
  <Background imageUrl="/FitCalc/bg.png" />
  
  <Navbar />
  <div class="welcome-container">
    <h1><i class="fas fa-star"></i> Bienvenido a FitCalc</h1>
  </div>
  <ImcCalculator class="imc-calculator" />
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
    margin-bottom: 1px;
	margin-top: 1px;
  }

  h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 5px;
    font-weight: bold;
  }

  i {
    margin-right: 10px;
    font-size: 3rem;
    color: #FFD700;
  }

  .imc-calculator {
    margin-top: 1px;
  }
</style>

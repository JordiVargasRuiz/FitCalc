<footer class="footer">
  <p>&copy; {new Date().getFullYear()} FitCalc. Todos los derechos reservados.</p>
</footer>

<script>
  // Para obtener el año actual dinámicamente
</script>

<style>
  /* Asegura que html y body no tengan márgenes ni rellenos predeterminados */
  html, body {
    margin: 0;
    padding: 0;
    height: 100%; /* Hace que el body ocupe toda la altura */
    width: 100%; /* Asegura que el body ocupe todo el ancho */
  }

  /* Asegura que el main ocupe toda la altura disponible entre el navbar y el footer */
  main {
    min-height: 100vh; /* Asegura que el main ocupe al menos toda la altura de la ventana */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Hace que el contenido esté separado */
  }

  .footer {
    background-color: #4CAF50; /* Cambié el color de fondo a un tono verde */
    color: white; /* Cambié el color del texto a blanco */
    text-align: center;
    padding: 30px 0; /* Aumenté el padding para hacerlo más espacioso */
    font-size: 1rem; /* Ajusté el tamaño de la fuente */
    margin-top: 40px;
    border-top: 1px solid #444; /* Cambié el color del borde superior para que se vea más sutil */
    width: 100%; /* Asegura que el footer ocupe todo el ancho de la pantalla */
    position: fixed; /* Lo fija en la parte inferior */
    bottom: 0; /* Lo coloca al final de la página */
    left: 0; /* Asegura que cubra todo el ancho */
    z-index: 10; /* Asegura que esté por encima de otros elementos */
  }

  /* Elimina cualquier margen en el párrafo del footer */
  .footer p {
    margin: 0;
  }
</style>

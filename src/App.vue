<template>
  <div id="app">

    <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo center">Lava Jato</a>
      <ul class="left hide-on-med-and-down">
        <li><a href="sass.html">Clientes</a></li>
        <li><a href="badges.html">Serviços</a></li>
      </ul>
    </div>
  </nav>
    <div class="container">

      <form>
          <label></label>
          <input type="text" placeholder="">
          <label>Nome</label>
          <input type="text" placeholder="Nome">
          <label>Endereço</label>
          <input type="text" placeholder="Endereço">
          <label>Telefone</label>
          <input type="number" placeholder="Telefone">
          <label>Veiculo</label>
          <input type="text" placeholder="Veiculo">
          <label>Placa</label>
          <input type="text" placeholder="Placa">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>QTD</th>
            <th>VALOR</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Arduino</td>
            <td>100</td>
            <td>50.00</td>
            <td>
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>

import Cliente from './services/clientes'

export default {
  
  mounted(){
    Cliente.listar().then(resposta => {
      console.log(resposta)
    })
  }
}


</script>

<style>

</style>

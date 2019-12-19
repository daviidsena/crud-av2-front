<template>
  <div id="home">
    <h1>Lista</h1>
    <table class="table table-hover border">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Quantidade</th>
          <th scope="col">Preço</th>
          <th scope="col" class="text-center">Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in lista" :key="index">
          <td>{{ item.nome }}</td>
          <td>{{ item.quantidade }}</td>
          <td>{{ item.preco }}</td>
          <td class="text-center">
            <div class="text-nowrap">
              <a
                data-toggle="modal"
                data-target="#modalInformacao"
                class="btn far fa-file-alt"
                data-tt="tooltip"
                data-placement="top"
                title="Informação"
                :onclick="item.id"
                id="btnInfo"
              ></a>
              <a
                data-toggle="modal"
                data-target="#modalEditar"
                class="btn fas fa-edit"
                data-tt="tooltip"
                data-placement="top"
                title="Atualizar"
                id="btnInfo"
                :onclick="item.id"
              ></a>
              <a
                data-toggle="modal"
                data-target="#exampleModalScrollable"
                class="btn far fa-trash-alt"
                data-tt="tooltip"
                data-placement="top"
                title="Excluir"
                id="btnInfo"
                :valor="item.id"
                :onclick="deleteItem"
              ></a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <a v-if="errors && errors.length"><center><h1>Erro ao carregar a lista!</h1></center></a>  
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  name: "Lista",
  computed: {
    ...mapState({
      host: state => state.host,
      token: state => state.token
    })
  },
  data: function() {
    return {
      lista: [],
      errors: []
    };
  },
  methods: {
    deleteItem(event) {
      return event
    }
  },
  mounted() {
    axios
      .get(`${this.host}`, { headers: { Authorization: this.token } })
      .then(response => {
        this.lista = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style>
</style>

<template>
  <form action="">
    <div class="field">
      <label class="label">Titulo</label>
      <input type="text" class="input" placeholder="Titulo" />
    </div>
    <div class="field">
      <label class="label">Descripcion</label>
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Agrega tu descripcion"
        ></textarea>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="radio">
          <input type="radio" name="gasto" value="true" />
          Gasto
        </label>
        <label class="radio">
          <input type="radio" name="gasto" value="false" />
          Ingreso
        </label>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Guardar</button>
      </div>
      <div class="control">
        <button class="button is-link is-light">Cancelar</button>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  // title, description, tipo (gasto, ingreso)
  setup() {},
};
</script>
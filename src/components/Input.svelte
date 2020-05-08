<script>
  export let name = "World";
</script>

<div class="input">
  <input type="text" bind:value={name} />
  <p>Hello {name}!</p>
</div>

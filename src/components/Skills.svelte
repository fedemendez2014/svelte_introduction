<script>
  let skills = [
    {
      id: 1,
      name: "HTML"
    },
    {
      id: 2,
      name: "CSS"
    },
    {
      id: 3,
      name: "JavaScript"
    }
  ];
</script>

<style>
  .skills {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline;
    margin: 0 0 0 0.4em;
  }
</style>

<div class="skills">
  <h3>Habilidades</h3>
  <ul>
    {#each skills as { name }, index}
      <li>{name}</li>
    {/each}
  </ul>
</div>

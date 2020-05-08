<script>
  let someText = `Software Developer at Platzi`;
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<style>
  p {
    color: var(--theme-color);
  }
</style>

<div class="about">
  <p>{someText}</p>
  <button on:click={handleClick}>Click {count === 0 ? '' : count}</button>
</div>

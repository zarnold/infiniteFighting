<template>
  <div id="container">
    <header>
      <h1>Header</h1>
    </header>
    <main>
      <section>
        <nuxt />
      </section>
    </main>
  </div>
</template>
<style scoped>
.container > * {
  width: 30rem;
  margin: 2rem auto;
  padding: 1em;
  box-sizing: border-box;
}
.container {
  display: flex;
}

header {
  order: 1;
}
footer {
  order: 5;
}
main {
  background-color: hsl(144, 70%, 80%);
  order: 3;
}
nav {
  background-color: hsl(216, 70%, 80%);
  order: 2;
}
aside {
  background-color: hsl(288, 70%, 80%);
  order: 4;
}

.container {
  flex-direction: row;
  flex-wrap: wrap;
}
.container header,
.container footer {
  flex-basis: 100%;
}
.container main {
  flex-grow: 1;
}
.container nav {
  flex-basis: 25%;
}
.container aside {
  flex-basis: 25%;
}
</style>

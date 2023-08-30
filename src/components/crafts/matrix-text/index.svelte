<script lang="ts">
  import AnimatedSentence from "./animation.svelte";

  type Item = {
    title: string;
    description: string;
  };

  let data: Item[] = [
    {
      title: "(Neo)vim",
      description: "The editor I can't quit",
    },
    {
      title: "Terminal Emulator",
      description: "Where things happens",
    },
    {
      title: "Compiler",
      description: "Transform text files to machine instructions",
    },
    {
      title: "Coffee",
      description: "Drug of choice",
    },
    {
      title: "Website Design",
      description: "All the small details that make a difference",
    },
    {
      title: "Pixels",
      description: "Small things that matter",
    },
    {
      title: "Blur",
      description: "Hidding the ugly",
    },
  ];
</script>

<main>
  {#each data as item}
    <div class="container">
      <div class="item">
        <AnimatedSentence sentence={item.title} />
        -
        <AnimatedSentence sentence={item.description} --color="rgb(156 163 175)" />
      </div>
      <div class="line" />
    </div>
  {/each}
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    font-size: 15px;
    padding: 2em;
  }

  .container {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .item {
    display: flex;
    align-items: flex-end;
    gap: 5px;
  }

  .line {
    margin-left: 10px;
    height: 0.1px;
    flex-grow: 1;
    background-color: #8c8c8c;
  }
</style>

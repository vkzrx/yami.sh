<script lang="ts">
  import { onMount } from "svelte";
  import { getCommonPrefix } from '~/lib/utils';

  export let sequence: string[];
  export let speed: number;
  export let repeat: boolean = false;

  let text = "";

  onMount(() => {
    let seqIndex = 0;
    let letterIndex = 0;
    let currentText = sequence[0];
    let direction: 'forward' | 'backward' = 'forward';
    let prefix = getCommonPrefix(sequence[0], sequence[1]);

    const timer = setInterval(() => {
      if (direction === 'backward') {
        if (letterIndex === 0) {
          direction = 'forward';
          prefix = getCommonPrefix(currentText, sequence[(seqIndex + 1) % sequence.length]);
          return;
        }
        if (text.length <= prefix.length) {
          direction='forward';
          prefix = getCommonPrefix(currentText, sequence[(seqIndex + 1) % sequence.length]);
          return;
        }
        text = text.slice(0, -1);
        letterIndex--;
        return;
      }

      if (letterIndex >= currentText.length) {
        direction = 'backward';
        seqIndex++;
        currentText = sequence[seqIndex % sequence.length];
        if (!repeat && (seqIndex % sequence.length) === 0) {
          clearInterval(timer);
          return;
        }
        return;
      }

      text += currentText[letterIndex];
      letterIndex++;
    }, speed);

    return () => clearInterval(timer);
  });
</script>

<div class="w-96 flex items-center space-x-1 {$$props.class || ''}">
  <span>{text}</span>
  <div class="cursor" />
</div>

<style>
  .cursor {
    width: 3px;
    height: 24px;
    background: white;
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
</style>

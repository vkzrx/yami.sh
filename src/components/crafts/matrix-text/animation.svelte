<script lang="ts">
  export let sentence: string;
  export let speed: number = 30;

  let currentIndex = 0;
  let currentSentence = "";

  setInterval(() => {
    if (currentSentence === sentence) return;

    if (currentIndex <= sentence.length - 1) {
      let newLetter = sentence[currentIndex];

      // check if letter is lowercase
      if (newLetter.charCodeAt(0) >= 97 && newLetter.charCodeAt(0) <= 122) {
        newLetter = "a";
      }

      // check if letter is uppercase
      if (newLetter.charCodeAt(0) >= 65 && newLetter.charCodeAt(0) <= 90) {
        newLetter = "A";
      }

      currentSentence += newLetter;
      currentIndex++;
    }

    currentSentence = currentSentence
      .split("")
      .map((letter, index) => {
        if (letter === " ") return letter;
        if (letter >= sentence[index]) return letter;
        return String.fromCharCode(letter.charCodeAt(0) + 1);
      })
      .join("");
  }, speed);
</script>

<span>{currentSentence}</span>

<style>
  span {
    color: var(--color, #fff);
    font-size: var(--font-size, 1em);
    font-weight: var(--font-weight, 400);
  }
</style>

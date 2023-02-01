<script>
  import { onMount } from "svelte";
  import BlockchainBackground from "./BlockchainBackground.svelte";

  // section bind
  let sect,
    isMobile = true;

  // text glitch anim
  onMount(() => {
    isMobile = window.matchMedia("(max-width : 780px)").matches;

    function generateRandomString(length) {
      let result = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      return result;
    }

    let i = 0;
    const name = "YASH GOYAL";
    const nameEl = sect.querySelector("#name");
    const animStretch = 3;
    let animInterval = setInterval(() => {
      if (i / animStretch >= name.length) {
        clearInterval(animInterval);
        nameEl.classList.replace("greenText", "text-primary");
        sect.classList.replace("bg-black", "bg-background");
        sect
          .querySelectorAll(".hidden-during-anim")
          .forEach((e) =>
            e.classList.replace("hidden-during-anim", "transition-800")
          );
        setInterval(() => {
          if (nameEl.textContent.includes("_")) {
            nameEl.innerHTML = "&nbsp; " + name;
          } else {
            nameEl.innerHTML = "_ " + name;
          }
        }, 500);
      }
      nameEl.textContent =
        ((i / animStretch) % 2 != 0 ? "> " : "_ ") +
        name.slice(0, i / animStretch) +
        generateRandomString(name.length - i / animStretch);
      i++;
    }, 80);
  });
</script>

<section
  bind:this={sect}
  id="home"
  class="hero widescreen:pl-page h-screen bg-black transition-800 flex mobile:justify-center"
>
  <div
    class="left relative flex flex-col justify-center items-center h-full min-w-max"
  >
    <p class="hidden-during-anim w-full text-primary text-3xl font-medium">
      Hi, I am
    </p>
    <h1
      id="name"
      class="greenText transition-800 text-8xl w-full font-medium console-text mobile:text-5xl"
    >
      placeholder
    </h1>
    <button
      class="absolute bottom-28 hidden-during-anim text-primary flex items-center font-semibold text-3xl gap-x-3"
      on:click={() => {
        window.open("/resume.pdf", "_");
      }}
    >
      <img
        class="w-[2ch] aspect-square brightness-0 invert"
        src="https://cdn-icons-png.flaticon.com/512/724/724933.png"
        alt="download-icon"
      /> Resume</button
    >
  </div>
  <div class="right w-auto h-full relative hidden-during-anim widescreen-only">
    <div
      class="absolute w-full h-full z-[1] blockchain-cover pointer-events-none"
    />
    {#if !isMobile}
      <BlockchainBackground color="#aaaaaa" />
    {/if}
  </div>
</section>

<style>
  .hero,
  .hero * {
    transition-delay: 1000ms;
  }
  .console-text {
    font-family: "Inconsolata", sans-serif;
  }
  .greenText {
    @apply text-green-500;
  }
  .hidden-during-anim {
    opacity: 0;
  }
  .blockchain-cover {
    background-image: linear-gradient(
      transparent,
      transparent,
      rgb(var(--background))
    );
  }
</style>

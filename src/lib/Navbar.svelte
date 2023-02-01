<script>
  import { onMount } from "svelte";

  let nav;

  function randomColor() {
    return "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  }

  function brightenColor(hex) {
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    if (r + g + b < 382) {
      r = Math.min(255, r + 128);
      g = Math.min(255, g + 128);
      b = Math.min(255, b + 128);
    }

    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  onMount(() => {
    setInterval(() => {
      nav.style.setProperty("--underline-color", brightenColor(randomColor()));
    }, 5000);

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    window.addEventListener("scroll", () => {
      if (window.scrollY > 32) {
        nav.classList.remove("nav-hidden");
      } else {
        nav.classList.add("nav-hidden");
      }
    });
  });
</script>

<nav
  class="fixed top-0 left-0 w-full bg-[#00000022] backdrop-blur-lg z-[99999] nav-hidden"
  bind:this={nav}
>
  <div
    class="items flex text-primary font-sans justify-evenly py-6 font-extrabold p-page"
  >
    <a href="#home">Hi</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </div>
  <div class="nav-underline h-[1px]" />
</nav>

<style>
  nav {
    transition: 800ms;
    --underline-color: #ffffff;
  }

  .nav-hidden {
    transform: translateY(-110%);
  }

  nav a:hover {
    transition: 800ms;
    color: var(--underline-color);
    scale: 1.5;
  }

  .nav-underline {
    transition: 5000ms;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    background-color: var(--underline-color);
    box-shadow: 0px 0px 0.3rem var(--underline-color),
      0px 0px 1rem var(--underline-color);
  }
</style>

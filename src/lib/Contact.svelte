<script>
  import { onMount } from "svelte";

  let form;

  function randomColor() {
    return "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  }

  function LightenDarkenColor(col, amt) {
    var usePound = false;
    if (col[0] == "#") {
      col = col.slice(1);
      usePound = true;
    }

    var num = parseInt(col, 16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    var b = ((num >> 8) & 0x00ff) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    var g = (num & 0x0000ff) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
  }

  onMount(() => {
    setInterval(() => {
      form.style.setProperty(
        "--form-color",
        LightenDarkenColor(randomColor(), 40)
      );
    }, 1500);
  });
</script>

<section id="contact" class="bg-background py-20 p-page overflow-hidden">
  <h1 class="text-primary text-5xl text-center">
    Let's create something cool!
  </h1>
  <p class="text-primary text-center py-2 font-extralight text-lg">
    Let's get in touch and work together
  </p>
  <form
    action="/"
    method="POST"
    class="flex flex-col justify-center items-center py-12 gap-6"
    style="--form-color:#ffffff"
    bind:this={form}
  >
    <input
      type="text"
      name="name" class="widescreen:w-1/2 mobile:w-full" 
      placeholder="Your/Your organization's name"
    />
    <input
      type="email"
      name="email" class="widescreen:w-1/2 mobile:w-full" 
      placeholder="Email you'd prefer be contacted on"
      required
    />
    <textarea rows="8" name="msg" class="widescreen:w-1/2 mobile:w-full"  placeholder="Any message you might have" />
    <button class="cursor-none mobile:scale-50">Send Message</button>
  </form>
</section>

<style>
  form input,
  form textarea {
    @apply text-xl p-2 rounded-lg border bg-transparent text-primary;
    border-color: var(--form-color);
    box-shadow: 0px 0px 0.5rem var(--form-color);
    transition: 1000ms;
  }

  form button {
    @apply text-[var(--form-color)] relative font-black text-5xl font-mono border-4 border-[var(--form-color)] px-7 py-4 rounded-2xl mt-10;
    text-shadow: 0 0 0.08em hsl(100% 100% 100% / 0.5),
      0 0 0.2em var(--form-color);
    transition: 1000ms;
    box-shadow: 0 0 0.5em 0 var(--form-color),
      inset 0 0 0.5em 0 var(--form-color);
  }

  form button::before {
    @apply absolute bg-[var(--form-color)] top-[120%] left-0 w-full h-full opacity-70 pointer-events-none;
    transform: perspective(1em) rotateX(45deg) scale(1, 0.35);
    filter: blur(1.2em);
    transition: 1000ms;
    content: "";
  }

  form button::after {
    @apply absolute top-0 left-0 w-full h-full bg-transparent opacity-0;
    transition: 1000ms;
    box-shadow: 0 0 2em 0.5em var(--form-color);
    content: "";
  }

  form button:hover,
  form button:focus {
    @apply bg-[var(--form-color)] text-[var(--background)] -translate-y-6;
    text-shadow: none;
  }

  form button:hover::after,
  form button:focus::after {
    @apply opacity-100;
  }

  form button:hover::before,
  form button:focus::before {
    @apply opacity-100;
    top: calc(120% + 1.5rem);
    transform: perspective(0.6em) rotateX(45deg) scale(1, 0.45);
    filter: blur(1.8em);
  }
</style>

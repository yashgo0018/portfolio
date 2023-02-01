<script>
  import { onMount } from "svelte";
  import { tooltip } from "./tooltip";
  import gsap from "gsap";
  import ScrollToPlugin from "gsap/ScrollToPlugin";
  import ScrollTrigger from "gsap/ScrollTrigger";

  let isMobile = true;

  let projects = [];

  onMount(async () => {
    isMobile = window.matchMedia("(max-width : 780px)").matches;

    await fetch("/projects.json")
      .then((response) => response.json())
      .then((projectsData) => {
        projects = projectsData;
      });
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

    if (!isMobile) {
      /* Panels */
      const panels = gsap.utils.toArray("#panels-container .panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#panels-container",
          pin: true,
          start: "top top",
          scrub: 1,
          snap: {
            snapTo: 1 / (panels.length - 1),
            inertia: true,
            duration: { min: 0.1, max: 0.1 },
          },
        },
      });
    }
  });
</script>

<div id="content" class="site-content w-full overflow-x-hidden bg-background">
  <section id="projects" class="bg-background">
    <div
      id="panels-container"
      class="widescreen:h-screen flex flex-nowrap p-0 widescreen:overflow-hidden w-[500%] bg-background mobile:w-full mobile:flex-col mobile:gap-y-32"
    >
      <article
        class="panel w-full widescreen:h-screen bg-background flex justify-center items-center"
      >
        <h1
          class="text-primary w-full text-5xl font-semibold text-center widescreen-only"
        >
          Here are some things I've worked on
        </h1>
        <h1 class="mobile-only text-center text-primary text-5xl font-bold py-20">My Projects</h1>
        <p class="absolute bottom-8 text-primary widescreen-only">
          Keep Scrolling
        </p>
      </article>
      {#each projects as project}
        <article
          class="panel w-full widescreen:h-screen flex flex-col items-center justify-evenly widescreen:overflow-hidden text-primary"
        >
          <div class="h-8 widescreen-only" />
          <h1 class="text-6xl font-bold mobile:text-4xl">
            {project.name}
          </h1>
          <div class="flex mobile:flex-col-reverse">
            <div
              class="basis-1/2 flex flex-col gap-12 items-center justify-evenly"
            >
              <div class="text-center flex flex-col gap-14">
                <h3 class="text-2xl mobile:text-lg">Tech used : {project.tech}</h3>
              </div>
              <div class="px-8 text-justify mobile:px-2">
                <p>{project.description}</p>
              </div>
              <div class="flex w-full justify-evenly">
                <a href={project.demo.link} class="group relative"
                  ><img
                    src="https://cdn-icons-png.flaticon.com/512/969/969610.png"
                    alt="github-icon-{project.name}"
                    class="w-20 mobile:w-10 transition-500 aspect-square brightness-0 invert group-hover:-translate-x-1 group-hover:-translate-y-1 opacity-40"
                  /><img
                    src="https://cdn-icons-png.flaticon.com/512/969/969610.png"
                    alt="github-icon-{project.name}"
                    class="w-20 mobile:w-10 absolute top-0 left-0 transition-500 aspect-square brightness-0 invert group-hover:brightness-100 group-hover:invert-0 group-hover:translate-x-1 group-hover:translate-y-1"
                  />
                </a>

                <a href={project.source.link} class="group relative"
                  ><img
                    src="https://img.icons8.com/nolan/512/github.png"
                    alt="github-icon-{project.name}"
                    class="w-20 mobile:w-10 transition-500 aspect-square brightness-0 invert group-hover:-translate-x-1 group-hover:-translate-y-1 opacity-40"
                  /><img
                    src="https://img.icons8.com/nolan/512/github.png"
                    alt="github-icon-{project.name}"
                    class="w-20 mobile:w-10 absolute top-0 left-0 transition-500 aspect-square brightness-0 invert group-hover:brightness-100 group-hover:invert-0 group-hover:translate-x-1 group-hover:translate-y-1"
                  />
                </a>
              </div>
            </div>
            <div class="basis-1/2">
              <img
                src={project.gallery[0]}
                alt="project-{project.name}"
                class=" w-full object-contain"
              />
            </div>
          </div>
        </article>
      {/each}
    </div>
  </section>
</div>

<style>
  .panel {
    @apply relative bg-background p-page;
  }
  #panels-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    padding: 0;
  }
</style>

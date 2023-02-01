<script>
  import { onMount } from "svelte";
  import { tooltip } from "./tooltip";

  let sect;

  let skills = [];

  onMount(async () => {
    await fetch("/skills.json")
      .then((response) => response.json())
      .then((skillsData) => {
        skills = skillsData;
      });
  });
</script>

<section
  bind:this={sect}
  id="skills"
  class="skills bg-background p-page flex flex-col gap-y-6 items-center justify-center py-16"
>
  <h1 class="text-primary text-2xl font-semibold">MY SKILLS</h1>
  <div class="flex flex-wrap gap-8 justify-center group mobile:gap-3">
    {#each skills as skill}
      <img
        src={skill.icon}
        alt="{skill.name}-icon"
        class="aspect-square w-20 mobile:w-10 object-contain h-20 brightness-0 invert transition-300 hover:brightness-100 hover:invert-0 hover:scale-125"
        title="{skill.name}"
        use:tooltip
        draggable="false"
      />
    {/each}
  </div>
</section>

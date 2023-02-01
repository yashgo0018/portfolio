<script>
  const aboutText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolore odit ipsum sequi commodi quidem nihil optio! Dolorem esse ipsum iste, atque id facere maxime quia enim eveniet aspernatur unde reprehenderit recusandae officiis deleniti dolores dolore doloribus harum! Ea in hic fuga eligendi deserunt veniam! Recusandae harum cupiditate tempore beatae, voluptatum odio, ducimus expedita accusamus corrupti dolorem rem totam provident at atque laborum ex magni perspiciatis! Ipsam ratione laboriosam quis animi. Tenetur earum accusamus perferendis blanditiis nobis ipsum voluptatibus maiores dolorum sit rem. Id nam eius voluptatum quod veritatis? Eligendi excepturi incidunt autem adipisci? Veritatis esse expedita commodi quo, quidem ullam, officiis quod tenetur, possimus ea harum molestiae facere a? Consequuntur quis animi, eius quibusdam eligendi doloremque repudiandae tempore voluptates?";
</script>

<section id="about" class="bg-background p-page py-16 flex flex-col widescreen:gap-20 mobile:gap-y-12">
  <h1 class="text-primary text-5xl font-bold text-center mobile:mt-20">About me</h1>
  <span
    class="text-primary text-justify text-xl w-full font-light flex flex-wrap widescreen:gap-y-1 cursor-none "
  >
    {#each aboutText as w}
      {#if w === " "}
        <div class="w-[1ch] h-[1px]" />
      {:else}
        <div class="hover:rotate-180 hover:scale-[140%] mobile:font-light m-0 p-0 transition-800 hover:transition-none">{w}</div>
      {/if}
    {/each}
  </span>
</section>

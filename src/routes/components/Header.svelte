<script>
import { Navbar, NavBrand, NavHamburger, NavLi, NavUl, DarkMode, Button, Modal } from 'flowbite-svelte'
let defaultModal = false;

function scrollToAnchor(anchor) {
    const element = document.getElementById(anchor);
    element.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<div class="home flex flex flex-wrap mb-10 bg-blue-100 dark:bg-gray-200  pb-12 min-w-full" style="height:25rem" id='home'>
      <Navbar let:hidden let:toggle rounded color="none" class='min-w-full' style='height:5rem'>
        <NavBrand href="/">
            <DarkMode class="text-lg">
                <svelte:fragment slot="lightIcon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"/></svg>
                </svelte:fragment>
                <svelte:fragment slot="darkIcon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"/></svg>
                </svelte:fragment>
              </DarkMode>
        </NavBrand>
        <div class="flex items-center md:order-2">
        <NavHamburger class1="w-full md:flex md:w-auto md:order-1" on:click={toggle} />
        </div>
        <NavUl {hidden}>
          <NavLi on:click={() => scrollToAnchor('home')}>Home</NavLi>
          <NavLi on:click={() => scrollToAnchor('about')}>About</NavLi> 
          <NavLi on:click={() => scrollToAnchor('projects')}>Projects</NavLi>
          <NavLi on:click={() => scrollToAnchor('skills')}>Skills</NavLi>
          <NavLi on:click={() => scrollToAnchor('contact')}>Contact</NavLi>
        </NavUl>
      </Navbar>

    <div class="flex flex-wrap justify-center min-w-full items-top p-4 m-4">
        <h1 class='text-5xl min-w-full text-center'>Ariel Fernandez</h1>
        <h3 class='text-3xl min-w-full text-center -my-5' >Software Engineer - NYC area</h3>
        <h4 class='text-lg min-w-full text-center -my-1'>I have a deep interest in coding and the ability to use it to build and create</h4>
        <div class='min-w-full flex flex-wrap justify-center gap-1' style="height:1rem">
        <Button href='https://www.linkedin.com/in/arielfernandez412/'>LinkedIn</Button>
        <Button on:click={() => defaultModal = true}>Resume</Button>
        <Modal title="Ariels Resume" bind:open={defaultModal} autoclose>
          <img src="https://i.imgur.com/Iw1YXTf.jpg" alt="">
        </Modal>
          <Button href='https://github.com/RielDreams'>GitHub</Button>
    </div>
    </div>
</div>
    
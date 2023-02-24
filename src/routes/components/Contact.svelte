<script>
    import { Input, Label, Helper, Checkbox, Button, A, Textarea } from 'flowbite-svelte';
    import { Drawer, CloseButton, } from 'flowbite-svelte'
        import { sineIn } from 'svelte/easing';
      
        let hidden8 = true;
        let transitionParamsBottom = {
          y: 320,
          duration: 200,
          easing: sineIn
        };
  </script>


<div class="flex flex-wrap justify-center item-center bg-blue-100 dark:bg-gray-200 min-w-full p-4">

    <div class='min-w-full text-center '>
        <h1 class='text-2xl'>Get in touch!</h1>
        <h2>Feel free to reach me in your preferred way below or send me a message using the form</h2>
        <h2>We can connect on <a class='text-blue-500' href="https://www.linkedin.com/in/arielfernandez412/">LinkedIn</a>,</h2>
        <h2>we can also connect through <a class='text-blue-500' href="mailto:Arielf412@me.com?subject=Your%20portfolio%20is%20AWESOME!%20Lets%20Connect!&amp;body=Hey%20Ariel!%0D%0A%0D%0A%0D%0AMy%20name%20is%20<YourName>,%20and%20I'm%20in%20the%20business%20of%20<Industry you work in>.%0D%0AI’d%20love%20to%20talk%20about%20your%20software%20engineering%20ambitions.%20">Email</a> </h2>
    </div>
        
      <div class="text-center">
        <Button on:click={() => (hidden8 = false)}>Contact Form</Button>
      </div>
      <Drawer placement='bottom' width='w-full' transitionType="fly" transitionParams={transitionParamsBottom} bind:hidden={hidden8} id='sidebar8'>
        <form class='min-w-full'>
            <div class="flex gap-2 flex-wrap justify-center">
                <Label class="space-y-2 min-w-full">
                    <Input type="email" placeholder="Full Name" size="md" class='min-w-full'>
                    <svg slot="right" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                      </svg>
                      
                    </Input>
                </Label>
                <Label class="space-y-2 min-w-full">
                    <Input type="email" placeholder="Phone Number" size="md" >
                    <svg slot="right" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path d="M8 16.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z" />
                        <path fill-rule="evenodd" d="M4 4a3 3 0 013-3h6a3 3 0 013 3v12a3 3 0 01-3 3H7a3 3 0 01-3-3V4zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V2.5h1A1.5 1.5 0 0114.5 4v12a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 16V4A1.5 1.5 0 017 2.5h1z" clip-rule="evenodd" />
                      </svg>
                      
                    </Input>
                </Label>
                <Label class="space-y-2 min-w-full">
                    <Input type="email" placeholder="Email" size="md" class='min-w-full'>
                    <svg slot="right" aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                    </Input>
                </Label>
                <Textarea id="textarea-id" placeholder="Your message" rows="4" name="message" />
            </div>
            
            <Button type="submit">Submit</Button>
        </form>
      </Drawer>
</div>
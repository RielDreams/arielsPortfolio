<script>
    import { Input, Label, Helper, Checkbox, Button, A, Textarea } from 'flowbite-svelte';
  </script>


<div class="grid gap-6 mb-6 md:grid-cols-2">

    <div>
        <h1>Contact !</h1>
    </div>
<form>
        <div class="flex gap-2 flex-wrap justify-center">
            <Label class="space-y-2">
                <Input type="email" placeholder="Full Name" size="md">
                <svg slot="right" aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                </Input>
            </Label>
            <Label class="space-y-2">
                <Input type="email" placeholder="Phone Number" size="md">
                <svg slot="right" aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                </Input>
            </Label>
            <Label class="space-y-2">
                <Input type="email" placeholder="Email" size="md">
                <svg slot="right" aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                </Input>
            </Label>
            <Textarea id="textarea-id" placeholder="Your message" rows="4" name="message"/>
        </div>
        
        <Button type="submit">Submit</Button>
    </form>
</div>
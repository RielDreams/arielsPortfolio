<script>
    import { Carousel, CarouselTransition } from 'flowbite-svelte'
    export const images = [
    {
      id: 0,
      name: "Casual Business",
      imgurl: "https://i.imgur.com/HQKjQ5lm.jpg",
    },
    {
      id: 1,
      name: "OKC Balloon Fest",
      imgurl: "https://i.imgur.com/uRHQm7Zm.jpg",

    },
    {
      id: 2,
      name: "GSXR",
      imgurl: "https://i.imgur.com/boyhlkQm.jpg",
    },
    {
      id: 3,
      name: "Olivers first farm day",
      imgurl: "https://i.imgur.com/CGNcoZnm.jpg",
    },
  ];
  let showThumbs=false
  let showCaptions=false
  let showIndicators=false
  let slideControls=false
  </script>


<div class='text-center min-w-full dark:text-gray-200 p-4 grid grid-cols-2'>
    <div>
        <p>My name is Ariel Fernandez, and I'm a bilingual software engineer with a strong background in law enforcement. I'm passionate about problem-solving and delivering high-quality solutions.
        </p>
        <p>
            In addition to my professional work, I have a variety of hobbies that keep me engaged and creative. I'm an avid photographer, and I love capturing cars and landscapes through my camera lens. I'm also a dedicated reef keeper and aquarium enthusiast. When I'm not exploring the great outdoors, you can often find me learning about 3D modeling in blender, working on my reef tank or working on my project cars.
        </p>
        <p>
            My hobbies reflect my love of creating and building, and I bring that same passion to my work as a software engineer. Whether I'm developing new applications, solving complex problems, or building innovative solutions, I'm committed to excellence and always striving to deliver the best possible results.
            Thanks for taking the time to learn a little more about me, and I hope we have the opportunity to work together soon!
        </p>
    </div>  
    <div class="min-w-5xl flex justify-center items-center">
        <Carousel {images} loop {showCaptions} {showThumbs} {showIndicators} {slideControls} duration="3000"/>
    </div>
</div>
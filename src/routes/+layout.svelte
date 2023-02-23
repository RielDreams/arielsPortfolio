<script>
	import '../app.postcss';
	import Header from './components/Header.svelte';
    import Footer from './components/Footer.svelte';
	import About from './components/About.svelte';
	import Skills from './components/Skills.svelte';
	import Contact from './components/Contact.svelte';
	import Projects from './components/Projects.svelte';
</script>

<body class="bg-white dark:bg-gray-800 flex flex-wrap justify-center item-center mx-auto">
	<Header />
    <Projects/>
    <Skills/>
    <About/>
    <Contact/>
    <Footer/>
</body>

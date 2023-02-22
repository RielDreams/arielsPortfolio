<script>
	import '../app.postcss';
	import Header from './components/Header.svelte';
    import Footer from './components/Footer.svelte';
	import About from './components/About.svelte';
	import Skills from './components/Skills.svelte';
	import Contact from './components/Contact.svelte';
</script>

<body class="bg-white dark:bg-gray-800">
	<Header />
    <About/>
    <Skills/>
    <Contact/>
	<slot/>
    <Footer/>
</body>

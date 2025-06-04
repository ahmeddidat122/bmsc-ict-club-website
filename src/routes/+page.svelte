<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>BMSC ICT Club, Bogura</title>
	<meta name="description" content="Empowering students through technology and innovation at BIAM Model School & College, Bogura." />
</svelte:head>

<!-- Main Container -->
<div class="min-h-screen">
	<!-- Wrapper Box for Navbar and Hero Section -->
	<div class="mx-5 mt-4 bg-gradient-to-t from-blue-950 via-black to-blue-950 backdrop-blur-sm rounded-xl shadow-xl border border-gray-800 min-h-[96vh] relative">
		<Navbar />
		<Hero />
	</div>

	<About />
	<Footer />
</div>

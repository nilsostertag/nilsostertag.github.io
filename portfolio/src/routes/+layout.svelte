<script lang="ts">
	import '../app.css';
	import logo from '$lib/img/logo.svg';

	let { children } = $props();

	let menuActive = $state(false);
</script>

<div class="flex flex-col xl:flex-row justify-between pt-8 pb-8 bg-blue-500 p-4 xl:px-16" class:pb-[100vh]={menuActive} class:overflow-y-hidden={menuActive}>
	<img src={logo} alt="" class="h-16">
	<ol class="flex flex-row justify-between gap-24 text-2xl">
		<li class="hover:scale-125 duration-300">
			<a href="/about">
				<span class="">About</span>
			</a>
		</li>
		<li class="hover:scale-125 duration-300">
			<a href="/projects">
				<span>Projects</span>
			</a>
		</li>
		<li class="hover:scale-125 duration-300">
			<a href="/contact">
				<span>Kontakt</span>
			</a>
		</li>
	</ol>
</div>
<div class="">
	<div class="px-16">
		{@render children()}
	</div>
	<div class="flex flex-row justify-between pb-8 bg-blue-500 px-16">
		<span>&copy Nils Ostertag</span>
		<span>Eins</span>
	</div>
</div>

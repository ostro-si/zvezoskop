<script>
	import { onMount, beforeUpdate } from 'svelte';
	// import NetworkDiagram from '../../components/NetworkDiagram/NetworkDiagram.svelte'
	// import NetworkDiagram from '../../components/NetworkDiagramCanvas/NetworkDiagram.svelte'
	import { platform } from '../../components/MediaQuerySsr.svelte';
	import NetworkDiagram from '../../components/NetworkDiagramSVG/NetworkDiagram.svelte'
	import Directory from '../../components/Directory/Directory.svelte';
	import Intro from '../../components/Intro/Intro.svelte';
	import people from '$lib/data/people.json';
	import connections from '$lib/data/links.json';
	import { base } from '$app/paths';
	import { groupBy } from '../../utils';
	import { page, navigating } from '$app/stores';


	let skipIntro = false;

	onMount(() => {
		skipIntro = $page.url.search === '?skip-intro=true'
	})

	beforeUpdate(() => {
		skipIntro = $page.url.search === '?skip-intro=true'
	})

</script>

<Intro skipIntro={skipIntro} {people}>
	{#if $platform}
		{#if $platform === 'mobile'}
			<Directory {people} />
		{:else}
			<NetworkDiagram {people} {connections} />
		{/if}
	{/if}
</Intro>



<style>
	
</style>

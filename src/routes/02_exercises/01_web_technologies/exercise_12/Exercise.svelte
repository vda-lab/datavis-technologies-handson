<script>
	let clicked = false;
</script>

<div>
	<button class="btn btn-primary" on:click={() => (clicked = true)}>
		click here
	</button>
	<!-- This is not working but ÄI dont know why... -->
	{#if clicked == "F"}
		<p>'You have to click the button!'</p>
	{:else}
		<p>'You have clicked the button!'</p>
	{/if}
</div>




<script>const my_fav_things =['Cappuccino', 'dancing', 'sports', 'my laptop']</script>


<div>
My name is Christina and these are some of my favourite things: <ul>
	{#each my_fav_things as things}
		<li> {things}</li>
	{/each}
	</ul>
    </div>

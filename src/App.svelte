<script>
	let name = 'WELKOM';
	let textkleur = "WHITE";
	
	const handleClick1 = () => {
		textkleur = "RED";
	};
	const handleClick2 = () => {
		textkleur = "GREEN";
	};
	const handleClick3 = () => {
		textkleur = "YELLOW";
	};

	let a = 0;
	let b = 0;


    const loadData = (async () => {

        
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        return await response.json();
     
		
    })()


</script>

<main>
	<h1>Hello {name}!</h1>
	<p><b>Color changer</b></p>
	<p style="color: {textkleur}">{textkleur} COLOR</p>
	
	<button on:click={handleClick1}>RED COLOR</button>
	<button on:click={handleClick2}>GREEN COLOR</button>
	<button on:click={handleClick3}>YELLOW COLOR</button>

	<p><b>Calculator</b></p>

	<label>
		<input type=number bind:value={a} min=0 max=1000>
	</label>
	<label>
		<input type=number bind:value={b} min=0 max=1000>
	</label>
	
	<p>{a} + {b} = {a + b}</p>
	<p>{a} - {b} = {a - b}</p>
	<p>{a} * {b} = {a * b}</p>
	<p>{a} / {b} = {a / b}</p>

{#await loadData}
	<p>...waiting</p>
{:then data}
	<img src={data.message} alt="Hond"/>
{:catch error}
	<p>An error occurred!</p>
{/await}

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #996633;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		font-family: serif;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
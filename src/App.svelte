<script>
	
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

	const getRandomUser = async () => {
		var response = await fetch('https://randomuser.me/api/');
		var result = await response.json();
		return result;
	}
	
	let userPromise = getRandomUser();

	const changeColor = (color) => {
		console.log(color);
		document.body.style.background = color; 
		}
</script>

<main>
	<button on:click={() => changeColor('#D2691E')}>Chocolate</button>
	<button on:click={() => changeColor('#FF7F50')}>Coral</button> 
	<button on:click={() => changeColor('#DA70D6')}>Purple</button>
	<button on:click={() => changeColor('#6B8E23')}>Green</button>

	<div class="container">
		<h1 class="title">
		  <span class="title-word title-word-1">This</span>
		  <span class="title-word title-word-2">is</span>
		  <span class="title-word title-word-3">my</span>
		  <span class="title-word title-word-4">project</span>
		</h1>
	  </div>

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


{#await userPromise}
	<h2>Loading....</h2>
{:then users}
	<h2>{users.results[0].name.first}</h2>
{:catch err}
	<h2>Error while loading the data</h2>
{/await}

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.title-word {
  animation: color-animation 4s linear infinite;
	}

.title-word-1 {
  --color-1: #DF8453;
  --color-2: #3D8DAE;
  --color-3: #E4A9A8;
	}

.title-word-2 {
  --color-1: #DBAD4A;
  --color-2: #ACCFCB;
  --color-3: #17494D;
	}

.title-word-3 {
  --color-1: #ACCFCB;
  --color-2: #E4A9A8;
  --color-3: #ACCFCB;
	}

.title-word-4 {
  --color-1: #3D8DAE;
  --color-2: #DF8453;
  --color-3: #E4A9A8;
	}

@keyframes color-animation {
  0%    {color: var(--color-1)}
  32%   {color: var(--color-1)}
  33%   {color: var(--color-2)}
  65%   {color: var(--color-2)}
  66%   {color: var(--color-3)}
  99%   {color: var(--color-3)}
  100%  {color: var(--color-1)}
}

.container {
  display: grid;
  place-items: center;  
  text-align: center;
  height: 100vh
}

.title {
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 8.5vw;
  text-transform: uppercase;
}
	

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
<script>
    import data from './data.js';
    import Result from './lib/Result.svelte';
    import Summary from './lib/Summary.svelte';

    let totalScore = data.reduce((accumulator, currentObj) => accumulator + currentObj.score, 0);
    let possibleScore = data.length * 100;
    let result = Math.round(totalScore / possibleScore * 100);
</script>

<main>
    <Result {result} />
    <Summary {data} />
</main>

<style>
    main {
        display: grid;
        grid-template: none / 1fr 1fr;
        max-width: 736px;
        border-radius: 32px;
        box-shadow: 0px 30px 60px 0px hsla(224, 82%, 58%, 0.15);
    }
</style>
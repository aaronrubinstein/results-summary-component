<script>
    import anime from 'animejs/lib/anime.es.js';
    import { onMount } from 'svelte';
    
    export let result;
    let counter;
    let resultText;

    onMount(() => {
        anime.timeline()
            .add({
                targets: counter,
                innerHTML: result,
                easing: 'easeOutCirc',
                round: 1,
                duration: 4000,
                delay: 500
            })
            .add({
                targets: resultText,
                opacity: 1,
                duration: 1000,
                easing: "easeInExpo"
            }, '-=1000');
    });

</script>

<div class="card">
    <h3>Your Result</h3>
    <div class="result-container">
        <h1 bind:this={counter}>0</h1>
        <p class="out-of">of 100</p>
    </div>
    <div bind:this={resultText} style="opacity: 0">
        <h2>Great</h2>
        <p class="result-text">Your performance exceeded 65% of people conducting the test!</p>
    </div>
</div>

<style>
    
    .card {
        background: var(--primary-gradient);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 38px 54px 55px 54px;
        border-radius: 32px;
    }
    
    h3 {
        font-size: 24px;
        font-weight: 700;
        line-height: 31.27px;
        color: var(--text-secondary);
        margin-bottom: 35px;
    }
    
    .result-container {
        height: 200px;
        width: 200px;
        border-radius: 50%;
        background: var(--secondary-gradient);
        padding: 55px 0 46px;
        margin-bottom: 28px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-size: 72px;
        font-weight: 800;
        color: #FFF;
    }

    .out-of {
        font-size: 18px;
        font-weight: 700;
        line-height: 23px;
        color: var(--text-secondary);
    }

    h2 {
        font-size: 32px;
        font-weight: 700;
        line-height: 42px;
        color: #FFF;
        margin-bottom: 14px;
        text-align: center;
    }

    p {
        font-size: 18px;
        font-weight: 500;
        line-height: 23px;
        text-align: center;
        color: var(--text-secondary);
    }

    @media (max-width: 700px) {
        .card {
            padding: 24px 58px 40px 58px;
            border-radius: 0 0 32px 32px;
        }
        h3 {
            font-size: 18px;
            margin-bottom: 24px;
        }
        
        .result-container {
            height: 140px;
            width: 140px;
            padding: 0;
            margin-bottom: 24px;
        }

        h1 {
            font-size: 56px;
            line-height: 72px;
        }

        .out-of {
            font-size: 16px;
            line-height: 21px;
        }

        h2 {
            font-size: 24px;
            line-height: 32px;
            margin-bottom: 8px;
        }

        p {
            font-size: 16px;
            line-height: 21px;
        }
    }

</style>
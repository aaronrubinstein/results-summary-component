<script>
    export let result;
</script>

<div class="card">
    <h3>Your Result</h3>
    <div class="result-container">
        <h1>{result}</h1>
        <p class="out-of">of 100</p>
    </div>
    <h2>Great</h2>
    <p class="result-text">Your performance exceeded 65% of the people conducting the test!</p>
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
    }

    p {
        font-size: 18px;
        font-weight: 500;
        line-height: 23px;
        text-align: center;
        color: var(--text-secondary);
    }

</style>
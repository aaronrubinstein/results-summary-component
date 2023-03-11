<script>
    import SummaryItem from './SummaryItem.svelte';
    export let data;
</script>

<div class="card">
    <h3>Summary</h3>
    <div class="items">
        {#each data as item}
            <SummaryItem category={item.category} score={item.score} icon={item.icon} />
        {/each}
    </div> 
    <button type="button">Continue</button>
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        padding: 0px 40px;
    }

    h3 {
        font-size: 24px;
        font-weight: 700;
        line-height: 31.27px;
        color: var(--text-primary);
        margin: 38px 0 28px 0;
    }

    .items {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-bottom: 41px;
    }

    button {
        background: var(--text-primary);
        width: 100%;
        height: 56px;
        border-radius: 128px;
        font-size: 18px;
        font-weight: 700;
        color: #FFF;
        cursor: pointer;
        margin-bottom: 30px;
    }

    button:hover {
        background: var(--primary-gradient);
    }

    @media (max-width: 700px) {
        .card {
            padding: 0px 30px;
        }

        h3 {
            font-size: 18px;
            line-height: 24px;
            margin: 24px 0;
        }

        .items {
            margin-bottom: 24px;
        }

    }

</style>
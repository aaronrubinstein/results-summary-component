<script>
    export let category;
    export let score;
    export let icon;
</script>

<div class="card {category.toLowerCase()}">
    <img src={icon} alt="{category} icon">
    <span class="category">{category}</span>
    <div class="score-container">
        <span class="score">{score}</span>
        <span class="out-of">/ 100</span>
    </div>
</div>

<style>
    
    .card {
        padding: 16px;
        border-radius: 12px;
        display: flex;
        align-items: center;
    }

    .reaction {
        color: var(--red);
        background-color: var(--light-red);
    }

    .memory {
        color: var(--yellow);
        background-color: var(--light-yellow);
    }

    .verbal {
        color: var(--green);
        background-color: var(--light-green);
    }

    .visual {
        color: var(--blue);
        background-color: var(--light-blue);
    }

    .category {
        margin-left: 12px;
        font-size: 18px;
        font-weight: 500;
    }

    .score-container {
        margin-left: auto;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .score, .out-of {
        font-size: 18px;
        font-weight: 700;
        color: var(--text-primary);
    }

    .score {
        margin-right: 8px;
    }
    
    .out-of {
        opacity: 0.5;
    }

    @media (max-width: 700px) {
        .category {
            font-size: 16px;
        }

        .score, .out-of {
            font-size: 16px;
        }

    }

</style>
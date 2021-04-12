<template>
    <div class="main-question-section">
        <div class="header-section">
            <span class="quiz-interaction">Quiz Interaction</span>
            <div class="social-icons">
            <i class="fa fa-facebook-official fa-lg" aria-hidden="true"></i>
            <i class="fa fa-instagram fa-lg" aria-hidden="true"></i>
            <i class="fa fa-twitter fa-lg" aria-hidden="true"></i>
            </div>
        </div>
        <div class="body-section">
            <h2 class="main-question">How well do you know your balloons?</h2>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.main-question-section{
    background-image: url('../assets/balloon.png'),linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5));
    flex: 0.5 1;
    flex-grow: 0.5;
    flex-shrink: 1;
    flex-basis: 0%;
    background-size: cover;
    background-blend-mode: overlay;
    height: 100%;
}
.social-icons{
    color: #fff;
    display: flex;

    i{
        padding: 0 20px;
    }
}
.header-section{
    padding: 80px 160px 30px 0px;
    border-bottom: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.quiz-interaction{
    padding-left: 60px;
    font-size: 24px;
    font-weight: 700;
    color: #fff;
}
.body-section{
    color: #fff;
    padding: 4em 5em 0 8em;
    margin-left: auto;
    -webkit-animation: slide-up .8s;
    animation: slide-up .8s;
    transition-timing-function: ease-in;

    h2{
        display: block;
        font-size: 1.5em;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
        font-size: 42px;
        font-weight: 500;
    }
}

</style>

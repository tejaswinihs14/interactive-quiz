<template>
    <div class="questions-card">
        <p class="questionno">{{questionDetails.questionno}}</p>
        <p class="question">{{questionDetails.question}}</p>
        <div :class="selectedAnswer===index? 'option selected':'option'" v-for="(answer, index) in questionDetails.answerOptions" :key="'question'+index+answer" @click="setSelectedAnswer(index)">{{answer.answerText}}</div>
        <button class="submit-btn" :disabled="selectedAnswer === null" @click="submitAnswer">Submit</button>
    </div>
</template>

<script>
export default {
  name: 'QuestionsCard',
  props: ['questionDetails'],
  data () {
    return {
      selectedAnswer: null
    }
  },
  methods: {
    setSelectedAnswer (index) {
      this.selectedAnswer = index
    },
    submitAnswer () {
      // Checks if the answer isCorrect of selected option
      const answerIsCorrect = this.questionDetails.answerOptions[this.selectedAnswer].isCorrect
      // Emits answer to parent QuestionSection
      this.$emit('onSubmit', answerIsCorrect)
    }
  }
}
</script>

<style lang="scss" scoped>

.questions-card{
padding: 10px 10px;
margin-bottom: 100px;

  .questionno{
    color: #02e746;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .question{
    font-size: 32px;
    font-weight: 500;
    margin-bottom: .5em;
  }
  .option{
    padding: 1em;
    background-color: #ebe9f3;
    margin-top: 10px;
    border-radius: 5px;
    border: none;
    text-align: left!important;
    cursor: pointer;

    &.selected{
      background-color: #74b9ff;
    }
  }
  .submit-btn{
    padding: 1.5em;
    background-color: #02e746;
    border-radius: 5px;
    margin-top: 10px;
    border: none;
    width: -webkit-fill-available;
    cursor: pointer;
  }
  .submit-btn:hover{
    background-color: #2ecc71;
  }
}

</style>

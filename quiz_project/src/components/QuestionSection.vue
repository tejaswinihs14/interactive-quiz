<template>
  <div class="questions-page">
    <div v-if="currentQuestion < questions.length">
    <QuestionCard
    v-for="(question, index) in questions"
    :key="question.questionno"
    :questionDetails="question"
    :class="currentQuestion !== index ? 'disabled-question' : null"
    @onSubmit="updateScore"
    />
    </div>
    <div v-else>
      <p class="percentage">{{percentage}}%</p>
      <div class="congo">Congratulations</div>
      <div class="total-noofqtn">you got {{score}} out of {{questions.length}} questions</div>
      <button class="replay-btn"  @click='currentQuestion = 0'>Replay</button>
    </div>
  </div>
</template>

<script>
import QuestionCard from './QuestionCard.vue'
export default {
  name: 'QuestionSection',
  components: {
    QuestionCard
  },
  data () {
    return {
      currentQuestion: 0,
      score: 0,
      questions: [
        {
          questionno: 'Question 1',
          question: 'Who was known as the frontier Gandhi?',
          answerOptions: [
            { answerText: 'Jawahar Lal Nehru', isCorrect: false },
            { answerText: 'Ali brothers', isCorrect: false },
            { answerText: 'Khan Abdul Ghaffar Khan', isCorrect: true }
          ]
        },
        {
          questionno: 'Question 2',
          question: 'Who was called Deshbandhu?',
          answerOptions: [
            { answerText: 'Lala Lajpat Rai', isCorrect: false },
            { answerText: 'Chandra Shekhar Azad', isCorrect: false },
            { answerText: 'Chittarajan Das', isCorrect: true }
          ]
        },
        {
          questionno: 'Question 3',
          question: 'Environmental pollution has taken place on a large scale in:',
          answerOptions: [
            { answerText: 'Rural areas only', isCorrect: false },
            { answerText: 'Industrial and urban areas', isCorrect: true },
            { answerText: 'Urban areas only', isCorrect: false }
          ]
        },
        {
          questionno: 'Question 4',
          question: 'The release of water vapour from the leaves is:',
          answerOptions: [
            { answerText: 'Evaporation', isCorrect: false },
            { answerText: 'Transpiration', isCorrect: true },
            { answerText: 'Frost', isCorrect: false }
          ]
        },
        {
          questionno: 'Question 5',
          question: 'A joint sitting of the two houses in called as:',
          answerOptions: [
            { answerText: 'The members of parliament', isCorrect: false },
            { answerText: 'Joint Session', isCorrect: true },
            { answerText: 'The Speaker of Loksabha', isCorrect: false }
          ]
        }
      ]
    }
  },
  computed: {
    percentage () {
      return this.score / this.questions.length * 100
    }
  },
  methods: {
    updateScore (isCorrect) {
      if (isCorrect) {
        this.score += 1
      }
      this.currentQuestion += 1
    }
  }
}
</script>

<style lang="scss" scoped>
.disabled-question{
  pointer-events: none;
  opacity: 0.4;
  cursor: not-allowed;
}

  .percentage{
    font-size: 100px;
    font-weight: 700;
    text-align: center;
    color: rgb(151, 107, 192);
  }
  .replay-btn{
    padding: 1em 5em;
    background-color: #02e746;
    margin-top: 1em;
    border: none;
    text-align: center;
  }
  .congo{
    font-size: 70px;
    font-weight: 700;
    text-align: center;
    color: black;
  }
  .total-noofqtn{
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    color: black;
  }
</style>

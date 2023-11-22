<template>
  <v-form v-model="valid" @submit.prevent="changeName">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <h1>Change name</h1>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
          <v-btn type="submit" block class="mt-2">Submit</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      valid: false,
      nameRules: [
        (value) => {
          if (value) return true
          return 'Name is requred.'
        },
      ],
    }
  },
  methods: {
    async changeName() {
      //get current user from store
      if (this.$store.state.person) {
        var user = this.$store.state.person
      }
      let clonededPerson = _.cloneDeep(user)
      clonededPerson.name = this.name
      console.log('clonededPerson', clonededPerson)
      this.$store.commit('setuser/updatePerson', clonededPerson)
      //   window.location.reload(true)
    },
  },
  computed: {
    name: {
      get() {
        return this.$store.state.person.name
      },
      set(value) {
        this.$store.commit('SET_NAME', value)
      },
    },
  },
}
</script>

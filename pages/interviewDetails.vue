<template>
  <main>
    <NavBar />
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <img src="/imgs/5.png" />
        </v-col>
        <v-col cols="12" md="6">
          <h1>The Academy - Interviews</h1>

          <br />

          This is a standalone mini-game which takes place in parallel to Chapters 14 and 15.
          <br /><br />
          You play in the role of Governor Ramsey as he interviews a shortlist of five candidates.<br />
		  Raise your score high enough and you can get them to reveal even more about themselves...
          <br /><br />
		  Visit the dsp3000 Patreon page to vote for who gets through to the next round in the interview process.
		  <br /><br />
          <b>Interviews statistics</b> : 410 pages : 340 images : 1 bonus extension
          scene <br /><br />

          <!-- <p>You are now logged in {{ $nuxt.$fire.auth.currentUser.email }}</p> -->
		  <hr>
          <h3 class="clickable">
            <NuxtLink to="/introduction">Play the Introduction</NuxtLink>
          </h3>
		  
		  <hr>

          <div>
            
        
      </v-row>
    </v-container>
  </main>
</template>


<style scoped>
.clickable {
  cursor: pointer;
}
h2,
h2 a {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
}
h3,
h3 a {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
}
h4,
h4 a {
  color: white;
  text-decoration: none;
}
</style>

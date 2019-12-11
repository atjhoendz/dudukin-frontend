<template>
  <v-container>
    <div>
      <v-card class="mx-auto" max-width="1000" outlined>
        <v-list-item three-line>
          <v-list-item-avatar tile size="150" color="grey"></v-list-item-avatar>
          <v-list-item-content>
            <div class="overline mb-4">PROFILE</div>
            <v-list-item-title class="headline mb-1">Ucok Markocok</v-list-item-title>
            <v-list-item-subtitle>+62-123-456-789-01</v-list-item-subtitle>
            <v-list-item-subtitle>Ucok.Markocok@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-card-actions>
          <v-btn text color="green">Update Profile</v-btn>
          <v-btn text color="red">Delete Profile</v-btn>
        </v-card-actions>
      </v-card>
      <br>
      <v-card class="mx-auto" max-width="1000">
        <v-btn block color="white" outlined height="70">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title> Ulasan</v-list-item-title>
              <v-list-item-subtitle>Berikan penilaian ulasan restoran</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-btn>
      </v-card>
      <br>
      <v-card class="mx-auto" max-width="1000">
        <v-btn block color="white" outlined height="70">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title> Komplain Sebagai Pembeli</v-list-item-title>
              <v-list-item-subtitle>Lihat status komplain</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-btn>
      </v-card>
      <br>
      <v-card class="mx-auto" max-width="1000">
        <p class="font-weight-bold pt-3 pl-5">Your Latest Visit</p>
        <v-divider></v-divider>

        <div class="scrolling-wrapper-flexbox py-2">
          <v-card v-for="card in cards2" :key="card.title" width="175px" class="mx-2">
            <v-img :src="card.src" height="100px"></v-img>
            <v-card-text class="text--primary">
              <div>{{ card.title }}</div>
            </v-card-text>
          </v-card>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards2: [
      { title: 'Restoran A', src: 'https://picsum.photos/id/1060/300' },
      { title: 'Restoran B', src: 'https://picsum.photos/id/1060/300' },
      { title: 'Restoran C', src: 'https://picsum.photos/id/1060/300' },
      { title: 'Restoran D', src: 'https://picsum.photos/id/1060/300' },
      { title: 'Restoran F', src: 'https://picsum.photos/id/1060/300' },
      { title: 'Restoran G', src: 'https://picsum.photos/id/1060/300' },
      { title: 'Restoran H', src: 'https://picsum.photos/id/1060/300' },
      { title: 'Restoran I', src: 'https://picsum.photos/id/1060/300' }
    ]
  })
}
</script>

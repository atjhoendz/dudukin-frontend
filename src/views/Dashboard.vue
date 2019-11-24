<template>
    <v-container class="my-5">
        <v-text-field label="Where would you like to eat?" prepend-inner-icon="mdi-magnify" solo outlined flat dense></v-text-field>
        <p class="font-weight-bold">Recommended Restaurants</p>
        <v-divider></v-divider>
        <v-slide-group show-arrows class="my-2">
            <v-slide-item v-for="card in cards" :key="card.title" class="my-2">
                <v-card class="mx-2" width="175px">
                    <v-img :src="card.src" height="100px"></v-img>
                    <v-card-text class="text--primary">
                        <div>{{ card.title }}</div>
                    </v-card-text>
                </v-card>
            </v-slide-item>
        </v-slide-group>
        <p class="font-weight-bold">Choose the perfect environment</p>
        <v-divider></v-divider>
        <v-slide-group show-arrows class="my-2">
            <v-slide-item v-for="card in cards2" :key="card.title" class="my-2">
                <v-card class="mx-2" width="175px">
                    <v-img :src="card.src" height="100px"></v-img>
                    <v-card-text class="text--primary">
                        <div>{{ card.title }}</div>
                    </v-card-text>
                </v-card>
            </v-slide-item>
        </v-slide-group>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      { title: 'Restaurant names', src: 'https://picsum.photos/id/1060/300' },
      { title: 'Restaurant names', src: 'https://picsum.photos/id/1060/300' },
      { title: 'Restaurant names', src: 'https://picsum.photos/id/1060/300' },
      { title: 'Restaurant names', src: 'https://picsum.photos/id/1060/300' },
      { title: 'Restaurant names', src: 'https://picsum.photos/id/1060/300' },
      { title: 'Restaurant names', src: 'https://picsum.photos/id/1060/300' },
      { title: 'Restaurant names', src: 'https://picsum.photos/id/1060/300' },
      { title: 'Restaurant names', src: 'https://picsum.photos/id/1060/300' }
    ],
    cards2: [
      { title: 'Family Friendly', src: 'https://picsum.photos/id/1060/300' },
      { title: 'Romantic Dinner', src: 'https://picsum.photos/id/1060/300' },
      { title: 'Open Area', src: 'https://picsum.photos/id/1060/300' },
      { title: 'Silent', src: 'https://picsum.photos/id/1060/300' },
      { title: 'Text', src: 'https://picsum.photos/id/1060/300' },
      { title: 'Text', src: 'https://picsum.photos/id/1060/300' },
      { title: 'Text', src: 'https://picsum.photos/id/1060/300' },
      { title: 'Text', src: 'https://picsum.photos/id/1060/300' }
    ]
  })
}
</script>

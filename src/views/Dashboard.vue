<template>
    <v-container class="my-5">
        <v-text-field label="Where would you like to eat?" prepend-inner-icon="mdi-magnify" solo outlined flat dense></v-text-field>
        <p class="font-weight-bold">Recommended Restaurants</p>
        <v-divider></v-divider>
        <v-container>
            <v-row>
                <v-col v-for="card in cards" :key="card.title" :cols="card.flex" class="mx-0">
                    <v-card max-height="200px" min-height="200px">
                        <v-img :src="card.src" height="100px" class="mx-0"></v-img>
                        <v-card-text class="text--primary">
                            <div>{{ card.title }}</div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <p class="font-weight-bold">Choose the perfect environment</p>
        <v-divider></v-divider>
        <v-container>
            <v-row>
                <v-col v-for="card in cards2" :key="card.title" :cols="card.flex" class="mx-0">
                    <v-card>
                        <v-img :src="card.src" height="100px" class="mx-0"></v-img>
                        <v-card-text class="text--primary">
                            <div>{{ card.title }}</div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

    </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      { title: 'Restaurant names', src: 'https://picsum.photos/id/1060/300', flex: 6 },
      { title: 'Restaurant names', src: 'https://picsum.photos/id/1060/300', flex: 6 }
    ],
    cards2: [
      { title: 'Family Friendly', src: 'https://picsum.photos/id/1060/300', flex: 6 },
      { title: 'Romantic Dinner', src: 'https://picsum.photos/id/1060/300', flex: 6 }
    ]
  })
}
</script>

<template>
    <v-container class="my-5">
        <v-row dense>
          <v-col xs="12" md="6" v-for="table in tables" :key="table.tableName">
            <v-card class="ma-1">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-row>
                    <v-col class="my-0 py-0" cols="4">
                      <v-img :src="table.img"></v-img>
                    </v-col>
                    <v-col cols="8">
                      <p>{{ table.tableName }}</p>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    tables: [
      { tableName: 'Table Name', img: 'https://picsum.photos/id/1060/450' },
      { tableName: 'Table Name', img: 'https://picsum.photos/id/1060/450' },
      { tableName: 'Table Name', img: 'https://picsum.photos/id/1060/450' },
      { tableName: 'Table Name', img: 'https://picsum.photos/id/1060/450' },
      { tableName: 'Table Name', img: 'https://picsum.photos/id/1060/450' },
      { tableName: 'Table Name', img: 'https://picsum.photos/id/1060/450' }
    ]
  })
}
</script>

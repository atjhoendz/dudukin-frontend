<template>
    <div>
        <v-img max-height="300" src="https://picsum.photos/id/1060/800/450"></v-img>
        <v-row class="mx-3 mt-4">
            <v-col cols="7">
                <p class="title my-0 font-weight-thin">Restaurant Name</p>
                <p class="subtitle-1 my-0 font-weight-thin">Restaurant Address</p>
                <p class="subtitle-2 my-0 font-weight-thin">Open Hours XX:XX-YY:YY</p>
            </v-col>
            <v-col cols="5">
                <p class="title my-0 font-weight-thin text-right">Contact</p>
                <p class="subtitle-1 my-0 font-weight-thin text-right">+62-123-456-789-01</p>
            </v-col>
            <v-btn block text>Reserve a table</v-btn>
            <v-btn block text>View menu</v-btn>
            <v-btn block text>Available facilites</v-btn>
        </v-row>
    </div>
</template>

<script>
export default {
  data: () => ({
    //
  })
}
</script>

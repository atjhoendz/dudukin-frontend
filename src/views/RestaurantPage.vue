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
            <button class="block">
                <v-row>
                    <v-col cols="auto">
                        <v-img src="../assets/online-booking.png" height="50" width="50"></v-img>
                    </v-col>
                    <v-col>
                        <p class="py-1 headline">Book a table</p>
                    </v-col>
                </v-row>
            </button>
            <v-divider></v-divider>
            <button class="block">
                <v-row>
                    <v-col cols="auto">
                        <v-img src="../assets/menu.png" height="50" width="50"></v-img>
                    </v-col>
                    <v-col>
                        <p class="py-1 headline">View menu<menu></menu></p>
                    </v-col>
                </v-row>
            </button>
            <button class="block">
                <v-row>
                    <v-col cols="auto">
                        <v-img src="../assets/playground.png" height="50" width="50"></v-img>
                    </v-col>
                    <v-col>
                        <p class="py-1 headline">Available facilities<menu></menu></p>
                    </v-col>
                </v-row>
            </button>
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

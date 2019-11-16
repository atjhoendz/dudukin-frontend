<template>
    <div>
        <v-app-bar flat dense app class="deep-orange">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-avatar>
                <v-icon large>mdi-account-circle</v-icon>
            </v-avatar>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app temporary class="deep-orange darken-2">
            <p>Test</p>
        </v-navigation-drawer>

    </div>
</template>

<!-- // <script>
// export default{
//     name: 'Navbar',
//     data () {
//         return {
//         }
//     }
// }
// </script> -->

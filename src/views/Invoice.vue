<template>
  <v-container class="my-5">
    <p class="headline font-weight-bold">Invoice</p>
    <v-divider></v-divider>
    <v-row class="pt-4 display-2 font-weight-thin" dense>
        <v-col>Waroeng Steak</v-col>
    </v-row>
    <v-row class="headline font-weight-thin" dense>
        <v-col>Invoice number: 12342069</v-col>
    </v-row>
    <v-row class="headline mt-2" dense flat>
        <v-col >Table A10</v-col>
        <v-col class="text-right">Rp35.000</v-col>
    </v-row>
    <v-row class="font-weight-thin" dense>
        <v-col class="">2 x Crispy Chicken Cheese Steak</v-col>
        <v-col class="text-right">Rp96.000</v-col>
    </v-row>
    <v-row class="font-weight-thin" dense>
        <v-col class="">1 x Wagyu Beef Steak</v-col>
        <v-col class="text-right">Rp90.000</v-col>
    </v-row>
    <v-row class="headline font-weight-bold" dense>
        <v-col class="text-right">Total: Rp221.000</v-col>
    </v-row>

    <v-row align="right">
        <v-col cols="auto">
            <div class="text-center">
                <v-btn x-large color="#FF5722">Print</v-btn>
            </div>
        </v-col>
        <v-col cols="auto">
            <div class="text-center">
                <v-btn x-large color="warning">cancel</v-btn>
            </div>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    //
  })
}
</script>

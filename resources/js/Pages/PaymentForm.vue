<template>
    <form  method="POST" id="payment-form" @submit.prevent="pay()">
    
      <div class="form-group">
          <label for="name_on_card">Name on Card</label>
          <input type="text" class="form-control" id="name_on_card" name="name_on_card" v-model="name_on_card">
      </div>
       <div class="form-group">
          <label for="name_on_card">Email</label>
          <input type="email" class="form-control" v-model="form.email">
      </div>
    
      <div class="form-group">
          <label for="card-element">Credit Card</label>
          <CardElement />
          
      </div>

      <!-- CSRF Field -->
      <input type="hidden" name="_token" :value="csrf">

      <div class="spacer"></div>

      <button type="submit" class="btn btn-success">Submit Payment</button>
  </form>
</template>



<script>
    import { createToken, Card } from 'vue-stripe-elements-plus'
    import CardElement from '../Pages/CardElement'
    export default {
    //mounted(){
    //this.includeStripe('js.stripe.com/v3/', function(){
      //  this.configureStripe();
    //}.bind(this) );
    //},
    components:{
            CardElement
        },
        data () {
            return {
              csrf: document.head.querySelector('meta[name="csrf-token"]').content,
              name_on_card: '',
              form:{
                 token:'',
                 email:this.$page.auth.user.email
              }
            }
        },
        methods: {
            pay() {
              var options = {
                name: this.name_on_card,
              }
              createToken(options).then(result => {
                
                this.form.token= result.token.id;
                this.$inertia.post(route('user.payment',this.form))
                
                 
                
                
              })
            }
      }
    }
</script>

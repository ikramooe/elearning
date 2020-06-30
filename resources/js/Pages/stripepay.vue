<template>
    
    <div>
        <form>
        
            <label for="card-element">Credit Card</label>
                
                <label >Name On Card</label>
                <input type="text" v-model="nameoncard">
                <div id="card-element">
                    <!-- a Stripe Element will be inserted here. -->
                </div>

                <!-- Used to display form errors -->
                <div id="card-errors" role="alert"></div>
        
                <button type="submit"> submit payement </button>
        </form>
        
    </div>  


</template>


<style lang="">
    
</style>

<script>
export default {
mounted(){
    this.includeStripe('js.stripe.com/v3/', function(){
        this.configureStripe();
    }.bind(this) );
},
data(){
        return {
            nameoncard:"",
            intentToken: '',
            stripeAPIToken: 'pk_test_51GxHgjITAqKCLKS0TWaQQRMl5I3Y7z0wTNQ3iJbpGVjsXvYCucKvyOkPCHO6n9wrgEWh4NzBAJnoUrehpaOaronY001j85Xp42',
            elements: '',
            card: '',
            errors:"",
            form :{
                stoken: '',
                
                
            }
        }
    },
methods: {

    /*
    Loads the payment intent key for the user to pay.
*/

    configureStripe(){
    this.stripe = Stripe( this.stripeAPIToken );

    this.elements = this.stripe.elements();
    this.card = this.elements.create('card', {
                    style: style,
                    hidePostalCode: true
                });


    this.card.mount('#card-element');
    var style = {
                  base: {
                    color: '#32325d',
                    lineHeight: '18px',
                    fontFamily: '"Raleway", Helvetica, sans-serif',
                    fontSmoothing: 'antialiased',
                    fontSize: '16px',
                    '::placeholder': {
                      color: '#aab7c4'
                    }
                  },
                  invalid: {
                    color: '#fa755a',
                    iconColor: '#fa755a'
                  }
                };

    
    
    },
    
    validate(){
        var options = {
        name: this.nameoncard,
        }
        stripe.createToken(card, options).then(function(result) {
            if (result.error) {
                // Inform the user if there was an error
                this.errors=result.error.message;  
                } else {
                 this.form.stoken=result.token;   
               // Send the token to your server
                 this.$inertia.post(route('user.payement',this.form));        
                
                
                
                }
            });
        }


    }
}    

</script>

<style lang="scss">
@import "../../sass/stpay";

</style>
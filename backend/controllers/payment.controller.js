
import Stripe from 'stripe';
// import sql from 'mssql'
// import { databaseConfig } from "../config/index.js";



const stripe = Stripe('sk_test_51NXfIjJTFcBMgEYPXdP1VFm1l8ae5zMUkIBSimu2q8MaiwgoJFLAMf5JJ0QS3iypPWd5ZpCSlxfC9HZEJD2Wk4nX00qk829lMC');
const client = 'http://localhost:5173'

export const createCheckoutSession = async (req, res) => {
  // console.log('sdrtyu')
      const line_items = req.body.cartItems.map((item)=>{
        return{
          
          price_data:{
            currency:'usd',
            product_data: {
              name: item.name,
              images: [item.image],
             
              metadata: {
                id: item.productID
              }
            },
            unit_amount: item.price 
          },
          quantity: item.quantity
        }
      });
      console.log(line_items)
      
    

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "KE"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 0,
              currency: "usd",
            },
            display_name: "Free shipping",
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 5,
              },
              maximum: {
                unit: "business_day",
                value: 7,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 1500,
              currency: "usd",
            },
            display_name: "Next day air",
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 1,
              },
              maximum: {
                unit: "business_day",
                value: 1,
              },
            },
          },
        },
      ],
      phone_number_collection: {
        enabled: true,
      },
     
      line_items,
      mode: "payment",
      success_url: `${client}/myorders`,
      cancel_url: `${client}/cart`,
      
    });

    res.send({ url: session.url });
   
  } 
 

//   const createOrder = async (customer, data) => {
//     try {
//       const item = JSON.parse(customer.metadata.cart);
//       console.log(customer)
//       const pool = await sql.connect(config.sql);
//       const order = await pool
//         .request()
//         .input('userId', sql.VarChar,  data.customer_details.name)
//         .input('paymentIntent', sql.VarChar(), data.payment_intent)
//         .input('productName', sql.VarChar(), item[0].Title)
//         .input('productID', sql.Int,  item[0].ProductID)
//         .input('quantity', sql.Int, item[0].cartTotalquantity)
//         .input('shippingAddress', sql.VarChar(), data.customer_details.address.city)
//         .input('totalAmount', sql.Int, data.amount_total/100)
//         .query('INSERT INTO orders (userId,productID, productName, quantity, shippingAddress,totalAmount, paymentIntent) VALUES (@userId,@productID, @productName, @quantity, @shippingAddress, @totalAmount, @paymentIntent)');
  
//     } catch (error) {
//       console.error('Error creating order:', error);
//     }
//   };
//   //webhooks

// let endpointSecret;

 
// export const webhookHandler = (request, response) => {
//   const sig = request.headers['stripe-signature'];

//   let data;
//   let eventType;
//   if(endpointSecret){
   

//     let event;
  
//     try {
//       event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
//       console.log('verification success')
//     } catch (err) {
//       response.status(400).send(`Webhook Error: ${err.message}`);
//       console.log(err)
//       return;
//     }

//   }
//   else{
    
//     data = request.body.data.object;
//     eventType = request.body.type;
//   }

//   // Handle the event
//    if(eventType === "checkout.session.completed"){
//     stripe.customers.retrieve(data.customer).then(
//       (customer)=>{
//         // const item = JSON.parse(customer.metadata.cart)
        
//         createOrder(customer, data)
//         // console.log(data)
        
//       }
//     ).catch(err=> console.log(err.message))
//    }

//   // Return a 200 response to acknowledge receipt of the event
//   response.send().end();
// };




import "./App.css";
import { PaymentElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51MokcSBjqqrHbcesYC1ivDOqe0bofCB7lls5iP5V3vQlrUWvbMJJxisgoCegFnFZaFRmoIxQsiYvYBpPO3jr3ITn00yWgH7OaP"
    );
  }
  return stripePromise;
};

function App() {
  return (
    <a href="https://buy.stripe.com/test_eVafZzckwfax0PmaEE">
      {" "}
      <button>pay</button>
    </a>
  );
  // async function handleCheckout() {
  //   const stripe = await getStripe();
  //   const { error } = await stripe.redirectToCheckout({
  //     lineItems: [
  //       {
  //         price: "price_1Mp76JBjqqrHbcesgKAB7e1d",
  //         quantity: 1,
  //       },
  //     ],
  //     mode: "subscription",
  //     successUrl: `http://localhost:3000/success`,
  //     cancelUrl: `http://localhost:3000/cancel`,
  //     customerEmail: "customer@email.com",
  //   });
  // }
  // return <button onClick={handleCheckout}>Checkout</button>;
}
// const options = {
//   clientSecret:
//     "sk_test_51MokcSBjqqrHbcesgLeTQsWJlw0WkAVTFCTy8y97barBOrQYaUo3unL6DSJPipfintDjm2zC7xSZm93rEgtKqW1600LIBXMB8h",
// };

// const handlesubmit = (e) => {
//   e.preventDefault();
// };

// return (
//   <div className="App">
//     <h1>Stripe!</h1>
//     <Elements stripe={stripePromise}>
//       <form onSubmit={handlesubmit}>
//         <PaymentElement />
//         <button type="submit">Submit</button>
//       </form>
//     </Elements>
//   </div>
// );
// }

export default App;

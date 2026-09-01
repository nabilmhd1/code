
import ButtonLogin from "@/components/ButtonLogin";

export default function Home() { // this main function is the default export of the file, and it is a React component that represents the home page of the application. It returns a JSX element that contains a main element with a heading, a description, and a ButtonLogin component. The ButtonLogin component is imported from the components/ButtonLogin.js file and is used to render a button that links to the dashboard page.
  const isLoggedIn = true; // this variable is a boolean that indicates whether the user is logged in or not. It is used to conditionally render the ButtonLogin component based on the user's authentication status. If the user is logged in, the button will be displayed; otherwise, it will not be shown.
  const name = "Nabil"; // this variable is a string that represents the name of the user. It is not used in the current implementation, but it could be used in the future to personalize the home page or display a greeting message to the user.

  return (
   <main>
    <section className="bg-base-200">
      <div>codeFast</div>
      <div>
        <a>Pricing</a>
        <a>FAQ</a>
      </div>  
      <div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </div>
    </section>
    <section className="text-center py-20 px-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6">Collect customer feedback to build better products </h1>
    <div className="opacity-90 mb-10">
      Create a feedback board in minutes, prioritise features, and build a product your customers will love.
    </div>
    <ButtonLogin isLoggedIn={isLoggedIn}  name={name} />
    </section>
    </main>
    
  );
}

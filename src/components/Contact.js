import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    console.log("Contact Us Page Mounted");
    const timer = setInterval(() => {
      console.log("Timer in Contact Us Page");
    }, 2000);
    return () => {
      clearInterval(timer);
      console.log("Contact Us Page Unmounted");
    };
  }, []);
  console.log("Contact Us Page rendered");
  return (
    <div>
      <h1>Contact Us </h1>
      <h2>Here you can contact us:</h2>
      <ul>
        <li>Email:</li>
        <li>Mobile:</li>
        <li>LinkedIn:</li>
      </ul>
    </div>
  );
};
export default Contact;

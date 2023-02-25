const form = document.querySelector(".feedback-form");

const inputForm = document.querySelector("input");

const textareaForm = document.querySelector("textarea");

const buttonForm = document.querySelector("button");

const labelForm = document.querySelector(".labelText");

const LOCALSTORAGE_KEY = "feedback-form-state";

updateOutput();

form.addEventListener("submit", (event) =>
{
    event.preventDefault();

    const
    {
        elements:
        {
            email, message
        }

    } = event.currentTarget;
  
    if (email.value === "" || message.value === "")
    {
        return alert("Please fill in all the fields!");
    }
    const user_email = email.value;
  
    const user_message = message.value;
  
    const user_json = '{ ' + "'email': " + "'" + user_email + "', " + "'message': " + "'" + user_message + "' };";
  
    save(user_json);
  
    console.log(`\nEmail: ${email.value};`, `Message: ${message.value};`);
  
    event.currentTarget.reset();

    updateOutput();

    form.reset();
});
function save(text)
{
    try
    {
        localStorage.setItem("email", form.elements.email.value);
    
        localStorage.setItem("message", form.elements.message.value);

        const saveData = localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(text));

        console.log("\nData sent to source storage!");

        return saveData;
    }
    catch (error)
    {
        console.log("Error name - ", error.name + ";");
        
        console.log("Error message - ", error.message + ";");
    }
}
function updateOutput()
{
    inputForm.value = localStorage.getItem("email") || "";
  
    textareaForm.value = localStorage.getItem("message") || "";
}
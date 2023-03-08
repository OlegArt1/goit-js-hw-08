// Feedback

const body = document.querySelector("body");

const form = document.querySelector(".feedback-form");

const labelForm = document.querySelector("label");

const inputForm = document.querySelector("input");

const textareaForm = document.querySelector("textarea");

const widthContainer = (window.innerWidth - 480) / 2;

const LOCALSTORAGE_KEY = "feedback-form-state";

form.style.marginTop = '90px';

form.style.marginLeft = widthContainer + 'px';

updateOutput();

form.addEventListener('submit', (event) =>
{
    event.preventDefault();

    const
    {
        elements:
        {
            email, message
        }

    } = event.currentTarget;
  
    if (email.value === '' || message.value === '')
    {
        return alert("Error! Fill in the empty columns!");
    }
    else
    {
        const user_email = email.value;
  
        const user_message = message.value;
  
        const user_json = '{ ' + "'email': " + "'" + user_email + "', " + "'message': " + "'" + user_message + "' };";
  
        SaveData (user_json);
   
        GetData();
    }
    event.currentTarget.reset();

    updateOutput();

    form.reset();
});
function SaveData (text)
{
    try
    {
        localStorage.setItem("email", form.elements.email.value);
    
        localStorage.setItem("message", form.elements.message.value);

        const save_data = localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(text));

        console.log("\nData sent to source storage!");

        return save_data;
    }
    catch (error)
    {
        console.log("\nError name - ", error.name + ";");
        
        console.log("\nError message - ", error.message + ";");
    }
}
function GetData()
{
    try
    {
        console.log("\nData get to source storage!", 
             
                    "\n\nEmail: " + localStorage.getItem("email") + "; " +
            
                    "Password: " + localStorage.getItem("message") + ";");
    }
    catch (error)
    {
        console.log("\nError name - ", error.name + ";");
        
        console.log("\nError message - ", error.message + ";");
    }
}
function updateOutput()
{
    inputForm.value = localStorage.getItem("email") || "";
  
    textareaForm.value = localStorage.getItem("message") || "";
}
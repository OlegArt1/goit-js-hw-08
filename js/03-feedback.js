// Feedback

const body = document.querySelector("body");

const form = document.querySelector(".feedback-form");

const labelForm = document.querySelector("label");

const inputForm = document.querySelector("input");

const textareaForm = document.querySelector("textarea");

const widthContainer = (window.innerWidth - 480) / 2;

const LOCALSTORAGE_KEY = "feedback-form-state";

form.style.marginLeft = widthContainer + 'px';

form.style.marginTop = '90px';

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
        return body.setAttribute("onload", Notiflix.Notify.failure('Ошибка! Заполните пустые колонки!'));
    }
    else
    {
        const user_email = email.value;
  
        const user_message = message.value;
  
        const user_json = "{ " + "'email': " + '"' + user_email + "', " + "'message': " + "'" + user_message + "' };";
  
        setTimeout(() =>
        {
            saveEmail(user_email);

        }, 2000);

        setTimeout(() =>
        {
            saveMessage(user_message);

        }, 2000);

        //setTimeout(() =>
        //{
            localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(user_json));

        //    GetData();

        //}, 2000);

        console.log("\nEmail: " + localStorage.getItem("email") + "; " +
            
                    "Password: " + localStorage.getItem("message") + ";");
    }
    event.currentTarget.reset();

    updateOutput();

    form.reset();
});
function saveEmail (email)
{
    try
    {
        const save_email = localStorage.setItem("email", JSON.stringify(email));
    
        body.setAttribute("onload", Notiflix.Notify.success('Success! Data email sent to source storage!'));

        console.log("\nSuccess! Data email sent to source storage!");

        return save_email;
    }
    catch (error)
    {
        body.setAttribute("onload", Notiflix.Notify.failure('Error ' + error.name + '! ' + error.message + "!"));
        
        console.log("\nError " + error.name + "!" + "Error message - " + error.message + "!");
    }
}
function saveMessage (message)
{
    try
    {
        const save_message = localStorage.setItem("message", JSON.stringify(message));

        body.setAttribute("onload", Notiflix.Notify.success('Success! Data message sent to source storage!'));
        
        console.log("\nSuccess! Data message sent to source storage!");

        return save_message;
    }
    catch (error)
    {
        body.setAttribute("onload", Notiflix.Notify.failure('Error ' + error.name + '! ' + error.message + "!"));
        
        console.log("\nError " + error.name + "!" + "Error message - " + error.message + "!");
    }
}
function GetData()
{
    try
    {
        body.setAttribute("onload", Notiflix.Notify.warning('Success! Data get to source storage!'));

        console.log("\nSuccess! Data get to source storage!",
        
                    "\n\n\nEmail: " + localStorage.getItem("email") + "; " +
            
                    "Password: " + localStorage.getItem("message") + ";");
    }
    catch (error)
    {
        body.setAttribute("onload", Notiflix.Notify.failure('Error ' + error.name + '! ' + error.message + "!"));

        console.log("\nError " + error.name + "!" + "Error message - " + error.message + "!");
    }
}
function updateOutput()
{
    inputForm.value = localStorage.getItem("email") || "";
  
    textareaForm.value = localStorage.getItem("message") || "";
}
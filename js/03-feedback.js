// Feedback

const body = document.querySelector("body");

const form = document.querySelector('.feedback-form');

const inputForm = document.querySelector("input");

const textareaForm = document.querySelector("textarea");

const widthContainer = (window.innerWidth - 480) / 2;

const LOCALSTORAGE_KEY = 'feedback-form-state';

form.style.marginLeft = widthContainer + 'px';

form.style.marginTop = '90px';

form.addEventListener('input', (e) =>
{
    const save_data =
    {
        email: inputForm.value,
        
        message: textareaForm.value
    };
    const
    {
        elements:
        {
            email, message
        }

    } = e.currentTarget;

    const data_save = { email: email.value, message: message.value };

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data_save));
});
form.addEventListener('submit', (e) =>
{
    e.preventDefault();

    if (inputForm.value === '' || textareaForm.value === '')
    {
        return alert('Ошибка! Пустые колонки!');
    }
    else
    {
        body.setAttribute("onload", Notiflix.Notify.success('Success! Data set to source storage!'));

        console.log("\nSuccess! Data set to source storage!", "\n\nData - " + localStorage.getItem(LOCALSTORAGE_KEY));
    }
    form.reset();
});
const load = (key) =>
{
    try
    {
        const serialized_state = localStorage.getItem(key);

        return serialized_state !== null ? JSON.parse(serialized_state) : undefined;
    }
    catch (error)
    {
        body.setAttribute("onload", Notiflix.Notify.failure('Error name - ' + error.name + ';' + ' Error message - ' + error.message + ";"));
        
        console.log("\nError name - " + error.name + ";" + '\tError message - ' + error.message + ";");
    }
};
function getData()
{
    const storage_data = load(LOCALSTORAGE_KEY);

    if (storage_data)
    {
        inputForm.value = storage_data.email;
  
        textareaForm.value = storage_data.message;
    }
}
window.onload = () =>
{
    setTimeout(() =>
    {
        localStorage.removeItem(LOCALSTORAGE_KEY);

    }, 2000);
}
getData();
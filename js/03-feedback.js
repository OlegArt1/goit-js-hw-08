// Feedback

const body = document.querySelector("body");

const form = document.querySelector('.feedback-form');

const inputForm = document.querySelector("input");

const textareaForm = document.querySelector("textarea");

const widthContainer = (window.innerWidth - 480) / 2;

const LOCALSTORAGE_KEY = 'feedback-form-state';

form.style.marginLeft = widthContainer + 'px';

form.style.marginTop = '90px';

form.addEventListener('input', () =>
{
    const objectToSave =
    {
        email: inputForm.value,
        
        message: textareaForm.value
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave));
});
form.addEventListener('submit', (e) =>
{
    e.preventDefault();

    if (inputForm.value === '' || textareaForm.value === '')
    {
        return alert('Ошибка! Заполните пустые колонки!');
    }
    body.setAttribute("onload", Notiflix.Notify.success('Success! Data set to source storage!'));

    console.log("\nSuccess! Data set to source storage!", "\n\nData - " + localStorage.getItem(LOCALSTORAGE_KEY));

    form.reset();
  
    localStorage.removeItem(LOCALSTORAGE_KEY);
});
const load = (key) =>
{
    try
    {
        const serializedState = localStorage.getItem(key);

        return serializedState === null ? undefined : JSON.parse(serializedState);
    }
    catch (error)
    {
        body.setAttribute("onload", Notiflix.Notify.failure('Error name - ' + error.name + ';' + " Error message - " + error.message + ";"));
        
        console.log("\nError name - " + error.name + ";" + " Error message - " + error.message + ";");
    }
};
const storageData = load(LOCALSTORAGE_KEY);

if (storageData)
{
    inputForm.value = storageData.email;
  
    textareaForm.value = storageData.message;
}
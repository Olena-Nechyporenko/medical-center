const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

const { name, phone, mail, policy } = form.elements;

function onSubmit(e) {
  const userPolicyChecked = policy.checked;

  if (!userPolicyChecked) {
    e.preventDefault();
    return alert('Необхідно погодитися з умовами користування!');
  } else {
    const userInfo = {
      name: name.value.trim(),
      phone: phone.value.trim(),
      mail: mail.value.trim(),
    };

    //  відправляємо дані на бекенд

    form.reset();
  }
}

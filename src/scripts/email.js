const form = document.getElementById('form')
const formName = document.getElementById('name')
const formEmail = document.getElementById('email')
const formMessage = document.getElementById('message')
const formBtn = document.getElementById('form-button')

let btnFlag = false

form.addEventListener('submit', (e) => handleSubmit(e))
formEmail.addEventListener('change', handleChange)

function handleChange() {
  if (formEmail.value === '') {
    formEmail.classList.remove('invalid:border-red-600', 'focus:invalid:border-red-600')
  } else {
    formEmail.classList.add('invalid:border-red-600')
  }
}

const serviceID = 'service_9apqtit'
const templateID = 'template_xvd110j'

function changeBtn() {
  if (!btnFlag) {
    btnFlag = true
    formBtn.innerText = 'Messsage Sent'
  }
}

export function handleSubmit(e) {
  e.preventDefault()

  if (btnFlag) return

  const formData = new FormData(e.target)

  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  }

  emailjs.send(serviceID, templateID, data)
    .then(
      res => {
        formName.value = ''
        formEmail.value = ''
        formMessage.value = ''
        formEmail.classList.remove('invalid:border-red-600', 'focus:invalid:border-red-600')
        formEmail.removeEventListener('change', handleChange)
        changeBtn()
      }
    )
    .catch(err => console.log(err))
}

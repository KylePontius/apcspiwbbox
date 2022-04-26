const testimonialsContainer = document.querySelector('.testimonialsContainer')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.userImage')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Marcus Smart',
    position: 'Marketing',
    photo:
      'https://images.unsplash.com/photo-1573746943513-2f77b829a3b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    text:
    "Hello",
  },
  {
    name: 'Person Two',
    position: 'Person',
    photo: 'https://images.unsplash.com/photo-1573746943513-2f77b829a3b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    text:
      "Hello"
  },
  {
    name: 'Person Three',
    position: 'person',
    photo: 'https://images.unsplash.com/photo-1573746943513-2f77b829a3b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    text:
      "Hello"
  },
  {
    name: 'Mason',
    position: 'person',
    photo: 'https://images.unsplash.com/photo-1573746943513-2f77b829a3b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    text:
     "Hello"
  },

]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
import createEl from '../utils/createEL.js'

export default function Card(character){
  const card = createEl('div', { attrs: { class: 'card' } })
  const name = createEl('h3', { attrs: { class: 'char-name' } }, character.name)
  const birthdayYear = createEl('p', { attrs: { class: 'char-birth' } }, character.birth_year)
  const birthdayCake = createEl('img', { attrs: { src: '/assets/birthday-cake.png', height: 10 } })
  const birthday = createEl('div', { attrs: { class: 'birthday-text' } })

  birthday.append(birthdayCake, birthdayYear)
  card.append(name, birthday)
  return card
}
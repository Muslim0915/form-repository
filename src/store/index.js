import {defineStore} from "pinia";
import {useToast} from "vue-toastification";

const toast = useToast()
export const useDataStore = defineStore('data', {
  state: () => ({
    countriesOption: [
      {id: 1, label: 'Россия', value: 'RU'},
      {id: 2, label: 'Белоруссия', value: 'BY'},
      {id: 3, label: 'Казахстан', value: 'KZ'},
      {id: 4, label: 'Узбекистан', value: 'UZ'},
      {id: 5, label: 'Другое', value: 'ETC'},
    ],
    youngUsersOptions: [
      {id: 1, label: 'Творческая категория', value: 'Творческая категория'},
      {id: 2, label: 'Движение по линии', value: 'Движение по линии'},
      {id: 3, label: 'Сумо', value: 'Сумо'},
      {id: 4, label: 'Миссия "Будущий инженер', value: 'Миссия "Будущий инженер'},
      {id: 5, label: 'Scratch Junior', value: 'Scratch Junior'},
    ],
    selectedCountry: null,
    individualUsers: [
      {id: 1,  placeholder: 'Ф.И.О', value: ''},
      {id: 2, placeholder: 'Укажите ваш возраст',value: ''},
      {id: 3, placeholder: 'Email / Номер телефона', value: ''},
      {id: 5, placeholder: 'Укажите ваш город', value: ''},
      {id: 6, placeholder: 'Образовательная учреждения', value: ''},
    ],
    mentorInputs: [
      {id: 1, placeholder: 'Ф.И.О Наставника', value: ''},
      {id: 2, placeholder: 'Номер наставника +7-123-456-7890', value: ''},
    ],
    teamUsers: [
      {id: 1, user: 'Участник #1'},
    ],
    inputValue: {
      name: '',
      email: '',
      city: '',
      nameOfInstructor: '',
      emailOfInstructor: '',
      files: null,
    },
    isMainFormGroupShown: true,
    isAdditionalFormGroupShown: false,
    isIndividualUsersShown: false,
    isTeamUsersShown: false,
    inputErrored: false,
  }),
  actions: {
    getCountries(value){
      console.log(value.value);
    },
    hideMainFormGroup() {
      this.isMainFormGroupShown = false;
      this.isAdditionalFormGroupShown = true
    },
    showIndividualUsers() {
      this.isIndividualUsersShown = true
      this.hideAdditionalFormGroup()
    },
    showTeamUsers() {
      this.isTeamUsersShown = true
      this.hideAdditionalFormGroup();
    },
    hideAdditionalFormGroup() {
      this.isAdditionalFormGroupShown = false
    },
    checkInputValues() {
      document.querySelectorAll('input').forEach(input => {
        if (!input.value) {
          toast.clear()
          toast.error('Заполните все поля!');
          input.focus();
          this.inputErrored = true;
          input.classList.add('error');
          return
        }
      })
      console.log('Все поля заполнены');
    },
    addTeamUser() {
      if (this.teamUsers.length >= 3) {
        return toast.error('Максимальное количество участников - 3')
      }
      this.isDeleteButtonShown = true;
      this.teamUsers.push({
        id: this.teamUsers.length + 1,
        user: `Участник #${this.teamUsers.length + 1}`,
        isDeleteButtonShown: true,
      });
      console.log('clicked');
    },
    deleteTeamUser(user) {
      if (this.teamUsers.length > 1) {
        const index = this.teamUsers.findIndex(u => u.id === user.id);
        if (index !== -1) {
          this.teamUsers.splice(index, 1);
        }
      }
    },
    closeForms(){
      this.isAdditionalFormGroupShown = true
      this.isIndividualUsersShown = false
      this.isTeamUsersShown = false
    }
  },
})

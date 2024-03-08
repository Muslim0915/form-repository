import {defineStore} from "pinia";
import {useToast} from "vue-toastification";

const toast = useToast();

export const useDataStore = defineStore('data', {
  state: () => ({
    countriesOption: [
      {id: 1, label: 'Россия', value: 'ru'},
      {id: 2, label: 'Белоруссия', value: 'by'},
      {id: 3, label: 'Казахстан', value: 'kz'},
      {id: 4, label: 'Узбекистан', value: 'uz'},
      {id: 5, label: 'Другое', value: 'ETC'},
    ],
    languagesOption: [
      {id: 1, label: 'Русский', value: 'ru'},
      {id: 2, label: 'Белорусский', value: 'by'},
      {id: 3, label: 'Казахский', value: 'kz'},
      {id: 4, label: 'Узбекский', value: 'uz'},
    ],
    participationOption:[
      {id: 1, label: 'Индивидуальное участие', value: 'solo'},
      {id: 2, label: 'Командная участие', value: 'team'},
      {id: 3, label: 'Я наставник', value: 'mentor'},
      {id: 4, label: 'Категория ОВЗ', value: 'OVZ'},
    ],
    participationOVZOption:[
      {
        id: 1,
        label: 'Индивидуальное участие',
        value: 'solo',
      },
      {
        id: 2,
        label: 'Командная участие',
        value: 'team',
      }
    ],
    youngerUsersOptions: [
      {id: 1, label: 'Творческая категория', value: 'Творческая категория'},
      {id: 2, label: 'Движение по линии', value: 'Движение по линии'},
      {id: 3, label: 'Сумо', value: 'Сумо'},
      {id: 4, label: 'Миссия "Будущий инженер', value: 'Миссия "Будущий инженер'},
      {id: 5, label: 'Scratch Junior', value: 'Scratch Junior'},
    ],
    youngUsersOptions: [
      {id: 1, label: 'Олимпиада «Старт в робототехнику»', value: 'Олимпиада «Старт в робототехнику»'},
      {id: 2, label: 'Движение по линии DIY', value: 'Движение по линии DIY'},
      {id: 3, label: 'Движение по линии Конструкторы', value: 'Движение по линии Конструкторы'},
      {id: 4, label: 'Механическое сумо', value: 'Механическое сумо'},
      {id: 5, label: 'Интеллектуальное сумо', value: 'Интеллектуальное сумо'},
      {id: 6, label: 'Эстафета', value: 'Эстафета'},
      {id: 7, label: 'Большое путешествие', value: 'Большое путешествие'},
      {id: 8, label: 'Миссия "Вселенная бесконечна"', value: 'Миссия "Вселенная бесконечна"'},
      {id: 9, label: 'Творческая категория', value: 'Творческая категория'},
      {id: 10, label: 'Подводные роботы', value: 'Подводные роботы'},
      {id: 11, label: '3Д моделирование', value: '3Д моделирование'},
      {id: 12, label: 'Scratch', value: 'Scratch'},
    ],
    middleUsersOptions: [
      {id: 1, label: 'Олимпиада «Старт в робототехнику»', value: 'Олимпиада «Старт в робототехнику»'},
      {id: 2, label: 'Движение по линии DIY', value: 'Движение по линии DIY'},
      {id: 3, label: 'Движение по линии Конструкторы', value: 'Движение по линии Конструкторы'},
      {id: 4, label: 'Интеллектуальное сумо', value: 'Интеллектуальное сумо'},
      {id: 5, label: 'Эстафета', value: 'Эстафета'},
      {id: 6, label: 'Большое путешествие', value: 'Большое путешествие'},
      {id: 7, label: 'Миссия "Вселенная бесконечна"', value: 'Миссия "Вселенная бесконечна"'},
      {id: 8, label: 'Творческая категория', value: 'Творческая категория'},
      {id: 9, label: 'Виртуальная реальность', value: 'Виртуальная реальность'},
      {id: 10, label: 'БПЛА', value: 'БПЛА'},
      {id: 11, label: 'Станки ЧПУ', value: 'Станки ЧПУ'},
      {id: 12, label: 'Нейротехнологии', value: 'Нейротехнологии'},
      {id: 13, label: 'Python', value: 'Python'},
      {id: 14, label: 'Разработка игр', value: 'Разработка игр'},
      {id: 15, label: 'Подводные роботы', value: 'Подводные роботы'},
      {id: 16, label: '3Д моделирование', value: '3Д моделирование'},
      {id: 17, label: 'Scratch', value: 'Scratch'},
    ],
    usersOptionValues: [],
    ageOptions: [
      {id: 1, label: 'Дошкольники (5-6 лет)', value: '5-6'},
      {id: 2, label: 'Младшая категория (7-9 лет)', value: '7-9'},
      {id: 3, label: 'Средняя категория (10-13 лет)', value: '10-13'},
      {id: 4, label: 'Старшая категория (14-17 лет)', value: '14-17'},
    ],

    individualUsers: [
      {id: 1, type: 'text',placeholder: 'Ф.И.О', value: ''},
      {id: 3, type: 'text',placeholder: 'Email / Номер телефона', value: ''},
      {id: 4, type: 'number', placeholder: 'Укажите ваш возраст', value: ''},
      {id: 5, type: 'text',placeholder: 'Укажите ваш город', value: ''},
      {id: 6, type: 'text',placeholder: 'Образовательная учреждения', value: ''},
    ],
    mentorInputs: [
      {id: 1, placeholder: 'Ф.И.О Наставника', value: ''},
      {id: 2, placeholder: 'Номер наставника +7-123-456-7890', value: ''},
    ],
    teamUsers: [
      {id: 1, user: 'Участник'},
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
    isIndividualUsersShown: false,
    isTeamUsersShown: false,
    inputErrored: false,
    isOptionDisabled: true,
    getAgeOptionValue: null,
    selectedSportOption: null,
    selectedCountry: null,
    selectedParticipation: null,
    selectedParticipationOVZ: null,
    isMentorFormGroupShown: false,
    isParticipationOVZOptionShown: false,
  }),
  actions: {
    getCountries(value){
      console.log(value.value);
      this.selectedCountry = value.value
    },
    chooseAgeCategory(optionValue) {
      this.isOptionDisabled = false;
      console.log(optionValue.value);
      this.getAgeOptionValue = optionValue.value
      console.log(this.getAgeOptionValue);
    },
    chooseSportCategory(optionValue){
      console.log(optionValue.value);
      console.log(this.getAgeOptionValue);
    },
    chooseParticipation(optionValue){
      console.log(optionValue.value);
      console.log(this.selectedParticipation);
      if(this.selectedParticipation === 'OVZ') {
        this.isParticipationOVZOptionShown = true
      }
      else{
        this.isParticipationOVZOptionShown = false
      }
    },
    chooseParticipationOVZ(optionValue){
      console.log(optionValue.value);
      console.log(this.selectedParticipationOVZ);
    },
    hideMainFormGroup() {
      this.isMainFormGroupShown = false;
      if(this.selectedParticipation === 'solo') {
        this.showIndividualUsers()
      }
      if (this.selectedParticipation === 'team') {
        this.showTeamUsers()
      }
      if (this.selectedParticipation === 'mentor') {
        this.isMentorFormGroupShown = true
        this.isIndividualUsersShown = false
        this.isTeamUsersShown = false
      }
      if (this.selectedParticipation === 'OVZ') {
        if(this.selectedParticipationOVZ === 'solo'){
          this.showIndividualUsers()
        }
        if (this.selectedParticipationOVZ === 'team') {
          this.showTeamUsers()
        }
      }
    },
    showIndividualUsers() {
      this.isIndividualUsersShown = true
      this.isTeamUsersShown = false;
      this.isMentorFormGroupShown = false
    },
    showTeamUsers() {
      this.isTeamUsersShown = true
      this.isIndividualUsersShown = false
      this.isMentorFormGroupShown = false
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
        console.log('Все поля заполнены');
      });
    },
    addTeamUser() {
      if (this.teamUsers.length >= 3) {
        return toast.error('Максимальное количество участников - 3')
      }
      this.isDeleteButtonShown = true;
      this.teamUsers.push({
        id: Date.now(),
        user: `Участник`,
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
      this.isMainFormGroupShown = true;
    },

    filterMidlTeamOptions(options) {
      return options.filter(option => option.label !== 'Python')
        .concat({ id: 12, label: 'Футбол', value: 'Футбол' });
    },
  },
  getters: {
    filteredUsersOptionValues() {
      switch (this.getAgeOptionValue) {
        case '5-6':
          return this.youngerUsersOptions;
        case '7-9':
          return this.youngUsersOptions;
        case '10-13':
          return this.middleUsersOptions;
        case '14-17':
          return this.middleUsersOptions;
        default:
          return [];
      }
    },
    filteredTeamUsersOptionValue() {
      switch (this.getAgeOptionValue) {
        case '5-6':
          return this.youngerUsersOptions;
        case '7-9':
          return this.youngUsersOptions.filter(option => option.label !== 'Олимпиада «Старт в робототехнику»' && option.label !== 'Scratch')
            .concat({ id: 12, label: 'Футбол', value: 'Футбол' });
        case '10-13':
          return this.filterMidlTeamOptions(this.middleUsersOptions);
        case '14-17':
          return this.filterMidlTeamOptions(this.middleUsersOptions);
        default:
          return [];
      }
    },
  },
})

// data/projectsNavigation.js

export const projectsNav = {
  text: 'პროექტები',
  to: '/projects',
  children: [
    {
      text: 'მიმდინარე სამშენებლო სამუშაოები',
      to: '#',
      children: [
        { text: 'საერთაშორისო პროექტები', to: '/projects/ongoing-construction/international' },
        { text: 'ადგილობრივი პროექტები', to: '/projects/ongoing-construction/local' },
      ]
    },
    {
      text: 'დაგეგმილი სამშენებლო სამუშაოები',
      to: '#',
      children: [
        { text: 'საერთაშორისო პროექტები', to: '/projects/planned-construction/international' },
        { text: 'ადგილობრივი პროექტები', to: '/projects/planned-construction/local' },
      ]
    },
    {
      text: 'დასრულებული სამშენებლო სამუშაოები',
      to: '#',
      children: [
        { text: 'საერთაშორისო პროექტები', to: '/projects/completed-construction/international' },
        { text: 'ადგილობრივი პროექტები', to: '/projects/completed-construction/local' },
      ]
    },
     {
      text: 'მიმდინარე საპროექტო სამუშაოები',
      to: '#',
      children: [
        { text: 'საერთაშორისო პროექტები', to: '/projects/ongoing-design/international' },
        { text: 'ადგილობრივი პროექტები', to: '/projects/ongoing-design/local' },
      ]
    },
    {
      text: 'დაგეგმილი საპროექტო სამუშაოები',
      to: '#',
      children: [
        { text: 'საერთაშორისო პროექტები', to: '/projects/planned-design/international' },
        { text: 'ადგილობრივი პროექტები', to: '/projects/planned-design/local' },
      ]
    },
  ]
};
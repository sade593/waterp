export const tendersNav = {
  text: 'ტენდერები',
  to: '/tenders', 
  children: [
    {
      text: 'მიმდინარე ტენდერები', 
      to: '#', 
      children: [
        { text: 'საერთაშორისო ტენდერები', to: '/tenders/ongoing/international' },
        { text: 'ადგილობრივი ტენდერები', to: '/tenders/ongoing/local' },
      ]
    },
    {
      text: 'დაგეგმილი ტენდერები', 
      to: '#', 
      children: [
        { text: 'საერთაშორისო ტენდერები', to: '/tenders/planned/international' },
        { text: 'ადგილობრივი ტენდერები', to: '/tenders/planned/local' },
      ]
    },
    {
      text: 'დასრულებული ტენდერები', 
      to: '#', 
      children: [
        { text: 'საერთაშორისო ტენდერები', to: '/tenders/completed/international' },
        { text: 'ადგილობრივი ტენდერები', to: '/tenders/completed/local' },
      ]
    },
    
  ]
};
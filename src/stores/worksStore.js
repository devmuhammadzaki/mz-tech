import { defineStore } from 'pinia'

export const useWorksStore = defineStore('works', {
  state: () => ({
    works: [
      {
        id: 1,
        title: 'مجموعة هشام عسكر وشركاه',
        description: 'مشروع تصميم موقع إلكتروني لمجموعة هشام عسكر.',
        imageUrl: '/storage/Portfolios/_portfolios_512-1642408184.png',
      },
      {
        id: 2,
        title: 'الجازع',
        description: 'تصميم موقع إلكتروني لشركة الجازع.',
        imageUrl: '/storage/Portfolios/_portfolios_943-1642409913.png',
      },
      {
        id: 3,
        title: 'الحل السريع للسيارات',
        description: 'موقع إلكتروني لشركة الحل السريع للسيارات.',
        imageUrl: '/storage/Portfolios/_portfolios_502-1642409356.png',
      },
      {
        id: 4,
        title: 'العائلة اولا',
        description: 'موقع يقدم خدمات مميزة للعائلة.',
        imageUrl: '/storage/Portfolios/_portfolios_240-1642409202.png',
      },
      {
        id: 5,
        title: 'أرت فيجن',
        description: 'تصميم موقع لأرت فيجن، شركة في مجال التصوير الفوتوغرافي.',
        imageUrl: '/storage/Portfolios/_portfolios_787-1642409055.png',
      },
      {
        id: 6,
        title: 'الما',
        description: 'موقع إلكتروني لشركة الما للأثاث.',
        imageUrl: '/storage/Portfolios/_portfolios_863-1642408702.png',
      },
    ],
  }),
  persist: true,
})

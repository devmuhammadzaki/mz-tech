import { defineStore } from 'pinia'

export const useJobsStore = defineStore('jobs', {
  state: () => ({
    jobs: [
      {
        id: 1,
        title: 'مطلوب مهندسIT',
        description:
          'مطلوب مهندسIT خبره ٣ سنوات ارسال السيره الذاتيه على الايميل التالي job@mz.tech',
      },
      {
        id: 2,
        title: 'مطلوب مطور ويب Full Stack',
        description: 'خبره لا تقل عن ٣ سنوات ارسال السيره الذاتيه على الايميل التالي job@mz.tech',
      },
      {
        id: 3,
        title: 'متاح تدريب برمجه',
        description: 'إرسال السيره الذاتية على البريد الإلكتروني التالي job@mz.tech',
      },
      {
        id: 4,
        title: 'مطلوب مصمم جرافيك خبره في مجال الدعايا والاعلانات',
        description: 'خبره لا تقل عن ٣ سنوات ارسال السيره الذاتيه على الايميل التالي job@mz.tech',
      },
    ],
  }),
  persist: true,
})

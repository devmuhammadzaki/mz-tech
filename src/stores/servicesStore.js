import { defineStore } from 'pinia'

export const useServicesStore = defineStore('services', {
  state: () => ({
    services: [],
  }),

  actions: {
    setServices(services) {
      this.services = services
    },

    fetchServices() {
      if (this.services.length === 0) {
        const fetchedServices = [
          {
            id: 1,
            title: 'تصميم المواقع',
            description:
              'نحن متخصصون فى تصميم و برمجة تطبيقات ومواقع الإنترنت الاحترافية نساعدك على تحقيق أهدافك.',
            imageSrc: '@/assets/storage/Services/_services_803-1640779601.png',
            altText: 'تصميم المواقع',
          },
          {
            id: 2,
            title: 'تطوير المواقع الإلكترونية',
            description: 'لدينا فريق مُدرب ومتميز متخصص فى تطوير التطبيقات ومواقع الويب.',
            imageSrc: '@/assets/storage/Services/_services_600-1640779623.png',
            altText: 'تطوير المواقع الإلكترونية',
          },
          {
            id: 3,
            title: 'برمجة تطبيقات الهاتف المحمول',
            description: 'نوفر لعملائنا برمجة وتطوير تطبيقات الهاتف المحمول بأحدث التقنيات.',
            imageSrc: '@/assets/storage/Services/_services_514-1640779713.png',
            altText: 'برمجة تطبيقات الهاتف المحمول',
          },
          {
            id: 4,
            title: 'خدمات الإستضافة',
            description:
              'متخصصون فى خدمة الإستضافة حيث نقوم بإستضافة مواقع ويب وحجز دومين وإختيار أسماء النطاقات المتوفرة.',
            imageSrc: '@/assets/storage/Services/_services_102-1640769364.png',
            altText: 'خدمات الاستضافة',
          },
          {
            id: 5,
            title: 'تصميم الهويات التجارية',
            description:
              'نساعدك بإبراز خبراتك ومهاراتك فى سوق العمل من خلال تصميم هويتك التجارية بطريقة مبتكرة وفريدة.',
            imageSrc: '@/assets/storage/Services/_services_425-1640769468.png',
            altText: 'تصميم الهويات التجارية',
          },
          {
            id: 23,
            title: 'تأسيس شركات واستثمار اجنبي في مصر',
            description: 'نساعدك على تأسيس شركتك والإستثمار فى مصر والوصول للنجاح.',
            imageSrc: '@/assets/storage/Services/_services_116-1680677746.jpg',
            altText: 'تأسيس شركات واستثمار اجنبي في مصر',
          },
          {
            id: 8,
            title: 'تصميم فيديو موشن جرافيك',
            description:
              'نحن متخصصون في تصميم الأفلام الوثائقية، الفيديوهات التعريفية، فيديوهات الشركات والمشاريع، بالإضافة إلى موشن جرافيك لليوتيوب.',
            imageSrc: '@/assets/storage/Services/_services_182-1640770323.png',
            altText: 'تصميم فيديو موشن جرافيك',
          },
          {
            id: 9,
            title: 'الاستشارات الإدارية',
            description:
              'لدينا نخبة من المتخصصين على مستوى عالى من الكفاءة لمساعدتك على إعادة هيكلة النظام الإدارى وتطويره.',
            imageSrc: '@/assets/storage/Services/_services_909-1640770547.png',
            altText: 'الاستشارات الإدارية',
          },
          {
            id: 10,
            title: 'الاستشارات التقنية',
            description: 'نقدم استشارات تقنية متكاملة لمساعدتك في تحسين المستوى التقني لديك.',
            imageSrc: '@/assets/storage/Services/_services_424-1640770705.png',
            altText: 'الاستشارات التقنية',
          },
          {
            id: 11,
            title: 'استشارات رجال الأعمال',
            description: 'هدفنا مساعدتك على النجاح والارتقاء بعملك من خلال استشارات رجال الأعمال.',
            imageSrc: '@/assets/storage/Services/_services_998-1640771043.png',
            altText: 'استشارات رجال الأعمال',
          },
          {
            id: 12,
            title: 'إدارة حسابات السوشيال ميديا',
            description: 'لدينا فريق متكامل متخصص لمساعدتك في إدارة حسابات السوشيال ميديا.',
            imageSrc: '@/assets/storage/Services/_services_376-1640771891.jpg',
            altText: 'إدارة حسابات السوشيال ميديا',
          },
          {
            id: 13,
            title: 'التسويق الإلكتروني',
            description:
              'نوفر خدمة التسويق الإلكتروني ولدينا فريق متخصص في إدارة الحملات الإعلانية.',
            imageSrc: '@/assets/storage/Services/_services_495-1640774763.jpg',
            altText: 'التسويق الإلكتروني',
          },
          {
            id: 14,
            title: 'بوابات الدفع الإلكتروني',
            description: 'نوفر نظام آمن وسريع لسهولة التعامل بين العملاء ومقدمي الخدمة.',
            imageSrc: '@/assets/storage/Services/_services_646-1640776110.png',
            altText: 'بوابات الدفع الإلكتروني',
          },
        ]
        this.setServices(fetchedServices)
      }
    },
  },

  persist: true,
})

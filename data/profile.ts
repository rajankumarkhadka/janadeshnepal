export interface Profiles{
  id: number;
  image: string;
  name: {
    en: string;
    np: string;
  };
  position: {
    en: string;
    np: string;
  };
}

export const Profiles: Profiles[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300',
    name: {
      en: 'Rajan Kumar Khadka',
      np: 'राजन कुमार खड्का',
    },
    position: {
      en: 'Party Chairperson',
      np: 'पार्टी अध्यक्ष',
    },
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300',
    name: {
      en: 'Sita Sharma',
      np: 'सीता शर्मा',
    },
    position: {
      en: 'Vice Chairperson',
      np: 'उपाध्यक्ष',
    },
  },
];

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {images} from '../../assets/images';

interface Play {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  genre: string;
  language: string;
  image: any; // Use `require` for local images
  type: string;
  synopsis: string;
  description: string;
}

interface PlaysState {
  plays: Play[];
  selectedShow: Play | null; // Add this
}

const initialState: PlaysState = {
  plays: [
    {
      id: 1,
      title: 'ছোট গল্প',
      date: 'TBD',
      time: 'TBD',
      venue: 'Academy of Fine Arts2, Cathedral Road Kolkata',
      genre: 'Drama',
      language: 'Bengali',
      image: images.sangharam4,
      type: 'sangharam',
      synopsis: 'সারাংশ (Synopsis): পূর্বাঞ্চল গঙ্গা পদ্মা রঙ্গোৎসব ২০২৫-২০২৬',
      description:
        'মুক্তধন রঙ্গালয় এবং একাডেমি অফ ফাইন আর্টস-এর যৌথ উদ্যোগে আয়োজিত পূর্বাঞ্চল গঙ্গা পদ্মা রঙ্গোৎসব ২০২৫-২০২৬ একটি সাংস্কৃতিক উৎসব, যা ১৮ থেকে ২৫ জানুয়ারি ২০২৫ পর্যন্ত অনুষ্ঠিত হবে।',
    },
    {
      id: 2,
      title: 'গৌরের কবচ',
      date: '18 Feb, 2025',
      time: '6:30 PM',
      venue: 'Academy of Fine Arts2, Cathedral Road Kolkata',
      genre: 'Drama',
      language: 'Bengali',
      image: images.banner9,
      type: 'samstab',
      synopsis: 'সারাংশ (Synopsis): পূর্বাঞ্চল গঙ্গা পদ্মা রঙ্গোৎসব ২০২৫-২০২৬',
      description:
        'মুক্তধন রঙ্গালয় এবং একাডেমি অফ ফাইন আর্টস-এর যৌথ উদ্যোগে আয়োজিত পূর্বাঞ্চল গঙ্গা পদ্মা রঙ্গোৎসব ২০২৫-২০২৬ একটি সাংস্কৃতিক উৎসব, যা ১৮ থেকে ২৫ জানুয়ারি ২০২৫ পর্যন্ত অনুষ্ঠিত হবে।',
    },
    {
      id: 3,
      title: 'পূর্বরঙ্গ - Day1 Shows',
      date: '18 Jan, 2025',
      time: '5:30 PM - 9:00 PM',
      venue: 'Muktangan Rangalaya',
      genre: 'Drama',
      language: 'Bengali',
      image: images.banner1,
      type: 'muktangan',
      synopsis: 'সারাংশ (Synopsis): পূর্বাঞ্চল গঙ্গা পদ্মা রঙ্গোৎসব ২০২৫-২০২৬',
      description:
        'মুক্তধন রঙ্গালয় এবং একাডেমি অফ ফাইন আর্টস-এর যৌথ উদ্যোগে আয়োজিত পূর্বাঞ্চল গঙ্গা পদ্মা রঙ্গোৎসব ২০২৫-২০২৬ একটি সাংস্কৃতিক উৎসব, যা ১৮ থেকে ২৫ জানুয়ারি ২০২৫ পর্যন্ত অনুষ্ঠিত হবে।',
    },
    {
      id: 4,
      title: 'পূর্বরঙ্গ - Day2 Shows',
      date: '19 Jan, 2025',
      time: '5:00 PM - 9:00 PM',
      venue: 'Muktangan Rangalaya',
      genre: 'Drama',
      language: 'Bengali',
      image: images.Banner2,
      type: 'purbaranga', // Specify type
      synopsis: 'সারাংশ (Synopsis): পূর্বাঞ্চল গঙ্গা পদ্মা রঙ্গোৎসব ২০২৫-২০২৬',
      description:
        'মুক্তধন রঙ্গালয় এবং একাডেমি অফ ফাইন আর্টস-এর যৌথ উদ্যোগে আয়োজিত পূর্বাঞ্চল গঙ্গা পদ্মা রঙ্গোৎসব ২০২৫-২০২৬ একটি সাংস্কৃতিক উৎসব, যা ১৮ থেকে ২৫ জানুয়ারি ২০২৫ পর্যন্ত অনুষ্ঠিত হবে।',
    },
    {
      id: 5,
      title: 'পূর্বরঙ্গ - Day3 Shows',
      date: '20 Jan, 2025',
      time: '6:00 PM - 9:00 PM',
      venue: 'Muktangan Rangalaya',
      genre: 'Drama',
      language: 'Bengali',
      image: images.Banner3,
      type: 'purbaranga', // Specify type
      synopsis: 'সারাংশ (Synopsis): পূর্বাঞ্চল গঙ্গা পদ্মা রঙ্গোৎসব ২০২৫-২০২৬',
      description:
        'মুক্তধন রঙ্গালয় এবং একাডেমি অফ ফাইন আর্টস-এর যৌথ উদ্যোগে আয়োজিত পূর্বাঞ্চল গঙ্গা পদ্মা রঙ্গোৎসব ২০২৫-২০২৬ একটি সাংস্কৃতিক উৎসব, যা ১৮ থেকে ২৫ জানুয়ারি ২০২৫ পর্যন্ত অনুষ্ঠিত হবে।',
    },
    {
      id: 6,
      title: 'পূর্বরঙ্গ - Day4 Shows',
      date: '21 Jan, 2025',
      time: '6:00 PM - 9:00 PM',
      venue: 'Muktangan Rangalaya',
      genre: 'Drama',
      language: 'Bengali',
      image: images.Banner4,
      type: 'purbaranga', // Specify type
      synopsis: 'সারাংশ (Synopsis): পূর্বাঞ্চল গঙ্গা পদ্মা রঙ্গোৎসব ২০২৫-২০২৬',
      description:
        'মুক্তধন রঙ্গালয় এবং একাডেমি অফ ফাইন আর্টস-এর যৌথ উদ্যোগে আয়োজিত পূর্বাঞ্চল গঙ্গা পদ্মা রঙ্গোৎসব ২০২৫-২০২৬ একটি সাংস্কৃতিক উৎসব, যা ১৮ থেকে ২৫ জানুয়ারি ২০২৫ পর্যন্ত অনুষ্ঠিত হবে।',
    },
    {
      id: 7,
      title: 'পূর্বরঙ্গ - Day5 Shows',
      date: '22 Jan, 2025',
      time: '6:00 PM - 9:00 PM',
      venue: 'Muktangan Rangalaya',
      genre: 'Drama',
      language: 'Bengali',
      image: images.Banner5,
      type: 'purbaranga', // Specify type
      synopsis: 'সারাংশ (Synopsis): পূর্বাঞ্চল গঙ্গা পদ্মা রঙ্গোৎসব ২০২৫-২০২৬',
      description:
        'মুক্তধন রঙ্গালয় এবং একাডেমি অফ ফাইন আর্টস-এর যৌথ উদ্যোগে আয়োজিত পূর্বাঞ্চল গঙ্গা পদ্মা রঙ্গোৎসব ২০২৫-২০২৬ একটি সাংস্কৃতিক উৎসব, যা ১৮ থেকে ২৫ জানুয়ারি ২০২৫ পর্যন্ত অনুষ্ঠিত হবে।',
    },
    {
      id: 8,
      title: 'পূর্বরঙ্গ - Day6 Shows',
      date: '23 Jan, 2025',
      time: '5:00 PM - 9:00 PM',
      venue: 'Muktangan Rangalaya',
      genre: 'Drama',
      language: 'Bengali',
      image: images.Banner6,
      type: 'purbaranga', // Specify type
      synopsis: 'সারাংশ (Synopsis): পূর্বাঞ্চল গঙ্গা পদ্মা রঙ্গোৎসব ২০২৫-২০২৬',
      description:
        'মুক্তধন রঙ্গালয় এবং একাডেমি অফ ফাইন আর্টস-এর যৌথ উদ্যোগে আয়োজিত পূর্বাঞ্চল গঙ্গা পদ্মা রঙ্গোৎসব ২০২৫-২০২৬ একটি সাংস্কৃতিক উৎসব, যা ১৮ থেকে ২৫ জানুয়ারি ২০২৫ পর্যন্ত অনুষ্ঠিত হবে।',
    },
    {
      id: 9,
      title: 'পূর্বরঙ্গ - Day7 Shows',
      date: '24 Jan, 2025',
      time: '6:00 PM - 9:00 PM',
      venue: 'Muktangan Rangalaya',
      genre: 'Drama',
      language: 'Bengali',
      image: images.Banner7,
      type: 'purbaranga', // Specify type
      synopsis: 'সারাংশ (Synopsis): পূর্বাঞ্চল গঙ্গা পদ্মা রঙ্গোৎসব ২০২৫-২০২৬',
      description:
        'মুক্তধন রঙ্গালয় এবং একাডেমি অফ ফাইন আর্টস-এর যৌথ উদ্যোগে আয়োজিত পূর্বাঞ্চল গঙ্গা পদ্মা রঙ্গোৎসব ২০২৫-২০২৬ একটি সাংস্কৃতিক উৎসব, যা ১৮ থেকে ২৫ জানুয়ারি ২০২৫ পর্যন্ত অনুষ্ঠিত হবে।',
    },
    {
      id: 10,
      title: 'পূর্বরঙ্গ - Day8 Shows',
      date: '25 Jan, 2025',
      time: '6:45 PM - 9:00 PM',
      venue: 'Academy of Fine Arts2, Cathedral Road Kolkata',
      genre: 'Drama',
      language: 'Bengali',
      image: images.Banner8,
      type: 'purbaranga', // Specify type
      synopsis: 'সারাংশ (Synopsis): পূর্বাঞ্চল গঙ্গা পদ্মা রঙ্গোৎসব ২০২৫-২০২৬',
      description:
        'মুক্তধন রঙ্গালয় এবং একাডেমি অফ ফাইন আর্টস-এর যৌথ উদ্যোগে আয়োজিত পূর্বাঞ্চল গঙ্গা পদ্মা রঙ্গোৎসব ২০২৫-২০২৬ একটি সাংস্কৃতিক উৎসব, যা ১৮ থেকে ২৫ জানুয়ারি ২০২৫ পর্যন্ত অনুষ্ঠিত হবে।',
    },
  ],
  selectedShow: null, // Add this
};

const playsSlice = createSlice({
  name: 'plays',
  initialState,
  reducers: {
    setSelectedShow: (state, action: PayloadAction<number>) => {
      const play = state.plays.find(p => p.id === action.payload);
      if (play) {
        state.selectedShow = play;
      }
    },
  },
});

export const {setSelectedShow} = playsSlice.actions;
export default playsSlice.reducer;

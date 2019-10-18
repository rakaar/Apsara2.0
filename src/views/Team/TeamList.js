function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(require.context('assets/team', false, /\.(jpg)$/));

const TeamList = [
  {
    img: images['Utkarsh.jpg'],
    name: 'Utkarsh Sinha',
    role: 'Founder'
  },
  {
    img: images['Shivam.jpg'],
    name: 'Shivam Kumar Jha',
    role: 'Head of Technology'
  },
  {
    img: images['Suraj.jpg'],
    name: 'Suraj Iyyengar',
    role: 'Editorial Head'
  },
  {
    img: images['Unnikrishnan.jpg'],
    name: 'Unnikrishnan Nambiar',
    role: 'Finance Head'
  },
  {
    img: images['Shail.jpg'],
    name: 'Daswani Shail Manoj',
    role: 'Editorial Team'
  },
  {
    img: images['Pranav.jpg'],
    name: 'Pranav Krishnan',
    role: 'Editorial Team'
  },
  {
    img: images['Arya.jpg'],
    name: 'Arya S Jyothi',
    role: 'Editorial Team'
  },
  {
    img: images['Koushiki.jpg'],
    name: 'Koushiki Dasgupta Chaudhuri',
    role: 'Editorial Team'
  },
  {
    img: images['Archi.jpg'],
    name: 'Archi Banerjee',
    role: 'Editorial Team'
  },
  {
    img: images['Shikhar.jpg'],
    name: 'Shikhar Mohan',
    role: 'Editorial Team'
  },
  {
    img: images['Shaurya.jpg'],
    name: 'Shaurya Shrivastava',
    role: 'Editorial Team'
  },
  {
    img: images['Aritra.jpg'],
    name: 'Aritra Biswas',
    role: 'Editorial Team'
  },
  {
    img: images['Jasmine.jpg'],
    name: 'Jasmine Jerry A',
    role: 'Editorial Team'
  },

  {
    img: images['Aastha.jpg'],
    name: 'Aastha Jakher',
    role: 'Editorial Team'
  },
  {
    img: images['Tanishq.jpg'],
    name: 'Tanishq Kishnani',
    role: 'Product Team'
  },
  {
    img: images['Mansi.jpg'],
    name: 'Mansi Shivhare',
    role: 'Product Team'
  },
  {
    img: images['Kartik.jpg'],
    name: 'Kartik Tyagi',
    role: 'Product Team'
  },
  {
    img: images['Haveen.jpg'],
    name: 'Haveen Hrithic TL',
    role: 'Product Team'
  },
  {
    img: images['Shubham.jpg'],
    name: 'Shubham Mishra',
    role: 'Technical Team'
  },
  {
    img: images['Mukul.jpg'],
    name: 'Mukul Mehta',
    role: 'Technical Team'
  },
  {
    img: images['Raghavendra.jpg'],
    name: 'Raghavendra kaushik',
    role: 'Technical Team'
  },
  {
    img: images['Parth.jpg'],
    name: 'Parth Paradkar',
    role: 'Technical Team'
  }
];

export default TeamList;

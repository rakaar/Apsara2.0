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
    role: 'Founder',
    fb: 'https://www.facebook.com/utkarsh.sinha.186',
    ln: 'https://www.linkedin.com/in/utksn15/'
  },
  {
    img: images['Shivam.jpg'],
    name: 'Shivam Kumar Jha',
    role: 'Head of Technology',
    fb: 'https://www.facebook.com/thealphadollar',
    ln: 'https://www.linkedin.com/in/thealphadollar/'
  },
  {
    img: images['Suraj.jpg'],
    name: 'Suraj Iyyengar',
    role: 'Editorial Head',
    fb: 'https://www.facebook.com/surajiyyengar',
    ln: 'https://www.linkedin.com/in/surajiyyengar/'
  },
  {
    img: images['Unnikrishnan.jpg'],
    name: 'Unnikrishnan Nambiar',
    role: 'Finance Head',
    fb: 'https://www.facebook.com/unnikrishnan.nambiar.sj',
    ln: 'https://www.linkedin.com/in/unnikrishnannambiark/'
  },
  {
    img: images['Shail.jpg'],
    name: 'Daswani Shail Manoj',
    role: 'Editorial Team',
    fb: 'https://www.facebook.com/shail.daswani',
    ln: 'https://www.linkedin.com/in/shaildaswani/'
  },
  {
    img: images['Pranav.jpg'],
    name: 'Pranav Krishnan',
    role: 'Editorial Team',
    fb: 'https://www.facebook.com/pranavwashere',
    ln: 'https://www.linkedin.com/in/pranav-krishnan-97080a160/'
  },
  {
    img: images['Arya.jpg'],
    name: 'Arya S Jyothi',
    role: 'Editorial Team',
    fb: '#',
    ln: '#'
  },
  {
    img: images['Koushiki.jpg'],
    name: 'Koushiki Dasgupta',
    role: 'Editorial Team',
    fb: 'https://www.facebook.com/koushiki.dasguptachaudhuri.9',
    ln: 'https://www.linkedin.com/in/koushikidasguptachaudhuri99/'
  },
  {
    img: images['Archi.jpg'],
    name: 'Archi Banerjee',
    role: 'Editorial Team',
    fb: 'https://www.facebook.com/profile.php?id=100013952071030',
    ln: 'https://www.linkedin.com/in/archi-banerjee-a9b253196'
  },
  {
    img: images['Shikhar.jpg'],
    name: 'Shikhar Mohan',
    role: 'Editorial Team',
    fb: 'https://www.facebook.com/shikhar.mohan2',
    ln: 'https://www.linkedin.com/in/shikhar-mohan-a38606171'
  },
  {
    img: images['Shaurya.jpg'],
    name: 'Shaurya Shrivastava',
    role: 'Editorial Team',
    fb: 'https://www.facebook.com/shaurya.shrivastava23',
    ln: 'https://www.linkedin.com/in/shaurya-shrivastava-540677164/'
  },
  {
    img: images['Aritra.jpg'],
    name: 'Aritra Biswas',
    role: 'Editorial Team',
    fb: 'https://www.facebook.com/aritra.biswas.186',
    ln: '#'
  },
  {
    img: images['Jasmine.jpg'],
    name: 'Jasmine Jerry A',
    role: 'Editorial Team',
    fb: 'https://www.facebook.com/jasmine.jerry.a',
    ln: 'https://www.linkedin.com/in/jasminejerrya/'
  },

  {
    img: images['Aastha.jpg'],
    name: 'Aastha Jakher',
    role: 'Editorial Team',
    fb: '#',
    ln: '#'
  },
  {
    img: images['Tanishq.jpg'],
    name: 'Tanishq Kishnani',
    role: 'Product Team',
    fb: 'https://www.facebook.com/tanishq.kishnanimaux',
    ln: 'https://www.linkedin.com/in/tanishq-kishnani-4b0891194/'
  },
  {
    img: images['Mansi.jpg'],
    name: 'Mansi Shivhare',
    role: 'Product Team',
    fb: 'https://www.facebook.com/mansi.shivhare.94',
    ln: 'https://www.linkedin.com/in/mansi-shivhare-4b79b4173/'
  },
  {
    img: images['Kartik.jpg'],
    name: 'Kartik Tyagi',
    role: 'Product Team',
    fb: 'https://www.facebook.com/profile.php?id=100012190008591',
    ln: 'https://www.linkedin.com/in/kartik-tyagi-935032129/'
  },
  {
    img: images['Haveen.jpg'],
    name: 'Haveen Hrithic TL',
    role: 'Product Team',
    fb: 'https://www.facebook.com/haveen.hrithictl',
    ln: 'https://www.linkedin.com/in/haveen-hrithic-90916716b'
  },
  {
    img: images['Shubham.jpg'],
    name: 'Shubham Mishra',
    role: 'Technical Team',
    fb: 'https://www.facebook.com/grapheo12',
    ln: 'https://www.linkedin.com/in/shubham-mishra-195ab1171/'
  },
  {
    img: images['Mukul.jpg'],
    name: 'Mukul Mehta',
    role: 'Technical Team',
    fb: 'https://www.facebook.com/mukul.amehta',
    ln: 'https://www.linkedin.com/in/mukul-mehta12/'
  },
  {
    img: images['Ajay.jpg'],
    name: 'Ajay Yadav',
    role: 'Technical Team',
    fb: 'https://www.facebook.com/ajajaj2807',
    ln: 'https://www.linkedin.com/in/ajajaj2807/'
  },
  {
    img: images['Raghavendra.jpg'],
    name: 'Raghavendra kaushik',
    role: 'Technical Team',
    fb: 'https://www.facebook.com/raghavendra.kaushik.3',
    ln: 'https://www.linkedin.com/in/raghavendra-kaushik13/'
  },
  {
    img: images['Parth.jpg'],
    name: 'Parth Paradkar',
    role: 'Technical Team',
    fb: 'https://www.facebook.com/parth.paradkar.35',
    ln: 'https://www.linkedin.com/in/parth-paradkar/'
  }
];

export default TeamList;

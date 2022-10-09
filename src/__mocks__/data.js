export const currentUser = {
  profileImageURL: 'https://picsum.photos/600/300.jpg',
  name: 'Jane Doe',
};

export const sampleFeeds = [
  {
    sender: {
      profileImageURL: 'https://picsum.photos/500/300.jpg',
      name: 'John Chen',
    },
    receiver: currentUser,
    addedDate: new Date(),
    message: 'Big thanks for your help on the outage today!!',
  },
  {
    sender: {
      profileImageURL: 'https://picsum.photos/200/300.jpg',
      name: 'Alex Brown',
    },
    receiver: currentUser,
    addedDate: new Date(),
    message:
      'Thanks for you help in creating the product overview deck. Your help to showcase in this scenarios really helped in closing the loop on the story.',
  },
];

//This data I am using for the gallery (pic slides)
const app = new Vue({
  el: '#app',
  data() {
      return {
          title: 'My First Vue Web Page',
          images: [{
                  src: 'images/FamilyPic1.jpg',
                  title: 'Disney Cruise 2016'
                },
                {
                  src: 'images/FamilyPic2.jpg',
                  title: 'Disney Cruise 2016'
                },
                {
                  src: 'images/Cuenca2017.jpg',
                  title: 'Cuenca 2017'
                },
                {
                  src: 'images/familyPicture.jpg',
                  title: 'New York 2017'
                },
                {
                  src: 'images/StThomas2017.jpg',
                  title: 'St. Thomas 2017'
                },
                {
                  src: 'images/tortola2017.jpg',
                  title: 'Tortola 2017'
                },
                {
                  src: 'images/workingpandemic.jpg',
                  title: 'Working during the pandemic &amp; supervising my kids during distance learning - 2020'
                },
                {
                  src: 'images/Cuenca_Cathedral.jpg',
                  title: 'The Cathedral - Cuenca, Ecuador'
                },
                {
                  src: 'images/MySophia.jpg',
                  title: 'My Princess Sophia'
                },
                {
                  src: 'images/CuencaTwoFloorBuses.jpg',
                  title: 'Double-decker bus - Cuenca, Ecuador'
                },

            ]
      }
  } //end of data()

  
});
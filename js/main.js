Vue.component('top-menu', {
  props: {
    activeTab: {
      type: String,
      default: 'home'
    }
  },
  template: `
  <nav id="main-menu">
    <a href="./index.html" :class="{active: activeTab === 'home'}" >Home</a>
    <a href="./academic.html" :class="{active: activeTab === 'academic'}">Academics</a>
    <a href="./blog.html" :class="{active: activeTab === 'blog'}">Blog</a>
    <a href="./gallery.html" :class="{active: activeTab === 'gallery'}">Gallery</a>
    <a href="./contactMe.html" :class="{active: activeTab === 'contact'}">Contact</a>
    <a href="javascript:void(0);" class="icon" onclick="myMenuFunction()">
    <div class="hamburger-bars"></div>
    <div class="hamburger-bars"></div>
    <div class="hamburger-bars"></div>
  </a>
  </nav>`
});


//This data I am using for the gallery (pic slides)
const app = new Vue({
  el: '#app',
  data() {
    return {
      titlePage: 'My First Vue Web Page',
      images: [{
        src: 'images/FamilyPic1.jpg',
        title: 'Disney Cruise 2016',
        picNum: 1
      },
      {
        src: 'images/FamilyPic2.jpg',
        title: 'Disney Cruise 2016',
        picNum: 2
      },
      {
        src: 'images/Cuenca2017.jpg',
        title: 'Cuenca 2017',
        picNum: 3
      },
      {
        src: 'images/familyPicture.jpg',
        title: 'New York 2017',
        picNum: 4
      },
      {
        src: 'images/StThomas2017.jpg',
        title: 'St. Thomas 2017',
        picNum: 5
      },
      {
        src: 'images/tortola2017.jpg',
        title: 'Tortola 2017',
        picNum: 6
      },
      {
        src: 'images/workingpandemic.jpg',
        title: 'Working during the pandemic &amp; supervising my kids during distance learning - 2020',
        picNum: 7
      },
      {
        src: 'images/Cuenca_Cathedral.jpg',
        title: 'The Cathedral - Cuenca, Ecuador',
        picNum: 8
      },
      {
        src: 'images/MySophia.jpg',
        title: 'My Princess Sophia',
        picNum: 9
      },
      {
        src: 'images/CuencaTwoFloorBuses.jpg',
        title: 'Double-decker bus - Cuenca, Ecuador',
        picNum: 10
      }
      ]
    }
  }, //end of data()
  computed: {
    length() {
      return this.images.length;
    }
  },

});
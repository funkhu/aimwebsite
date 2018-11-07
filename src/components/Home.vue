<template>
    <div id="home">
        <div class="container">
          <div class="row">
            <div class="col s12 center-align">
              <div class="aim-header light grey-text text-lighten-3">Airconditioning Industrial Maintenance</div>
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              <div class="slider">
                <ul class="slides">
                  <li>
                    <div class="caption center-align">
                      <h3 class="light grey-text text-lighten-3">Specialising in Industrial and Commercial installations</h3>
                    </div>
                  </li>
                  <li>
                    <div class="caption left-align">
                      <h3 class="light grey-text text-lighten-3">Family owned business established in 1989</h3>
                    </div>
                  </li>
                  <li>
                    <div class="caption right-align">
                      <h3 class="light grey-text text-lighten-3">Offering maintenance contracts and service contracts</h3>
                    </div>
                  </li>
                  <li>
                    <div class="caption center-align">
                      <h3 class="light grey-text text-lighten-3">Registered on the ZNT Government data base</h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col s12 center-align">
            <router-link id="learn-more-btn" class="waves-effect light-blue accent-2 btn-large" to="about">LEARN MORE</router-link>
            <a id="request-quote" class="waves-effect blue lighten-5 waves-light btn-large">REQUEST A QUOTE</a>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".slider");
  var instances = M.Slider.init(elems, {
    indicators: false,
    height: 200,
    transition: 500,
    interval: 6000
  });
});

export default {
  name: "home",
  data() {
    return {};
  },
  created: function() {}
};
</script>

<style>
#home {
  background-image: url("../assets/scroll/hvac2_edited.jpg");
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;
  top: 0;
  position: fixed;
  width: 100%;
}

.slider .slides {
  background-color: transparent;
  text-shadow: -0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -1px black;
}

.aim-header {
  color: #212121;
  text-shadow: -0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -1px black;
  font-weight: 600;
  padding-top: 140px;
  font-size: 55px;
}

#learn-more-btn {
  border-radius: 29px;
}

#request-quote {
  border-radius: 29px;
  color: black;
  /* background-color: white;
  
  font-weight: 400; */
}
</style>


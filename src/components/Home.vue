<template>
  <div id="home" class="z-depth-1">
    <div class="col s12 center-align">
      <section id="home-banner"></section>

      <div id="btn-row">
        <router-link
          id="learn-more-btn"
          class="waves-effect light-blue accent-2 btn-large"
          to="about"
        >LEARN MORE</router-link>
        <router-link
          to="contact"
          class="request-quote waves-effect blue lighten-5 waves-light btn-large"
        >REQUEST A QUOTE</router-link>
      </div>
    </div>
    <div style="flex: 1;">
      <div class="row">
        <div class="col s5 offset-s1">
          <div class="aim-header grey-text text-darken-3">
            <span style="color: #1565C0">A.I.M</span> specialises in Industrial and Commercial Installations.
          </div>
        </div>
        <div class="col s5">
          <div
            class="aim-sub grey-text text-darken-3"
          >A.I.M carries out repairs and maintenance to a variety of equipment in the greater Durban and surrounding areas and are experienced to maintain and repair all brands of air-conditioning units, chillers and related equipment.</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>A.I.M Airconditioning Industrial Maintenance | Created by Ben Sander</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  }
};
</script>

<style>
#home {
  background-color: white;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
}

#home-banner {
  background-image: url("../assets/scroll/HVACOriginal.png");
  background-position: center center;
  background-size: cover;
  height: 28em;
  text-align: center;
  position: relative;
}

#btn-row {
  margin-top: -115px;
  margin-bottom: 58px;
}

.aim-header {
  font-weight: 500;
  font-size: 35px;
  padding-top: 28px;
}

.aim-sub {
  padding-top: 45px;
}

#learn-more-btn {
  border-radius: 29px;
}

.request-quote {
  border-radius: 29px;
  color: black;
}

.footer {
  background-color: #424242;
  min-height: 30px;
  padding-left: 10px;
  color: #dedede;
}
</style>

